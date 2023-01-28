
let cards = [];
let cardEl = document.getElementById('card-el');
let sum = 0;
let sumEl = document.getElementById('sum-el');
let message = "";
let messageEl = document.getElementById('message-el');
let isAlive = false;
let hasBlackjack = false;
let newGame = document.getElementById('newGame');

function getRandomCard() {
    let randomNumber = Math.floor (Math.random() * 13) + 1;
    if (randomNumber > 10) {
        return 10;
    } else if (randomNumber === 1){
        return 11;
    } else {
        return randomNumber;
    }
}

function startGame() { 
    isAlive = true;
    cards = [getRandomCard(), getRandomCard()];
    sum = cards[0] + cards[1];
    newGame.textContent = "NEW GAME";
    renderGame();
}

function renderGame() {
    cardEl.textContent = "cards: ";
    for (let i = 0; i < cards.length; i ++){
        cardEl.textContent += cards[i] + " / ";
    }
    sumEl.textContent = "sum: " + sum;
    if (sum <= 20){
        message = "Do you want to draw a new card?";
    } else if (sum === 21){
        message = "You've got the Blackjack!";
        hasBlackjack = true;
    } else {
        message = "You're out of the game."
        isAlive = false;
    }
    messageEl.textContent = message;
}

function newCard() {
    if (isAlive === true && hasBlackjack === false){
        let card = getRandomCard();
        cards.push (card);
        sum += card;
        sumEl.textContent = "sum: " + sum;
        newGame.textContent = "PLAY AGAIN";
        renderGame();
    }
}