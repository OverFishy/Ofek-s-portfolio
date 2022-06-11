let numSelcted = null;
let lastNubSelected = null;
let tileSelected;

let errors = 0;

const trialBoard = [
  "--74916-5",
  "2---6-3-9",
  "-----7-1-",
  "-586----4",
  "--3----9-",
  "--62--187",
  "9-4-7---2",
  "67-83----",
  "81--45---"
]

const solution = [
  "387491625",
  "241568379",
  "569327418",
  "758619234",
  "123784596",
  "496253187",
  "934176852",
  "675832941",
  "812945763"
]

window.onload = function() {
  setGame();
}

function setGame() {
  // Digits 1-9
  for (let i = 1; i <= 9; i++) {
    // <div id='1' class='num'>1<div>
    let num = document.createElement('div');
    num.addEventListener('click', selectNumber)
    num.id = i;
    num.innerText = i;
    num.classList.add('number');
    document.getElementById('digits').appendChild(num);
  }

  // board 9 x 9
  for (let r = 0; r < 9; r++) {
    for (let c = 0; c < 9; c++) {
      let tile = document.createElement('div');
      tile.addEventListener('click', selectTile)
      tile.id = `${r.toString()}-${c.toString()}`

      if (trialBoard[r][c] != '-') {
        tile.innerHTML = trialBoard[r][c];
        tile.classList.add('generated-tile');
      }
      if (r == 2 || r == 5) {
        tile.classList.add('horizontal-line-buttom');
      }
      // if (r == 3 || r == 6) { <-- for thicker lines -->
      //   tile.classList.add('horizontal-line-top')
      // }
      if (c == 2 || c == 5) {
        tile.classList.add('vertical-line-right');
      }
      // if (c == 3 || c == 6) { <-- for thicker lines -->
      //   tile.classList.add('vertical-line-left');
      // }

      tile.classList.add('tile');
      document.getElementById('board').appendChild(tile)
    }
  }
}

function selectNumber() {
  if (numSelcted != null) {
    numSelcted.classList.remove('number-selected')
  }
  console.log(`you clicked ${this.id}`);
  numSelcted = this;
  numSelcted.classList.add('number-selected');
}

function selectTile() {
  if (this.innerText != '') {
    console.log('bounced');
    return
  };
  if (numSelcted) {

    // '0-1' .. '4-5' tile ID examples
    let coords = this.id.split('-'); // ['1', '1']
    let r = parseInt(coords[0]);
    let c = parseInt(coords[1]);

    if (solution[r][c] == numSelcted.id) {
      this.classList.add('success')
      setTimeout(() => {
        this.classList.remove('success')
      }, 1000);
      this.innerText = numSelcted.id
    } else {
      this.classList.add('error');
      setTimeout(() => {
        this.classList.remove('error')
      }, 1000)
      errors ++
      document.getElementById('errors').innerHTML = errors
    }
  }
}
