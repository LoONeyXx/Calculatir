const btns = document.querySelectorAll('.calculactor__button')
const screenCalc = document.querySelector('.calculator__screen_type_calc')
const screenResult = document.querySelector('.calculator__screen_type_result')
const resetButton = document.querySelector('.calculactor__button_type_reset')
const summButton = document.querySelector('.calculactor__button_type_sum')
const equalButton = document.querySelector('.calculactor__button_type_equal')
const staplesButton = document.querySelector('.calculactor__button_type_staples')
const prevRes = screenCalc.textContent.split();
const minusButton = document.querySelector('.calculactor__button_type_minus')
const multiplybutton = document.querySelector('.calculactor__button_type_multiply')
const devideButton = document.querySelector('.calculactor__button_type_devide')


const isElement = (operator) => screenCalc.textContent.includes(operator) ? true : false;

function resultValues() {
  if (isElement('+')) {
    const currScreen = screenCalc.textContent.split(`+`);
    screenCalc.textContent = currScreen.reduce((accumulator, currentValue) => Number(accumulator) + Number(currentValue))
    screenResult.textContent = currScreen.reduce((accumulator, currentValue) => Number(accumulator) + Number(currentValue))
  }

  if (isElement('-')) {
    const currScreen = screenCalc.textContent.split(`-`);
    screenCalc.textContent = currScreen.reduce((accumulator, currentValue) => Number(accumulator) - Number(currentValue))
    screenResult.textContent = currScreen.reduce((accumulator, currentValue) => Number(accumulator) - Number(currentValue))
  }
  if (isElement('*')) {
    const currScreen = screenCalc.textContent.split(`*`);
    screenCalc.textContent = currScreen.reduce((accumulator, currentValue) => Number(accumulator) * Number(currentValue))
    screenResult.textContent = currScreen.reduce((accumulator, currentValue) => Number(accumulator) * Number(currentValue))
  }
  if (isElement('÷')) {
    const currScreen = screenCalc.textContent.split(`÷`);
    screenCalc.textContent = currScreen.reduce((accumulator, currentValue) => Number(accumulator) / Number(currentValue))
    screenResult.textContent = currScreen.reduce((accumulator, currentValue) => Number(accumulator) / Number(currentValue))
  }
}

multiplybutton.addEventListener('click', resultValues)
devideButton.addEventListener('click', resultValues)

staplesButton.addEventListener('click', (evt) => {
  staplesButton.removeEventListener('click', addNumberOnScreen)
  screenCalc.textContent = `(${screenCalc.textContent})`
  console.log(screenCalc.textContent.split(''))
})

equalButton.addEventListener('click', () => {
  equalButton.removeEventListener('click', addNumberOnScreen)
  resultValues()
})
minusButton.addEventListener('click', resultValues)
summButton.addEventListener('click', resultValues)


function addNumberOnScreen(evt) {
  screenCalc.append(evt.target.textContent)
}
btns.forEach(el => el.addEventListener('click', addNumberOnScreen))



resetButton.addEventListener('click', (evt) => {
  evt.preventDefault()
  screenResult.textContent = '';
  screenCalc.textContent = '';
})
