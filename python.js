var blocksize = 25;
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
    context =board.getcontext("2d");

    placefood();
    document.addeventlistner("keyup", changedirection);
    update();

}

function update(){
    context.fillstyle="green";
    context.fillreact(0,0,board.width, board.height);

    context.fillstyle="yellow";
    snakeI += speed1 * blocksize;
    snakeA += speed2 * blocksize;
    context.fillreact(snakeI, snakeA,blocksize,blocksize);

    context.fillstyle="red";
    context.fillstyle(foodx, foody, blocksize, blocksize)

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
    else if(e.code == "Arrowright"){
        speed1 = 1;
        speed2 = 0;
    }
}