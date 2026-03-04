# keyboard
## Preview Link: https://editor.p5js.org/dsshji/full/2ntcuY4UG
### Concept
Once again, I was searching for inspiration in tech-aesthetic. I came across a photo on Pinterest, when the idea for my work sparked in my head. I thought that it would be nice to create something that looks like keyboard but is less predictable (and less functional, apparently). Therefore, I created a small piece where keyboard tiles of random color appear all over the screen and stay for random time between 1 and 4 seconds, and, if being clicked, display a random emoji face from the list I provided.

 

 

### Highlight code
Due to the lack of time, my code is pretty simple this time, but the part of implementing color scheme into the piece is something I struggled with for some time.
```js
class Tile {
  constructor(x, y, size) {
    this.keyHue = random(0, 360);
    ...
  draw_tile() {
      ...
  
      // Lower tile
      fill(this.keyHue, 90, 80); 
      square(this.x, this.y, this.keySize, this.cornerRadius);
      // Upper tile
      let innerSize = this.keySize * 0.8;
      let offset = (this.keySize - innerSize) / 2;
      
      fill(this.keyHue, 60, 100);
      square(this.x + offset, this.y + offset - 3, innerSize, 8);
```
I switched to colorMode(HSB) which decodes as Hue, Saturation, Brightness. Basically, the computer randomly chooses only hue, and saturation and brightness settings persist in all tiles. This way, the lightness and the intensity of the color pigment stays the same, but the actual color changes depending on the value the computer chose. It made all the tiles look the same stylistically while being different color.



Overall, for this piece I created one class for each Tile, which had methods for activating it based on timer and then resetting it; checking if the mouse is in borders when it’s clicked, so it can display a random title; drawing the tile itself. I used for loops, and some built-in p5.js functions like mouseClicked() in this sketch. I also preloaded a pixel-like font from Google Fonts for text to match with the overall aesthetic.

### Reflection
I find the way the sketch looks to be very colorful and have some tetris vibe, which I really like. I didn’t really have much time for this piece, otherwise I would like to come up with a unified color scheme to create something less colorful but more of one style.

Also, after the reading for today, I thought that it might be great to implement various ways of interaction. For instance, having a text line which will display the user’s entry and give some response to it, like emoji-reactions or some simple replies like “Yay!” and “Oh no”. I think this way the piece would turn out to be much more fun and way more interactive.
