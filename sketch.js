var img;
var click1;

function preload() {
  img = loadImage("data/ABZU.png");
}

function setup() {
  createCanvas(1242, 2208);

  click1 = new Clickable();
  click1.locate(20, 20);

  click1.cornerRadius = 20;       //Corner radius of the clickable (float)
  click1.strokeWeight = 0;
  click1.textSize = 20; 

  //This function is ran when the clickable is hovered but not pressed.
  click1.onHover = function () {
    this.color = "#AAAAFF";
    this.textColor = "#FFFFFF";
    this.text = "Puppy!";
  }
  //This function is ran when the clickable is NOT hovered.
  click1.onOutside = function () {
    this.color = "#EEEEEE";
    this.text = "♥♥♥!";
    this.textColor = "#000000";
  }
  //This function is ran when the clickable is pressed.
  click1.onPress = function () {
    this.text = "Kitty!";
  }
  //This funcion is ran when the cursor was pressed and then
  //rleased inside the clickable. If it was pressed inside and
  //then released outside this won't work.
  click1.onRelease = function () {
    this.x += 50;
  }
}

function draw() {
  image(img,0,0);

  textSize(70);
  textAlign(LEFT, TOP);
  fill(255,20,147);

  text('Puppy Loves Kitty', 200, 100);

  click1.draw();
}