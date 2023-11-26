let userCount = 1
let totalCount = 1
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

// Username 추가 버튼 함수
function addUserBtn(paramNum){

    if(totalCount > 6){
        return alert(`${totalCount} 이상 추가 하실 수 없습니다`)
    }

    let newElement = document.createElement('div');
    newElement.className = "row";
    newElement.id = 'user-' + (Number(paramNum)+1).toString();
    newElement.innerHTML = `<div class="input-group flex-nowrap ms-1">`
        + `<input type="text" class="form-control" name="name" placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping">`
        + `<div id="addBtnArea">`
        + `<div id="addBtn"><a class="btn btn-primary" id="addUserBtn" onclick="addUserBtn(${paramNum +1})">+</a></div>`
        + `</div>`
        + `<a class="btn btn-danger" id="delUserBtn" onclick="delUserBtn(${paramNum + 1})">-</a>`
        + `</div>`;

    // 추가된 버튼에서만 '+' 버튼 보이게 처리
    let element = document.querySelector(`#user-${paramNum}`);
    element.querySelector('#addBtn').remove();

    // Username input 태그 append 처리
    document.getElementById(`user-${paramNum}`).insertAdjacentElement('afterend', newElement);
    userCount++;
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
    let result  = num-1;
    while(result >= 0){
        const parentTag = document.querySelector(`#user-${result}`);
        if(parentTag != undefined && parentTag != null){
            let innerChildElement = parentTag.querySelector('#addBtnArea');
            innerChildElement.innerHTML = `<div id="addBtn">`
                 +`<a class="btn btn-primary" id="addUserBtn" onclick="addUserBtn(${result})">+</a>`
                 +`<div id="addBtn">`;

            break;
        }
        result--;
    }
}

function calculate() {
    const calculateBtn = document.querySelector('#calculate');
    calculateBtn.addEventListener('click', function () {
        if(totalCount < 2){
            return alert('정산 인원은 2명 이상입니다.');
        }
        if(selectedCurrency === ''){
            return alert('통화를 선택해주세요');
        }
        alert('정산 완료');
    });
}

// async function을 사용하여 비동기 통신임을 선언
async function reqCalculation(nickname){
     const reqData = {

     }

    const response = await fetch(`/request/calc`, {
        method: 'POST',
        body: {
            'X-CSRFToken': csrftoken,
            'Authorization': 'Bearer ' + token,
        }
    })
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