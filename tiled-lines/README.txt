In this example, we will learn a few different features of p5.js and javascript

# p5.js

`p5.js` operates like this:

	1. Whatever is defined in the `setup()` function happens first. This allows us to initialize stuff, like creating canvases or pre-existing patterns we want to start drawing with (like line color styles and thicknesses, or even an initial drawing)

	2. Then `draw()` happens next. By default, `draw()` doesn't run just once - it runs 60 times a second. You can turn off this 60 times a second behaviour by calling `noLoop()` in `setup()` - then `draw()` only runs once.

	3. You can have things that happen on specific interaction events, like a `doubleClicked()` or a keypress. Dedicated functions exist for each type of possible interaction. 

`p5.js` offers a few specific custom features: 

1. Special variables `width` and `height` whose values are the width and the heigth of the canvas

2. A `random()` function. This lets you make a random choice between options OR generate a random decimal number between 0 and 1. 

3. Specialized drawing functions like `line()`. There is also `rect()`, `circle()`, `ellipse()` and much more complicated ones like `polygon` and `Vector`. 

# Javascript

This is a full-fledged programming language, so I won't go over everything involved. You only need to know a few things: 

1. A variable is a way to attach a name to a piece of data. Whenever you see a variable, you can substitute it with its value i.e. when I declare `var x = 50`, and I later see `x` anywhere, I can just replace `x` with 50 mentally. 

2. Loops allow you to execute a series of operations over and over again. 

3. If statements let you choose to do something *if* a condition is true and something else if it is *not true*.

4. Functions let you provide inputs and execute a series of statements with those statements. 