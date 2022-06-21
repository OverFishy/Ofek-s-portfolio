const GRID_SIZE = 21

export function randomGridPosition() {
  return {
    x: Math.floor(Math.random() * GRID_SIZE) + 1,
    y: Math.floor(Math.random() * GRID_SIZE) + 1
  }
}

export function outsideGird(position) {
  return (
    position.x < 1 || position.x > GRID_SIZE ||
    position.y < 1 || position.y > GRID_SIZE
  )
}

// let tiles = []

// function fieldSetUp() {
//   for (let r = 0; r < 21; r++) {
//     for (let c = 0; c < 21; c++) {
//       let tile = document.createElement('div');
//       tile.id = `${r.toString()}-${c.toString()}`
//       tile.classList.add('generated-tile');
//       tile.classList.add('box');
//       tiles.push(tile)
//       // tile.classList.add('tile');
//       document.getElementById('board').appendChild(tile)
//     }
//   }
// }

// function fieldColors(tiles) {
//   let counter = 0
//   tiles.forEach(tile => {
//     counter ++
//     if (counter % 2 == 0) {
//       // Give green color
//       tile.classList.add('green');
//     } else {
//       // Give light-green color
//       tile.classList.add('light-green');
//     }
//   });
// }

// window.onload = function() {
//   fieldSetUp();
//   fieldColors(tiles);
// }
