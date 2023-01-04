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








// let age = 100

// if (age<100) {
//     console.log("Not Elegible")
// } else if (age === 100){
//     console.log("Here is your birthday card from the king")
// }else{
//     console.log("You have already gotten one")
// }

// console.log(4 === 3) //false
// console.log(5>2) //true
// console.log(12>12) //false
// console.log(3<0) //false
// console.log(3>=3) //true
// console.log(11<=11) //true
// console.log(3<=2) //false


// for (let i=10; i<101; i+=10) {

//     console.log(i)

// }


// let messages = [
//     "Hello, how is it going?",
//     "im great how are you",
//     "all good been working on my portfolio lately",
//     "same here!",
//     "great to hear"
// ]

// for (let i=0; i<messages.length; i+=1) {
//     console.log(messages[i])
// }

// let cards = [7, 3, 9]

// for(let i=0; i<cards.length; i++) {


//     console.log(cards[i])

// }


// let sentence = ["Hello", "my", "name", "is", "Aditya"]
// let greetingEl = document.getElementById("greeting-el")

// for(i=0; i<sentence.length; i++){
//     greetingEl.textContent += sentence[i] + " "
// }