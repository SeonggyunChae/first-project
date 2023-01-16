window.onload = function(){
    /* 아이디 memid를 같은 이름의 변수로 지정 */
    var memid = document.querySelector("#memid");
    /* 아이디에 포커스 지정 */
    memid.focus();
    /* input 태그들을 배열 변수로 지정 */
    var inputAr = document.getElementsByTagName("input");
    
    for(var i = 0; i < inputAr.length; i++){
        var input = inputAr[i];
        input.style.border = "1px solid lightgray";
        input.style.padding = "10px";
        if(i == 4 || i == 5){
            input.style.width = "114px";
        }
        else{
            input.style.width = "376px";
        }
    }
}

/* 가입하기 버튼 클릭하면 실행될 check() 함수 */
function check(){
    var memname = document.getElementById("memname");
    var mempwd = document.getElementById("mempwd");
    var mempwd2 = document.getElementById("mempwd2");

    if(memid.value == ""){
        alert("아이디를 입력하세요.");
        memid.focus();
    }
    else if(mempwd.value == ""){
        alert("비밀번호를 입력하세요.");
        mempwd.focus();
    }
    else if(mempwd2.value == ""){
        alert("비밀번호를 한번 더 입력해주세요.");
        mempwd2.focus();
    }
    else if(mempwd2.value != mempwd.value){
        alert("비밀번호가 다르네요.");
        mempwd2.focus();
    }
    else if(memname.value == ""){
        alert("이름을 입력해주세요.");
        memname.focus();
    }
    else{
        alert(memname.value + "님 저희 사이트에 회원이 되었습니다. 환영합니다.");
        location.href = "index.html";
    }
}