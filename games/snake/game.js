import { update as updateSnake, render as renderSnake, SNAKE_MOVES_PER_SECOND, snakeHead, SnakeAteItSelf } from './snake.js' // snake methods
import { update as updateApple, render as renderApple } from './apple.js'
import { outsideGird } from './grid.js'

let flag = true;
let lastRenderTime = 0;
let gameOver = false
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
