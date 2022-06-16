let tiles = []

function fieldSetUp() {
  for (let r = 0; r < 21; r++) {
    for (let c = 0; c < 21; c++) {
      let tile = document.createElement('div');
      tile.id = `${r.toString()}-${c.toString()}`
      tile.classList.add('generated-tile');
      tile.classList.add('box');
      tiles.push(tile)
      // tile.classList.add('tile');
      document.getElementById('board').appendChild(tile)
    }
  }
}

function fieldColors(tiles) {
  let counter = 0
  tiles.forEach(tile => {
    counter ++
    if (counter % 2 == 0) {
      // Give green color
      tile.classList.add('green');
    } else {
      // Give light-green color
      tile.classList.add('light-green');
    }
  });
}

window.onload = function() {
  fieldSetUp();
  fieldColors(tiles);
}
