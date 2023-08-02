var blocksize = 50;
var row = 8;
var column =8;
var board;
var context;
var snakeI = blocksize*5;
var snakeA = blocksize*5;
var foodx;
var foody;
var speed1 = 0;
var speed2 = 0;


window.onload = function() {
    board = document.getElementById("board");
    board.height = row * blocksize;
    board.width = column * blocksize;
    context=board.getContext("2d");

    placefood();
    document.addEventListener("keyup", changedirection);
    update();
}

function update(){
    context.fillStyle="green";
    context.fillRect(0,0,board.width, board.height);

    context.fillStyle="yellow";
    context.clear
    snakeI += speed1 ;
    snakeA += speed2 ;
    context.fillRect(snakeI, snakeA,25,25);
    requestAnimationFrame(update)

    context.fillStyle="red";
    context.fillRect(foodx, foody, 25, 25)

}

function placefood(){
    foodx = Math.floor(Math.random() * column)* blocksize;
    foody = Math.floor(Math.random() * row) * blocksize;
}
function changedirection(e){
    if(e.code == "ArrowUp"){
        speed1 = 0;
        speed2 = -1;
    }
    else if(e.code == "ArrowDown"){
        speed1 = 0;
        speed2 = 1;
    }
    else if(e.code == "ArrowLeft"){
        speed1 = -1;
        speed2 = 0;
    }
    else if(e.code == "ArrowRight"){
        speed1 = 1;
        speed2 = 0;
    }
}