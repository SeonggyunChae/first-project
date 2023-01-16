window.onload = function(){
    var userid = document.querySelector('#userid');
    userid.focus();

    var inputAr = document.getElementsByTagName("input");
    for(var i = 0; i < inputAr.length; i++){
        var input = inputAr[i];
        input.style.border = "1px solid blue";
        input.style.padding = "20px";
        input.style.width = "410px";
    }
}   

function check(){
    var userid = document.getElementById("userid");
    var userpwd = document.getElementById("userpwd");

    if(userid.value == ""){
        alert("아이디를 입력하세요!");
        userid.focus();
    }
    else if(userpwd.value == ""){
        alert("비밀번호를 입력하세요!");
        userpwd.focus();
    }
    else{
        alert(userid.value + "님 로그인 되었습니다.");
        history.back();
    }
}