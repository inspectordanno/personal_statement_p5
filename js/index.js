//global setup variables
var lastPrint;
var i = 0;
const themeBlue= "#235f8d";
const themeRed= "#e7789b"
var playButton; //this button plays and pauses the canvas
var paused = false;

//preloading images
var cheesesteakIMG;
var franklinIMG;
function preload() {
  cheesesteakIMG = loadImage('png/cheesesteak.png');
  franklinIMG = loadImage('png/franklin.png')

};




//In this section, I am writing text on the page. I realize I am repeating myself
// a ton here. I tried writing all these as one function and then invoking them with different
// text argument strings, but I ran into an error that I could not figure out. I'm guessing it has
// to do with the asynchronous nature of JavaScript and that something further down was running before
// these functions were created. Maybe we could look at it further in class.

//displays my name
function name() {
  textSize(25);
  console.log(windowWidth);
  console.log(windowHeight);
  textAlign(CENTER);
  textFont("Avenir");
  fill(themeBlue);
  text("My name is", width/2, height/4);
  textSize(150);
  text("Dan", width/2, height/1.5);
}

function age() {
  textSize(25);
  console.log(windowWidth);
  console.log(windowHeight);
  textAlign(CENTER);
  textFont("Avenir");
  fill(themeBlue);
  text("I am", width/2, height/4);
  textSize(150);
  text("26", width/2, height/1.5);
}

function born() {
  textSize(25);
  console.log(windowWidth);
  console.log(windowHeight);
  textAlign(CENTER);
  textFont("Avenir");
  fill(themeBlue);
  text("I was born in", width/2, height/4);
  textSize(150);
  text("Philly", width/2, height/1.5);
}

function franklinBorn() {
  textSize(25);
  console.log(windowWidth);
  console.log(windowHeight);
  textAlign(CENTER);
  textFont("Avenir");
  fill(themeBlue);
  text("Ben Franklin was born in", width/2, height/4);
  textSize(150);
  text("Boston", width/2, height/1.5);
}

//This is a loop that creates 26 rectangles and iterates their x position. I couldn't
// figure out how to center them as a group.

function rectangles() {
  for (let i = 1; i < 27; i++) {
    rect(i * width * .025,
        height *.5,
         10,
         10);
  };

  textSize(50);
  text('26 rectangles', width/2, height/1.25);
}

function cheesesteak() {
  image(cheesesteakIMG, width/1.5, height/3, cheesesteakIMG.width/1.5, cheesesteakIMG.height/1.5);
}

function franklin() {
  image(franklinIMG, width/8, height/5, cheesesteakIMG.width/1.5, cheesesteakIMG.height/1.5);
}




const myFunctions = [name, age, rectangles, born, cheesesteak, franklin, franklinBorn];

function setup() {
  //designing background div
  const backgroundDiv = createDiv();
  backgroundDiv.style('width', windowWidth + 'px')
    .style('height', windowHeight + 'px')
    .style('background', 'linear-gradient(to bottom right, #33ccff 0%, #ff99cc 100%)');

  //designing canvas
  const cnv = createCanvas(windowWidth/2, windowHeight/1.5); //set canvas to window width and window height
  cnv.center()
      .style('box-shadow', '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)') //box shadow from https://codepen.io/sdthornton/pen/wBZdXq
      .style('margin-top', '2.5%');

  //designing button
  playButton = createButton('Click Here to Play or Pause.');
  playButton.position(0, windowHeight*.1);
  playButton.mouseClicked(playPressed);
  playButton.style('background-color', themeBlue)
    .style('color', themeRed)
    .style('font-size', '20px')
    .style('border-color', themeRed)
    .style('font-family', 'Avenir, sans-serif');
  playButton.center('horizontal');

  //

  lastPrint = millis() - 3000;
}

//print i every 3 seconds from 0 - 10

function draw() {


  if (!paused) {
    var timeElapsed = millis() - lastPrint;
    if (timeElapsed > 3000) {
    background(themeRed);
    myFunctions[i]();
      console.log(i);
    if (i < myFunctions.length-1){
      i++;
      } else {
      i = 0;
      }
    lastPrint = millis();
    }
  }
}

function playPressed(){
  paused = !paused;
}
