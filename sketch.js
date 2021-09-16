var img;

function preload() {
  img = loadImage("data/ABZU.png");
}

function setup() {
  createCanvas(1242, 2208);

  
}

function draw() {
  image(img,0,0);

  textSize(70);
  textAlign(LEFT, TOP);
  fill(255,20,147);

  text('Puppy Loves Kitty', 200, 100);
}