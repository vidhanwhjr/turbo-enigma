var canvas = document.getElementById("game_canvas");
var ctx = canvas.getContext("2d");

//varibles for the cars 

var car1_width = 120;
var car1_height = 70;
var car1_image = "car1.jpg";
var car1_x = 10;
var car1_y = 10;

var car2_width = 120;
var car2_height = 70;
var car2_image = "car2.jpg";
var car2_x = 10;
var car2_y = 100;
var background_img = "Track.jpg";
function add(){
     background_imgTag = new Image();
     background_imgTag.onload= uploadBackground;
     background_imgTag.src= background_img;

     car1_imgTag = new Image();
     car1_imgTag.onload = uploadcar1;
     car1_imgTag.src = car1_image;

     car2_imgTag = new Image();
     car2_imgTag.onload = uploadcar2;
     car2_imgTag.src = car2_image;
}

function uploadBackground(){
    ctx.drawImage(background_imgTag, 0,0, canvas.width, canvas.height);
}

function uploadcar1(){
    ctx.drawImage(car1_imgTag, car1_x, car1_y, car1_width, car1_height);
}

function uploadcar2(){
    ctx.drawImage(car2_imgTag, car2_x, car2_y, car2_width, car2_height);
}

window.addEventListener("keydown", mykeydown);

function mykeydown(e){
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if(keyPressed == '38'){
        car1_up();
        console.log("up_arrow_key");
    }
    if(keyPressed == '40'){
        car1_down();
        console.log("down_arrow_key")
    }
    if(keyPressed == '37'){
        car1_left();
        console.log("left arrow key")
    }
    if(keyPressed == '39'){
        car1_right();
        console.log("right arrow key")
    }
    if(keyPressed == '65'){
        car2_left();
        console.log("left key")
    }
    if(keyPressed == '87'){
        car2_up();
        console.log("up key")
    }
    if(keyPressed == '83'){
        car2_down();
        console.log("down key")
    }
    if(keyPressed == '68'){
        car2_right();
        console.log("right key")
    }
}

function car2_up(){
      if (car2_y >= 0)
      {
          car2_y = car2_y - 10;
          uploadBackground();
          uploadcar1();
          uploadcar2();
      }
}
function car2_down(){
    if (car2_y >= 0)
    {
        car2_y = car2_y + 10;
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}
function car2_left(){
    if (car2_x >= 0)
    {
        car2_x = car2_x - 10;
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}
function car2_right(){
    if (car2_x >= 0)
    {
        car2_x = car2_x + 10;
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}





function car1_up(){
    if (car1_y >= 0)
    {
        car1_y = car1_y - 10;
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}
function car1_down(){
  if (car1_y >= 0)
  {
      car1_y = car1_y + 10;
      uploadBackground();
      uploadcar1();
      uploadcar2();
  }
}
function car1_left(){
  if (car1_x >= 0)
  {
      car1_x = car1_x - 10;
      uploadBackground();
      uploadcar1();
      uploadcar2();
  }
}
function car1_right(){
  if (car1_x >= 0)
  {
      car1_x = car1_x + 10;
      uploadBackground();
      uploadcar1();
      uploadcar2();
  }
}