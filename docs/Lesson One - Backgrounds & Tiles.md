# Code Super Mario - background & Tiles

In the first episode of writing a Super Mario game in JavaScript, a basic the html/JS project setup is made along with drawing tiling backgrounds.


What was covered:
* Basic NPM usage 
*  Loading images and JSON asynchronously 
*  ES6 Import/Export 
* Using canvas to save image buffers 


The goal we want to achieve is this:
 
 <h1 align="center">
  <img alt="Canvas Coordinate System" src="https://github.com/quixote15/Javascript-Super-Mario-Game/blob/master/docs/images/step01-goal.png" width="120px" />
</h1>

# Steps

## Step 1 - Init project

Pretty straight forward npm init:

`npm init`

## Step 2 - Create Project Structure

Every project has a file structure and this one has the following:

```
+-- package.json
+-- public
|   +-- js // folder to put js files
|   +-- img // folder to put images
|   +-- levels // folder to save json config files
|   +-- index.html
+-- index.html
```

As we all know the `package.json` is generated from the `npm init` command. And the others I created manually. At first all the folders are empty and the `index.html` has a simple hello world like page. We are just begining a brand new html project!

## Step 3 - Serve your page files

In order to be able to see our progress as we develop the game we will install a library to do this job for us:

`npm install serve --save`

Then, in our `package.json` we add a new script declaration:

```
{
 "name": "supermario",
 "version": "1.0.0",
 "description": "",
 "main": "index.js",
 "scripts": {
   "start": "serve ./public"
 },
 "author": "Tiago santos",
 "license": "ISC",
 "dependencies": {
   "serve": "^11.3.2"
 }
}
```

## Step 4 - Draw Background & Tiles

The main idea here is to get the Super Mario fancy tiles set template image and print/draw the sky and ground of the game.

Once we have the tiles image:

<h1 align="center">
  <img alt="Canvas Coordinate System" src="https://github.com/quixote15/Javascript-Super-Mario-Game/blob/master/docs/images/tiles.png" width="120px" />
</h1>

We can now kind of programmatically cut off the pieces we want and then draw them wherever we like.

So, first we create a function to load our tiles image:

```
// js/loaders.js
export  function  loadImage(url) {
	return  new  Promise(resolve  => {
	const  image = new  Image();
	image.addEventListener('load', () => {
		resolve(image);
	});
	image.src = url;
})
}
``` 

We created a file inside the `js`  to declare and export the function using the ES6 export syntax. Then we create another file called `main.js` to import and invoke our function.

Once we load the image we can cut off pieces of the image. Let`s begin we our ground:


```
// js/main.js
import {loadImage} from './loaders.js';

const canvas = document.getElementById('screen');
const context = canvas.getContext('2d');
context.fillRect(0,0,50,50);

loadImage('/img/tiles.png').then(image => {
	context.drawImage(image,
	0, 0, 16, 16, //subset of the image we wanna draw
	0, 0, 16, 16); // where to draw it
});
```

<h1 align="center">
  <img alt="Canvas Coordinate System" src="https://github.com/quixote15/Javascript-Super-Mario-Game/blob/master/docs/images/canvas-coords.png" width="120px" />
</h1>

The strategy is to think of an image as an matrix-like data structure and knowing the canvas coordenate system the result of the `drawImage` function is: 

<h1 align="center">
  <img alt="Canvas Coordinate System" src="https://github.com/quixote15/Javascript-Super-Mario-Game/blob/master/docs/images/drawImage-result.png" width="120px" />
</h1>

With this concept in mind we can draw anything, the code for doing this should look clearer to you now!!!

The original source code commit and files of the tutorial:

Source code with step-by-step commits:

https://github.com/meth-meth-method/super-mario/releases/tag/ep1

