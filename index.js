
let cards = [] // array - ordered list of items
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ''
let messageEl = document.getElementById('message-el')

let player = {
    name: "Player",
    chips: 200
}


let playerEl = document.getElementById('player-el')
playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard() {
    let randomCard = Math.floor(Math.random() * 13) + 1
    if ( randomCard > 10) {
        return 10
    }
    else if ( randomCard === 1) {
        return 11
    }
    else {
        return randomCard
    }
    
}

function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    let randomNumber = 0
    dealerCards = document.getElementById('dealer')
    dealerCards.textContent = "Dealer has: " + randomNumber
    renderGame()
}

function renderGame(){
    let showCards = document.getElementById('cards')
    showCards.textContent = "Cards: "
    for (let i=0; i < cards.length; i++) {
        showCards.textContent += cards[i] + " "
    }
    let sumCards = document.getElementById('sum')
    sumCards.textContent = "You have: " + sum 

    if (sum <= 20) {
        message = '- Do you want to draw a new card?🃏'
    }
    else if ( sum === 21) {
        message = '- You have BlackJack'
        hasBlackJack = true
        player.chips = player.chips + 10
        let playerEl = document.getElementById('player-el')
        playerEl.textContent = player.name + ": $" + player.chips
        stopGame()
    }
    else {
        message = "- You're out of the game🤯"
        isAlive = false
        player.chips = player.chips - 10
        let playerEl = document.getElementById('player-el')
        playerEl.textContent = player.name + ": $" + player.chips
        stopGame()
        
    }
    messageEl.textContent = message
}

function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let oneCard = getRandomCard()
        sum += oneCard
        cards.push(oneCard)
        renderGame()
    }
    
}
function stopGame(){
    isAlive = false
    let randomNumber = Math.floor(Math.random() * 5) + 16
    dealerCards = document.getElementById('dealer')
    dealerCards.textContent = "Dealer has: " + randomNumber
    if(sum < randomNumber) {
      message = '- You lost, -$10 from your account!!😭'
      messageEl.textContent = message
      player.chips = player.chips - 10
      let playerEl = document.getElementById('player-el')
      playerEl.textContent = player.name + ": $" + player.chips
    }
    else if (sum > randomNumber && sum < 21) {
      message = '- You won $10!! Congrats!!!🥳'
      messageEl.textContent = message
      player.chips = player.chips + 10
      let playerEl = document.getElementById('player-el')
      playerEl.textContent = player.name + ": $" + player.chips
    }
    else if (sum === 21) {
        message = "- WOW it's a Blackjack You won: $20🤩"
        messageEl.textContent = message
        player.chips = player.chips + 20
        let playerEl = document.getElementById('player-el')
        playerEl.textContent = player.name + ": $" + player.chips
    }
    else if (sum == randomNumber) {
      message = "- It's a draw You won: $5🙁"
      messageEl.textContent = message
      player.chips = player.chips + 5
      let playerEl = document.getElementById('player-el')
      playerEl.textContent = player.name + ": $" + player.chips
    }
}


