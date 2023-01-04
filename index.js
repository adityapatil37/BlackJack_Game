let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message =""
let messageEl = document.getElementById("message-el")
// let sumEl = document.getElementById("sum-el")
let sumEl = document.querySelector("#sum-el")
let CardsEl = document.getElementById("cards-el")

function getRandomCard() {
    let randonNumber = Math.floor(Math.random()*13)+1
    if (randonNumber>10){
        return 10
    } else if(randonNumber===1){
        return 11
    }else {
        return randonNumber
    }
}

function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame(){
    CardsEl.textContent = "Cards: " 
    
    for(i=0; i<cards.length; i++) {
        CardsEl.textContent += cards[i] + " "
    }
    if ( sum <= 20) {
        message="Do u want to draw a new card?"
    } else if (sum === 21){
        message="you got black jack"
        hasBlackJack = true
    } else{
        message="you are out of the game"
        isAlive = false
    }
    messageEl.textContent = message
    sumEl.textContent = "Sum: " + sum
}

function newCard() {

    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        console.log(cards)
        renderGame()
    }
    console.log("Drawing a new card from the deck") 
}
