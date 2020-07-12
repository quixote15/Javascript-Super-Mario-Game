
/**
 * context.drawImage(image, 
    0, 0, 16, 16, //subset we wanna draw
    0, 0, 16, 16); // where to draw it
 */
export function loadImage(url) {
  return new Promise(resolve => {
    const image =  new Image();
    image.addEventListener('load', () => {
      resolve(image);
    });
    image.src = url;
  })
}

export function loadLevel(name) {
  return fetch(`levels/${name}.json`)
  .then(r => r.json());
}
