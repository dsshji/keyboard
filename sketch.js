let myFont;
function preload() {
  // Load a custom font
  myFont = loadFont('PixelifySans-VariableFont_wght.ttf');
}

let tiles = [];
let tileSize = 50;
let gap = 3; 

// A list of characters to pick from
let chars = [":)", ":D", "XD", ":(", 
  ";)", ":O", "-_-", "^_^", ":/", "=]", ":P", "D:", ":3", ":|", "?", "!", "!!", "??"];

class Tile {
  constructor(x, y, size) {
    this.keyHue = random(0, 360);
    this.x = x;
    this.y = y;
    this.keySize = size;
    this.cornerRadius = 10; 
    this.timer = 0; 
    this.label = ""; // Starts empty
  }

  activate() {
    this.timer = random(120, 240); 
    this.label = ""; // Reset text when it reappears
    this.keyHue = random(0, 360); //reset the color when the tile reappears
  }

  // check if mouse is inside this tile during click
  checkClick(mx, my) {
    if (this.timer > 0) {
      if(mx > this.x && mx < this.x + this.keySize && 
         my > this.y && my < this.y + this.keySize) {
        this.label = random(chars); //choose random label from the list
      }
    }
  }

  draw_tile() {
    if (this.timer > 0) {
      this.timer--; 

      noStroke();
      
      // Lower tile
      fill(this.keyHue, 90, 80); 
      square(this.x, this.y, this.keySize, this.cornerRadius);

      // Upper tile
      let innerSize = this.keySize * 0.8;
      let offset = (this.keySize - innerSize) / 2;
      
      fill(this.keyHue, 60, 100);
      square(this.x + offset, this.y + offset - 3, innerSize, 8);
      
      // Draw the label if it exists
      if (this.label != "") {
        fill(0);
        text(this.label, this.x + this.keySize/2, this.y + this.keySize/2 - 3);
      }
    }
  }
}

function setup() {
  createCanvas(372, 372); //adjust for the key sizes and offsets
  colorMode(HSB); //to change only hue but have the same settings other than that
  
  textFont(myFont);
  textAlign(CENTER, CENTER);
  textSize(24);
  
  for (let x = gap; x < width - gap; x += (tileSize + gap)) {
    for (let y = gap; y < height - gap; y += (tileSize + gap)) {
      tiles.push(new Tile(x, y, tileSize));
    }
  }
}

function draw() {
  background(0); 

  // Randomly pick a tile to switch on
  if (random(1) > 0.1) { //time offset
    let t = random(tiles);
    if (t.timer <= 0) {
      t.activate();
    }
  }
  //draw all tiles
  for (let obj of tiles) {
    obj.draw_tile();
  }
}

// when mouse is clicked inside the tile switch on the label
function mousePressed() {
  for (let t of tiles) {
    t.checkClick(mouseX, mouseY);
  }
}