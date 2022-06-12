import { update as updateSnake, render as renderSnake, SNAKE_MOVES_PER_SECOND, snakeHead, SnakeAteItSelf } from './snake.js' // snake methods
import { update as updateApple, render as renderApple } from './apple.js'
import { outsideGird } from './grid.js'

let flag = true;
let lastRenderTime = 0;
let gameOver = false
let startX;
let startY;
let endX;
let endY;

const gameBoard = document.getElementById('game-board')

function mainGame(currentTime) {
  if (flag == false) return;
  if (gameOver) {
    if (confirm('You lost, press ok to restart')) {
      window.location = '/'
    }
    return
  }

  window.requestAnimationFrame(mainGame); // when I can render the next frame
  const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000
  if (secondsSinceLastRender < 1 / SNAKE_MOVES_PER_SECOND) return;

  lastRenderTime = currentTime;

  update()
  render()
}

window.requestAnimationFrame(mainGame);

function update() {
  gameBoard.innerHTML = '';
  updateSnake();
  updateApple();
  checkDeath()
}

function render() {
  renderSnake(gameBoard);
  renderApple(gameBoard);
}

function checkDeath() {
  gameOver = outsideGird(snakeHead) || SnakeAteItSelf()
}

// function mobileTesting() {
//   window.addEventListener('touchmove', (e) => {
//     const touchList = e.changedTouches;
//     confirm(`${touchList.item(0).radiusX}`) })
// }

function mobileTesting(params) {
  window.addEventListener('touchstart', (e) => {
    const touchList = e.changedTouches;
    const swipe = touchList.item(0)
    startX = swipe.screenX
    startY = swipe.screenY
  })
  window.addEventListener('touchend', (e) => {
    const touchList = e.changedTouches;
    const swipe = touchList.item(0)
    endX = swipe.screenX
    endY = swipe.screenY
    desideSwipes()
  })
}
function desideSwipes() {
  // confirm(`startX: ${startX}, endX: ${endX}, startY: ${startY}, endY: ${endY}`)
  const distanceHorizontal = Math.abs(startX - endX)
  const distanceVertical = Math.abs(startY - endY)
  if (distanceHorizontal > distanceVertical) {
    // thre user attempted horizontal swipe
    if (startX < endX) {
      console.log('swipe right!')
    } else {
      console.log('swipe left!')
    }
  } else if (distanceHorizontal < distanceVertical) {
    // the user attempted vertical swipe
    if (startY < endY) {
      console.log('swipe down!')
    } else {
      console.log('swipe up!')
    }
  }
  // if (startX > endX) {
  //   console.log('swipe left')
  // } else {
  //   console.log('swipt right')
  // }
}

document.addEventListener("DOMContentLoaded", mobileTesting);
