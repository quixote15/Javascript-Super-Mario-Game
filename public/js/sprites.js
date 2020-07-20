import SpriteSheet from './SpriteSheet.js';
import {loadImage, loadLevel} from './loaders.js';
export function loadBackgroundSprites() {
  return loadImage('/img/tiles.png').then(image => {
    console.log('image loaded', image)
    const sprites = new SpriteSheet(image, 16, 16);
    sprites.defineTile('ground', 0, 0);
    sprites.defineTile('sky', 3, 23);
    return sprites;
  })
}

export function loadMarioSprites() {
  return loadImage('/img/characters.gif').then(image => {
    console.log('mario image loaded', image)
    const sprites = new SpriteSheet(image, 16, 16);
    sprites.define('idle', 276, 44, 16, 16);

    return sprites;
  })
}
