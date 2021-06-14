var canvas=new fabric.Canvas("myCanvas");

var width=30;
var height=30;

var playerX=10;
var playerY=10;

var playerObject="";
var blockImg="";

function playerUpdate(){
    fabric.Image.fromURL("player.png", function(Img){
        playerObject=Img;
        playerObject.scaleToWidth(150);
        playerObject.scaleToHeight(140);
        playerObject.set({
        top:playerY,
        left:playerX
        });
        canvas.add(playerObject);
    });
} 
function newImage(getImage){
    fabric.Image.fromURL(getImage,function(Img){
        blockImg=Img;
        blockImg.scaleToWidth(width);
        blockImg.scaleToHeight(height);
        blockImg.set({
            top:playerY,
            left:playerX
        });
        canvas.add(blockImg);
    });
}
window.addEventListener("keydown",my_keydown);

function my_keydown(e){
    var keyPressed=e.keyCode;
    if(e.shiftKey == true && keyPressed == "80"){
	console.log("p and shift pressed together");
	width = width + 10;
	height = height + 10;
	document.getElementById("width").innerHTML = width;
	document.getElementById("height").innerHTML = height;	
}
if(e.shiftKey == true && keyPressed == "77"){
	console.log("m and shift pressed together");
	width = width - 10;
	height = height - 10;
	document.getElementById("width").innerHTML = width;
	document.getElementById("height").innerHTML = height;
}
    if(keyPressed=="70"){
        newImage("spiderman_face.png");
        console.log("f");
    }
    if(keyPressed=="66"){
        newImage("ironman_body.png");
        console.log("b");
    }
    if(keyPressed=="76"){
        newImage("hulk_legs.png");
        console.log("l");
    }
    if(keyPressed=="82"){
        newImage("thor_right_hand.png");
        console.log("r");
    }
    if(keyPressed=="72"){
        newImage("thor_left_hand.png");
        console.log("h");
    }
    if(keyPressed=="38"){
        up();
        console.log("up");
    }
    if(keyPressed=="40"){
        down();
        console.log("down");
    }
    if(keyPressed=="39"){
        right();
        console.log("right");
    }
    if(keyPressed=="37"){
        left();
        console.log("left");
    }
}
function up(){
    if(playerY>=0){
        playerY=playerY-height;
        console.log("block image height "+height);
        console.log("up key pressed, X = "+playerX+" Y = "+playerY);
        canvas.remove(playerObject);
        playerUpdate();
    }
}
function down(){
    if(playerY<=500){
        playerY=playerY+height;
        console.log("block image height "+height);
        console.log("left key pressed, X = "+playerX+" Y = "+playerY);
        canvas.remove(playerObject);
        playerUpdate();
    }
}
function left(){
    if(playerX>=0){
        playerX=playerX-width;
        console.log("block image width "+width);
        console.log("left key pressed, X = "+playerX+" Y = "+playerY);
        canvas.remove(playerObject);
        playerUpdate();
    }
}
function right(){
    if(playerX<=850){
        playerX=playerX+width;
        console.log("block image width "+width);
        console.log("right key pressed, X = "+playerX+" Y = "+playerY);
        canvas.remove(playerObject);
        playerUpdate();
    }
}