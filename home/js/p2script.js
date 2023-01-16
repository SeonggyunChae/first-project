window.onload = function(){
    var btn1 = document.getElementById('open');

    btn1.onclick = function(){
        document.getElementById('desc').style.display = "block";
            document.getElementById('open').style.display = "none";
    };

    var btn2 = document.getElementById('close');
    btn2.onclick = function(){
        document.getElementById('desc').style.display = "none";
        document.getElementById('open').style.display = "block";
    };
};