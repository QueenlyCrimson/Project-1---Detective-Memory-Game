let c1 = '0'
let c2 = '0'
let c3 = '0'
let c4 = '0'
let turnNum = 0
let mPairs = 0
let msgBoard = document.querySelector('.console')
let cardCount = 0
let winCondition = 6

let cardA1 = {
  ref: document.querySelectorAll('.card')[0],
  wValue: 0,
  mValue: 0
}
let cardA2 = {
  ref: document.querySelectorAll('.card')[1],
  wValue: 0,
  mValue: 0
}
let cardB1 = {
  ref: document.querySelectorAll('.card')[2],
  wValue: 0,
  mValue: 0
}
let cardB2 = {
  ref: document.querySelectorAll('.card')[3],
  wValue: 0,
  mValue: 0
}
let cardC1 = {
  ref: document.querySelectorAll('.card')[4],
  wValue: 0,
  mValue: 0
}
let cardC2 = {
  ref: document.querySelectorAll('.card')[5],
  wValue: 0,
  mValue: 0
}
let cardD1 = {
  ref: document.querySelectorAll('.card')[6],
  wValue: 0,
  mValue: 0
}
let cardD2 = {
  ref: document.querySelectorAll('.card')[7],
  wValue: 0,
  mValue: 0
}
let cardE1 = {
  ref: document.querySelectorAll('.card')[8],
  wValue: 0,
  mValue: 0
}
let cardE2 = {
  ref: document.querySelectorAll('.card')[9],
  wValue: 0,
  mValue: 0
}

let cardArray = [
  cardA1,
  cardA2,
  cardB1,
  cardB2,
  cardC1,
  cardC2,
  cardD1,
  cardD2,
  cardE1,
  cardE2
]

let flipFunction = (card) => {
  if (card.wValue == 0) {
    if (card.mValue == 0) {
      turnNum++
      card.ref.classList.toggle('flipped')
      if (turnNum % 2 == 0) {
        c2 = card
        console.log(`This is ${c2.ref.innerText}`)
        checkFunction(card)
      } else {
        c1 = card
        c1.wValue++
        console.log(`This is ${c1.ref.innerText}`)
      }
    }
  }
}

let winGame = () => {
  msgBoard.innerText = `Game Win!`
}

let matchCard = () => {
  mPairs++
  msgBoard.innerText = `Matched Clues: ${mPairs}`
}

let checkFunction = (card) => {
  if (c1.ref.innerText === c2.ref.innerText) {
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
    for (let i = 0; i < cardArray.length; i++) {
      cardArray[i].wValue = 20
    }
    setTimeout(() => {
      c1.ref.classList.toggle('flipped')
      c2.ref.classList.toggle('flipped')
      for (let i = 0; i < cardArray.length; i++) {
        cardArray[i].wValue = 0
      }
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

cardC1.ref.addEventListener('click', () => {
  flipFunction(cardC1)
})

cardC2.ref.addEventListener('click', () => {
  flipFunction(cardC2)
})

cardD1.ref.addEventListener('click', () => {
  flipFunction(cardD1)
})

cardD2.ref.addEventListener('click', () => {
  flipFunction(cardD2)
})

cardE1.ref.addEventListener('click', () => {
  flipFunction(cardE1)
})

cardE2.ref.addEventListener('click', () => {
  flipFunction(cardE2)
})
