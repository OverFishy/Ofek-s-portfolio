let inputDirection = { x: 0, y: 0 }; // by default snake dont move
let lastInputDirection = { x: 0, y: 0 }; // to be used as a check

window.addEventListener('keydown', e => {
  switch (e.key) {
    case 'ArrowUp' :
      if (lastInputDirection.y !== 0) break;
      inputDirection = { x: 0, y: -1}
      break
    case 'ArrowDown' :
      if (lastInputDirection.y !== 0) break;
      inputDirection = { x: 0, y: 1}
      break
    case 'ArrowRight' :
      if (lastInputDirection.x !== 0) break;
      inputDirection = { x: 1, y: 0}
      break
    case 'ArrowLeft' :
      if (lastInputDirection.x !== 0) break;
      inputDirection = { x: -1, y: 0}
  }
})

export function getInputDirection() {
  lastInputDirection = inputDirection;
  return inputDirection
}
