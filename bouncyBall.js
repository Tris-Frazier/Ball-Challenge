var ball1 = document.getElementById('ball1');
var ball2 = document.getElementById('ball2');
var ball3 = document.getElementById('ball3');
var ball4 = document.getElementById('ball4');
var ball5 = document.getElementById('ball5');
var ball6 = document.getElementById('ball6');
var ball7 = document.getElementById('ball7');
var ball8 = document.getElementById('ball8');
var velocityX = 25;
var velocityY = 25;
var positionX = 0;
var positionY = 0;
var reverseX = false;
var reverseY = false;
var switchZindex = false;

function moveBall(){
    var Xmin = 25;
    var Xmax = 375;
    var Ymin = 75;
    var Ymax = 450;
        
    if(reverseX === false){
        positionX = positionX + velocityX;
        ball1.style.left = positionX + "px";
        ball1.style.background = "lightblue";
        ball2.style.left = positionX + "px";
        ball2.style.height = 50 + "px";
        ball2.style.zIndex = 3;
        ball3.style.left = positionX + "px";
        ball3.style.width = 50 + "px";
        ball4.style.left = positionX + "px";
        ball4.style.height = 50 + "px";
        ball4.style.width = 50 + "px";
        ball4.style.zIndex = 3;
        ball5.style.opacity = 1;
        ball6.style.borderRadius = 50 + "%";
        ball7.style.borderRadius = 50 + "%";
        ball8.style.height = 50 + "px";
        ball8.style.width = 50 + "px";
    }

    if(reverseX === true){
        positionX = positionX - velocityX;
        ball1.style.left = positionX + "px";
        ball1.style.background = "black";
        ball2.style.left = positionX + "px";
        ball2.style.height = 25 + "px";
        ball2.style.zIndex = 8;
        ball3.style.left = positionX + "px";
        ball3.style.width = 25 + "px";
        ball4.style.left = positionX + "px";
        ball4.style.height = 30 + "px";
        ball4.style.width = 30 + "px";
        ball4.style.zIndex = 8;
        ball5.style.opacity = 0.2;
        ball6.style.borderRadius = 50 + "% " + 20 + "% / " + 10 + "% " + 40 + "%";
        ball7.style.borderRadius = 50 + "% " + 15 + "%";
        ball8.style.height = 70 + "px";
        ball8.style.width = 70 + "px";   
    }

    if(reverseY === false){
        positionY = positionY + velocityY;
        ball5.style.top = positionY + "px";
        ball6.style.top = positionY + "px";
        ball7.style.top = positionY + "px";
        ball8.style.top = positionY + "px";
    }

    if(reverseY === true){
        positionY = positionY - velocityY;
        ball5.style.top = positionY + "px";
        ball6.style.top = positionY + "px";
        ball7.style.top = positionY + "px";
        ball8.style.top = positionY + "px";
    }

    if(positionX > Xmax || positionX < Xmin){
        reverseX = !reverseX;
        reverseY = !reverseY;
    }
}


setInterval(moveBall, 200);


