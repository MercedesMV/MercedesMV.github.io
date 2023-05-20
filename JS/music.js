
var mySong = document.getElementById("mySong");
var icon = document.getElementById("icon");

    icon.onclick = function(){
        if(mySong.paused){
            mySong.play();
            icon.src = "imagenes/iconMusic.png";
        }else{
            mySong.pause();
            icon.src = "imagenes/iconMusic.png";
        }
    }