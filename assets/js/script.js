document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById('game-setup');
    const resetButton = document.getElementById("reset-button");
    const gameSection = document.getElementById('game');
    const gameBoard = document.createElement('div');
    gameBoard.id = 'gameBoard';
    gameSection.appendChild(gameBoard);

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        startGame();
    });

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        startGame();
    });

    let cardsArray = [];

    function startGame() 

    function generateCardsArray(pairCount)

    function createBoard(cardsArray, cardColor) 

    let cardsChosen = [];
    let cardsChosenId = [];
    let cardsWon = [];
    let lockBoard = true;
    let firstMatch = true;

    function flipCard()

    function checkForMatch()

    cardsChosen = [];
        cardsChosenId = [];
        lockBoard = false;

        if (cardsWon.length === cardsArray.length / 2) {
            alert('Congratulations! You found them all! Great job!');
        }
    }
);