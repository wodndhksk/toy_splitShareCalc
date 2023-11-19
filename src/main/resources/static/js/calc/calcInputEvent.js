let userCount = 1
let totalCount = 1

// Username 추가 버튼 함수
function addUserBtn(paramNum){

    if(totalCount > 6){
        return alert(`${totalCount} 이상 추가 하실 수 없습니다`)
    }

    let newElement = document.createElement('div');
    newElement.className = "row";
    newElement.id = 'user-' + (Number(paramNum)+1).toString();
    newElement.innerHTML = `<div class="input-group flex-nowrap ms-1">`
        + `<input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping">`
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