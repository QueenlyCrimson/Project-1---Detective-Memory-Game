let shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    const temp = array[i]
    array[i] = array[j]
    array[j] = temp
  }
  stagedSet = array
} //Fisher Yates Algorithm my beloved

//the elements that will get shuffled into the board
let cardDivObject = [
  `<div class="card smard">1<img src ="images/620270.png"></img></div>`,
  `<div class="card smard">1<img src ="images/620270.png"></img></div>`,
  `<div class="card smard">2<img src ="images/chalk-outline-rubber-stamp-chalk-outline-of-body-11563045960d1hito10da.png"></img></div>`,
  `<div class="card smard">2<img src ="images/chalk-outline-rubber-stamp-chalk-outline-of-body-11563045960d1hito10da.png"></img></div>`,
  `<div class="card smard">3<img src ="images/emojipng.com-286576.png"></img></div>`,
  `<div class="card smard">3<img src ="images/emojipng.com-286576.png"></img></div>`,
  `<div class="card smard">4<img src ="images/NicePng_danger-png_2116402.png"></img></div>`,
  `<div class="card smard">4<img src ="images/NicePng_danger-png_2116402.png"></img></div>`,
  `<div class="card smard">5<img src ="images/pngfind.com-biohazard-symbol-png-265735.png"></img></div>`,
  `<div class="card smard">5<img src ="images/pngfind.com-biohazard-symbol-png-265735.png"></img></div>`
]

//the cardDivObject gets shuffled into here, and then this gets pasted
//onto the board
let stagedSet = []

//shuffles and starts the game
let shuffleFunction = () => {
  shuffleArray(cardDivObject)
  playArea.innerHTML = ''
  playArea.insertAdjacentHTML(`afterbegin`, stagedSet)
  cardCount = 0
  winCondition = 10
  msgBoard.innerText = 'Matched Clues: 0'
  startGame()
}

//the variables for all the currently on screen elements and divs
//the cards need to be assigned later
let shuffleButton = document.querySelector('.shuffle')

let playArea = document.querySelector('.play-area')

let msgBoard = document.querySelector('.console')

let matchBoard = document.querySelector('.match')

function getRandomInt(max) {
  return Math.floor(Math.random() * max)
} //thank you mozilla credits to mozilla for this piece of code

//i was having trouble figuring out why the addeventlisteners weren't
//listening and then i realized i needed to initialize them
//on the same scope and at the same time
let startGame = () => {
  let c1 = '0'
  let c2 = '0'
  let turnNum = 0
  let mPairs = 0
  let cardCount = 0
  let winCondition = 10

  //the variable for every card
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

  //this exists so that i can keep the player from clicking
  //on other cards while a no match event is going on
  //a for loop goes through this array and changes a certain value so
  //it cant be clicked on
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

  //flips the cards and holds onto the data for the two most recent
  //cards to see if they match or not
  let flipFunction = (card) => {
    if (card.wValue == 0) {
      if (card.mValue == 0) {
        turnNum++
        card.ref.classList.toggle('flipped')
        if (turnNum % 2 == 0) {
          c2 = card
          checkFunction(card)
        } else {
          c1 = card
          c1.wValue++
        }
      }
    }
  }

  //wins the game
  let winGame = () => {
    msgBoard.innerText = `Game Win!`
  }

  let matchCard = () => {
    mPairs++
    msgBoard.innerText = `Matched Clues: ${mPairs}`
    matchBoard.innerText = 'Match!'
    setTimeout(() => {
      matchBoard.innerText = ''
    }, 1500)
  }

  //by far the most convoluted bit, i have it so that it looks
  //at both c1 and c2 to compare them and see if their invisible text
  //is the same
  let checkFunction = (card) => {
    if (c1.ref.innerText === c2.ref.innerText) {
      cardCount++
      cardCount++
      c1.ref.classList.toggle('card')
      c2.ref.classList.toggle('card')
      matchCard()
      c1.wValue++
      c2.wValue++
      if (cardCount == winCondition) {
        winGame()
      }
    } else {
      for (let i = 0; i < cardArray.length; i++) {
        cardArray[i].wValue = 20
        c1.wValue = 20
        c2.wValue = 20
      }
      matchBoard.innerText = 'No Match! 3s'
      setTimeout(() => {
        matchBoard.innerText = 'No Match! 2s'
        setTimeout(() => {
          matchBoard.innerText = 'No Match! 1s'
          setTimeout(() => {
            matchBoard.innerText = ''
          }, 1000)
        }, 1000)
      }, 1000)
      setTimeout(() => {
        c1.ref.classList.toggle('flipped')
        c2.ref.classList.toggle('flipped')
        c1.wValue = 0
        c2.wValue = 0
        for (let i = 0; i < cardArray.length; i++) {
          cardArray[i].wValue = 0
        }
      }, 3000)
    }
  }

  //the plethora of event listeners
  cardA1.ref.addEventListener('click', () => {
    flipFunction(cardA1)
  })

  cardA2.ref.addEventListener('click', () => {
    flipFunction(cardA2)
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
}

shuffleButton.addEventListener('click', () => {
  shuffleFunction()
})
