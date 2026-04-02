# Keyboard

An interactive, generative keyboard sketch built with [p5.js](https://p5js.org/), created for an Intro to Interactive Media course at NYU Abu Dhabi.

**[▶ View live](https://editor.p5js.org/dsshji/full/2ntcuY4UG)**

## About

Inspired by keyboard aesthetics found on Pinterest, this sketch renders colorful keyboard-style tiles that randomly appear across the canvas, stay for 1–4 seconds, and disappear. Click any tile to reveal a random emoji face.

The color scheme uses HSB color mode: only the hue is randomized per tile, while saturation and brightness stay fixed. This keeps all tiles visually consistent in style and intensity while varying in actual color — giving the piece a cohesive, playful look despite its randomness.

## How It Works

Each tile is its own class instance with methods to activate on a timer, check if the mouse is within its bounds on click, display a random emoji from a preset list, and draw itself with a layered 3D-style appearance (a lower tile and a smaller, offset upper surface). For loops spawn tiles across the canvas, and `mouseClicked()` handles interactions.

A pixel-style font loaded from Google Fonts ties the text to the overall tech aesthetic.

## Built With

- [p5.js](https://p5js.org/reference/)
- Google Fonts (pixel font)
