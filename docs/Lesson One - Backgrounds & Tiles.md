```
import {loadImage} from './loaders.js';

const canvas = document.getElementById('screen');
const context = canvas.getContext('2d');

context.fillRect(0,0,50,50);
loadImage('/img/tiles.png').then(image => {
  context.drawImage(image, 
    0, 0, 16, 16, //subset we wanna draw
    0, 0, 16, 16); // where to draw it
});
```
