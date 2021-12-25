const board = document.querySelector('#board')
const SQUARES_NUMBER = 420
const colors = ['#BD9457', '#041B09', '#2B0402', '#930023', '#455F54', '#971E16', '#9592B1', '#8B6B52']

for (let i = 0; i < SQUARES_NUMBER; i++) {
  const square = document.createElement('div')
  square.classList.add('square')

  square.addEventListener('mouseover', () => setColor(square))

  square.addEventListener('mouseleave', () => removeColor(square))

  board.append(square)
}

function setColor(element) {
  const color = getRandomColor()
  element.style.backgroundColor = color
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(element) {
  element.style.backgroundColor = '#1d1d1d'
  element.style.boxShadow = `0 0 2px #000`

}

function getRandomColor() {
 const index = Math.floor(Math.random() * colors.length)
 return colors[index]
}