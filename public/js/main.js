
import {loadLevel} from './loaders.js';
import {loadBackgroundSprites, loadMarioSprites} from './sprites.js';
import Compositor from './Compositor.js';
import {createBackgroundLayer} from './layers.js';


const canvas = document.getElementById('screen');

const context = canvas.getContext('2d');

context.fillRect(0,0,50,50);


function createSpriteLayer(sprite, pos){
  return function drawSprite(context) {
    for(let i = 0; i< 20; i++) {
      sprite.draw('idle', context, pos.x + i * 16, pos.y)

    }
  }
}


Promise
  .all([loadMarioSprites(), loadBackgroundSprites(), loadLevel('1.1')])
  .then(([marioSprite, backgroundSprites, level]) => {
    const comp = new Compositor();
    const backgroundLayer = createBackgroundLayer(level.backgrounds, backgroundSprites);
    comp.layers.push(backgroundLayer);
    
    const pos = {
      x: 0,
      y: 0
    };
    const spriteLayer = createSpriteLayer(marioSprite, pos);
    comp.layers.push(spriteLayer);
    
    
    function update() {
      comp.draw(context);
      pos.x+=2;
      pos.y+=2;
      requestAnimationFrame(update); // built-in browser method
    }

    update();
    
  })
