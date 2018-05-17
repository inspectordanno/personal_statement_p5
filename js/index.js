var lastPrint;
var i = 0;

function name() {
  console.log("Hello! My name is Dan");
}

function age() {
  console.log("I'm 26");
}

function born() {
  console.log("I was born in philly");
}

const myFunctions = [name, age, born];

function setup() {
  createCanvas(windowWidth, windowHeight); //set canvas to window width and window height
 //background of pink
  lastPrint = millis() - 3000;
}

//print i every 3 seconds from 0 - 10

function draw() {
  background("#dc3787");
  var timeElapsed = millis() - lastPrint;
  if (timeElapsed > 3000) {
    myFunctions[i]();
      console.log(i);
    if(i < myFunctions.length-1){
      i++;
    }
    else{
      i = 0;
    }


    lastPrint = millis();

  }
}

function windowResized() { //P5 window resize function
  resizeCanvas(windowWidth, windowHeight);
}
