        //문서내의 아이디 bottle을 변수 bottle로 지정
        var bottle = document.querySelector("#bottle");

        //문서 내의 클래스 smallpic을 배열 변수 smallPic으로 지정
        var smallPic = document.querySelectorAll(".smallpic");
        
        //smallpic을 클릭하면 changePic 함수가 실행되도록 지정
        for(var i = 0; i < smallPic.length; i++){
            smallPic[i].addEventListener("click", changePic);
        }
        
        //bottle 변수의 이미지 경로를 선택한 그림의 경로로 변경함
        function changePic(){
            var newPic = this.src;
            bottle.setAttribute("src", newPic);
        }