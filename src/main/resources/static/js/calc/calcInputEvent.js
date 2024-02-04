let totalCount = 0
let selectedCurrency = '';

//Drop_Down 클릭 이벤트
let dds = document.querySelectorAll('.dropdown-item')
dds.forEach((item)=>{
    item.addEventListener('click', function (e) {
        const textElement = item.innerText;
        document.querySelector('#dropdownMenuButton1').innerText = textElement;
        selectedCurrency = textElement;
    });
});

calculate(); //정산 버튼
addUserBtn(0); //초기 입력 input 태그 생성

// Username 추가 버튼 함수
function addUserBtn(paramNum){
    const currentNum = Number(paramNum);
    let nextNum = Number(paramNum) + 1;

    if(totalCount > 6){
        return alert(`${totalCount} 이상 추가 하실 수 없습니다`)
    }

    let newElement = document.createElement('div');
    newElement.className = "row";
    newElement.id = 'user-' + currentNum.toString();
    newElement.innerHTML = `<div class="input-group flex-nowrap ms-1">`
        + `<input type="text" class="form-control" name="name" placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping">`
        + addUserBtnHtml(nextNum) // '+' 버튼 영역
        + `<a class="btn btn-danger" id="delUserBtn" onclick="delUserBtn(${currentNum})">-</a>`
        + `</div>`;

    if(paramNum > 0) {
        // 추가된 버튼에서만 '+' 버튼 보이게 처리
        let element = document.querySelector(`#user-${paramNum-1}`);
        element.querySelector('#addBtn').remove();
        // Username input 태그 append 처리
        document.getElementById(`user-${paramNum-1}`).insertAdjacentElement('afterend', newElement);
    } else {
        const parentsElement = document.querySelector('#user_row');
        parentsElement.appendChild(newElement);
    }
    totalCount++;
}

// Username 삭제 버튼 함수
function delUserBtn(num){
    if(totalCount <= 1){
        return alert("User 가 하나 이하입니다.")
    }
    document.querySelector(`#user-${num}`).remove();

    // 버튼이 존재하지 않을때 (중복 생성 방지)
    const isBtnExist= document.querySelector('#addUserBtn');
    if(isBtnExist === undefined || isBtnExist === null ){
        repositionBtn(num);
    }
    totalCount--;
}

// 마지막 input 태그가 삭제시 '+' 버튼 위치 이동
function repositionBtn(num) {
    const currentNum = Number(num-1);
    const nextNum = Number(num);

    while(currentNum >= 0){
        const parentTag = document.querySelector(`#user-${currentNum}`);
        if(parentTag != undefined && parentTag != null){
            let innerChildElement = parentTag.querySelector('#addBtnArea');
            innerChildElement.innerHTML = addUserBtnHtml(nextNum);

            break;
        }
        // result--;
    }
}

// '+' 버튼 영역
function addUserBtnHtml(paramNum){
    return `<div id="addBtnArea">`
        + `<div id="addBtn"><a class="btn btn-primary" id="addUserBtn" onclick="addUserBtn(${paramNum})">+</a></div>`
        + `</div>`
}

function calcValidation() {
    if(totalCount < 2){
        return alert('정산 인원은 2명 이상입니다.');
    }
    if(selectedCurrency === ''){
        return alert('통화를 선택해주세요');
    }
}

/**
 * 1. 금액은 숫자만 입력가능하게 수정필요
 * 2.  '+' 버튼 누를때 새로 추가된 input 태그에 자동 focus 처리 필요
 * 3. 정산하기 버튼 마무리 하기
 * 4. 최초 input 태그 리팩토링 필요 (html 에 스크립트를 실행해서 최초 input 를 생성하는 방법으로 변경)
 *  => 수정시 2개의 html 부분 수정 해야하는 비효율 때문에 리팩토링 해야함.
 */
function calculate() {
    const calculateBtn = document.querySelector('#calculate');
    calculateBtn.addEventListener('click', function () {
        calcValidation();// validation 체크
        const names = document.querySelectorAll('[name="name"]');
        // alert('정산 완료\n' + names[0]);
        console.log(getAvg())
        calcResult(names, getAvg());
    });
}

function getAvg(){
    const count = Number(totalCount);
    const price = Number(document.querySelector('#totalPrice').value);

    return Number(price/count).toFixed(2); // 소수점 2자리
}

// 정산 결과 영역
function calcResult(names, avg) {
    let resultAreaElement = document.querySelector("#resultArea");
    resultAreaElement.innerHTML = resultAreaHtml(names, avg);
}

// 정산 결과 html 함수
function resultAreaHtml(names, avg) {
    let result = '';
    let count = 0;
    const currency = '' //통화 추가하기

    for(const i in names){
        if(names[i].value !== undefined){
            result += `<tr><th scope="row">${i}</th>`
                    + `<td>${names[i].value}</td>`
                    + `<td>${avg}</td>`
                    // + `<td>${currency}</td>`
                    + `</tr>`
            count += 1;
        }
    }
    console.log('count', count);
    // 해당 영역 노출/비노출 처리
    let styleElement = document.querySelector('#calcResultTag');
    if(count > 0) {
        styleElement.style.display = 'block';
        console.log('들어옴');
    }else {
        styleElement.style.display = 'none';
    }
    return result;
}

// async function을 사용하여 비동기 통신임을 선언
async function reqCalculation(nickname){
    const names = document.querySelector('[name="name"]');

    const url = '/request/calc';
    const options = {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json;charset=UTF-8'
        },
        body: JSON.stringify({
            property_one: value_one,
            property_two: value_two
        })
    };

    const response = await fetch(url, options)
    // await로 백엔드에서 리턴을 받은 후 다음 라인이 실행
    if (response.status == 200){
        data = await response.json()
        return data
    }
    else {
        console.log(response.status, "유저 활동 데이터가 없습니다")
        return response.status
    }
}