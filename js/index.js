//global variables
var lastPrint; //the time the last slide was printed to the canvas
var i = 0;
const themeBlue= "#235f8d";
const themeRed= "#e7789b"
var playButton; //this button plays and pauses the canvas
var paused = false; //the initial state of paused is false

//preloading images
var cheesesteakIMG;
var franklinIMG;
var milkIMG;
function preload() {
  cheesesteakIMG = loadImage('png/cheesesteak.png');
  franklinIMG = loadImage('png/franklin.png');
  redSoxIMG = loadImage('png/redsox.png');
  milkIMG = loadImage('png/milk.png');
}

//In this section, I am writing text on the page. I realize I am repeating myself
// a ton here. I tried writing all these as one function and then invoking them with different
// text argument strings:


// function writeText(stringOne,stringTwo) {
//   textSize(25);
//   console.log(windowWidth);
//   console.log(windowHeight);
//   textAlign(CENTER);
//   textFont("Avenir");
//   fill(themeBlue);
//   text(stringOne, width/2, height/4);
//   textSize(150);
//   text(stringTwo, width/2, height/1.5);
// }
//
// var name = writeText('My name is', 'Dan');
// var age = writeText('I am', '26');
// var born = writeText('I was born in', 'Philly');
// var franklinBorn = writeText('Ben Franklin was born in', 'Boston');


//  But I ran into an error that I could not figure out. I'm guessing it has
//  to do with the asynchronous nature of JavaScript and that something further down was running before
// these functions were created. Maybe we could look at it further in class.


//so I had to write everything out:

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

//displays my age
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

//when i was born
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

//ben franklin bio
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

function milkStreet() {
  textSize(25);
  console.log(windowWidth);
  console.log(windowHeight);
  textAlign(CENTER);
  textFont("Avenir");
  fill(themeBlue);
  text("He was born on", width/2, height/4);
  textSize(150);
  text("Milk Street", width/2, height/1.5);
}

//end
function end() {
  textSize(25);
  console.log(windowWidth);
  console.log(windowHeight);
  textAlign(CENTER);
  textFont("Avenir");
  fill(themeBlue);
  text("What a diversion!", width/2, height/4);
  textSize(150);
  text("The End", width/2, height/1.5);
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
  text('26 squares', width/2, height/1.25);
}

//Writing images to the canvas


//Tried to condense this but it didn't work due to same problem
// as before with the text.

// function writePictureRightSideofCanvas(img) {
//   image(img, width/1.5, height/3, img.width/1.5, img.height/1.5);
// }
//
// function writePictureLeftSideofCanvas(img) {
//   image(img, width/8, height/5, img.width/1.5, img.height/1.5);
// }
//
// var cheesesteak = writePictureLeftSideofCanvas(cheesesteakIMG);
// var redSox = writePictureLeftSideofCanvas(redSoxIMG);
// var franklin = writePictureRightSideofCanvas(franklinIMG);
// var milk = writePictureRightSideofCanvas(milkIMG);

//So I had to repeat myself a lot again

function cheesesteak() {
  image(cheesesteakIMG, width/1.5, height/3, cheesesteakIMG.width/1.5, cheesesteakIMG.height/1.5);
}

function franklin() {
  image(franklinIMG, width/8, height/5, cheesesteakIMG.width/1.5, cheesesteakIMG.height/1.5);
}

function redSox() {
  image(redSoxIMG, width/1.5, height/3, cheesesteakIMG.width/1.5, cheesesteakIMG.height/1.5);
}

function milk() {
  image(milkIMG, width/8, height/5, cheesesteakIMG.width/1.5, cheesesteakIMG.height/1.5);
}

//These are the functions that are iterated over

const myFunctions = [name, age, rectangles, born, cheesesteak, franklin, franklinBorn, redSox, milkStreet, milk, end];

//setup function

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
  playButton = createButton('Click Here to Pause or Resume.');
  playButton.position(0, windowHeight*.1);
  playButton.mouseClicked(playPressed); //when the button is clicked, playPressed runs, which sets playButton to its opposite, stopping or resuming the slideshow
  playButton.style('background-color', themeBlue)
    .style('color', themeRed)
    .style('font-size', '20px')
    .style('border-color', themeRed)
    .style('font-family', 'Avenir, sans-serif');
  playButton.center('horizontal');

  //lastPrint is set to the current millisecond time minus three seconds,
  //which gives us a negative value very close to zero.

  lastPrint = millis() - 3000;
}

function draw() {

// timeElapsed is the duration between the current time and lastPrint, when the previous function was run.
//  When timeElapsed is greater than 3 seconds (basically as soon as it hits 3 seconds), a function
//  in the array is run, and then i is iterated to the next value. Then, lastPrint is set to the
//  current millisecond time. In this way, lastPrint is constantly updated, yielding a timeElapsed value
//  that approaches the three second threshold.

//The initial state is not paused

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

//This function sets paused to its opposite, which either pauses or resumes the slideshow

function playPressed(){
  paused = !paused;
}
