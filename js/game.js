let c1 = '0'
let c2 = '0'
let c3 = '0'
let c4 = '0'
let turnNum = 0
let mPairs = 0
let msgBoard = document.querySelector('.console')
let cardCount = 0
let winCondition = 4

let cardA1 = {
  ref: document.querySelectorAll('.card')[0],
  wValue: 0
}
let cardA2 = {
  ref: document.querySelectorAll('.card')[1],
  wValue: 0
}
let cardB1 = {
  ref: document.querySelectorAll('.card')[2],
  wValue: 0
}
let cardB2 = {
  ref: document.querySelectorAll('.card')[3],
  wValue: 0
}
let flipFunction = (card) => {
  if (card.wValue == 0) {
    turnNum++
    card.ref.classList.toggle('flipped')
    if (turnNum % 2 == 0) {
      c2 = card
      console.log(`This is ${c2.innerText}`)
      checkFunction(card)
    } else {
      c1 = card
      console.log(`This is ${c1.innerText}`)
    }
  }
}

let winGame = () => {
  msgBoard.innerText = `Game Win!`
}

let matchCard = () => {
  mPairs++
  msgBoard.innerText = `Matched Pairs: ${mPairs}`
}

let checkFunction = (card) => {
  if (c1.innerText == c2.innerText) {
    console.log('It worked?')
    cardCount++
    cardCount++
    console.log(cardCount)
    c1.ref.classList.toggle('card')
    c2.ref.classList.toggle('card')
    matchCard()
    c1.wValue++
    c2.wValue++
    if (cardCount == winCondition) {
      winGame()
    }
  } else {
    console.log('No match')
    setTimeout(() => {
      c1.classList.toggle('flipped')
      c2.classList.toggle('flipped')
    }, 3000)
  }
}

cardA1.ref.addEventListener('click', () => {
  flipFunction(cardA1)
})

cardA2.ref.addEventListener('click', () => {
  flipFunction(cardA2)
  console.log('click!')
})

cardB1.ref.addEventListener('click', () => {
  flipFunction(cardB1)
})

cardB2.ref.addEventListener('click', () => {
  flipFunction(cardB2)
})

//cardC1.ref.addEventListener('click', () => {
// flipFunction(cardC1)
//})

//cardC2.ref.addEventListener('click', () => {
//  flipFunction(cardC2)
//})
