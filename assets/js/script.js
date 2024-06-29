/**
 * DOM EventListener
 * global variables for game sections
 */
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById('game-setup');
    const resetButton = document.getElementById("reset-button");
    const gameSection = document.getElementById('game');
    const gameBoard = document.createElement('div');
    gameBoard.id = 'gameBoard';
    gameSection.appendChild(gameBoard);

    /**
     *  Declare variables for Music and Volume
     *  Set music to off by default
    */
    const backgroundMusic = document.getElementById('background-music');
    const gameMusic = document.getElementById('game-music');
    const volumeControl = document.getElementById('volume-control');
    const volumeIcon = document.getElementById('volume-icon');

    const gameMusicArray = [gameMusic, backgroundMusic];
    let currentGameMusic = gameMusic;

    let isMusicPlaying = false;

    /* EventListener to prevent game from starting when user input incomplete */
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        startGame();
    });

    /* Control which music is played based on game state */
    volumeControl.addEventListener('click', () => {
        if (isMusicPlaying) {
            backgroundMusic.pause();
            currentGameMusic.pause();
            volumeIcon.classList.remove('fa-volume-up');
            volumeIcon.classList.add('fa-volume-xmark');
        } else {
            /* Resume the appropriate music based on game state */
            if (gameBoard.innerHTML === '') {
                backgroundMusic.play();
            } else {
                currentGameMusic.play();
            }
            volumeIcon.classList.remove('fa-volume-xmark');
            volumeIcon.classList.add('fa-volume-up');
        }
        isMusicPlaying = !isMusicPlaying;
    });

    /* Create cards */
    let cardsArray = [];

    function startGame() {
        const playerName = document.getElementById('name').value;
        let numberOfCards = parseInt(document.getElementById('cards-number').value);
        let cardColor = document.getElementById('card-color').value;

        cardsArray = generateCardsArray(numberOfCards / 2);

        /**
         *  Clear previous game board upon reset button clicked
         *  Set board class based on the number of cards
        */
        gameBoard.innerHTML = '';
        gameBoard.className = `board-${numberOfCards}`;

        createBoard(cardsArray, cardColor);

        /* Stop background music and play game music */
        backgroundMusic.pause();
        if (isMusicPlaying) {
            currentGameMusic.play();
        }
    }

    /**
     *  Generate cards array with 12 name:image object pairs 
     *  Randomize card selection for better UX
     * */
    function generateCardsArray(pairCount) {
        let baseCards = [
            { name: 'bracelet    pronunciation: breɪslət', img: 'image1' },
            { name: 'plush toy    pronunciation: plʌʃ tɔɪ', img: 'image2' },
            { name: 'suit    pronunciation: suːt', img: 'image3' },
            { name: 'hanger    pronunciation: hæŋə', img: 'image4' },
            { name: 'crayon    pronunciation: kreɪɒn', img: 'image5' },
            { name: 'arrow    pronunciation: ærəʊ', img: 'image6' },
            { name: 'calculator    pronunciation: kælkjəleɪtə', img: 'image7' },
            { name: 'menu    pronunciation: mɛnjuː', img: 'image8' },
            { name: 'ballpoint pen    pronunciation: bɔːlˌpɔɪnt pɛn', img: 'image9' },
            { name: 'sports car    pronunciation: spɔːts kɑː', img: 'image10' },
            { name: 'hard drive    pronunciation: hɑːd draɪv', img: 'image11' },
            { name: 'bowl    pronunciation: bəʊl', img: 'image12' }
        ];

        const selectedCards = baseCards.slice(0, pairCount);
        return selectedCards.concat(selectedCards).sort(() => 0.5 - Math.random());
    }

    /**
     * Create gameBoard by appending name and img based on number of cards selected
     * EventListener for flipCard
     */
    function createBoard(cardsArray, cardColor) {
        cardsArray.forEach((item, index) => {
            let card = document.createElement('div');
            card.setAttribute('class', `card ${cardColor}`);
            card.setAttribute('data-id', index);

            let frontFace = document.createElement('div');
            frontFace.setAttribute('class', 'front');
            frontFace.innerHTML = '<span class="question-mark">?</span>';

            let backFace = document.createElement('div');
            backFace.setAttribute('class', 'back');
            backFace.style.backgroundImage = `url('assets/images/${item.img}.jpg')`;

            card.appendChild(frontFace);
            card.appendChild(backFace);

            card.addEventListener('click', flipCard);
            gameBoard.appendChild(card);
        });
    }

    /**
     * Define variables for checking flipped cards for match
     * Pass value of cards chosen to checkForMatch function
     * Boolean condition lockBoard to prevent user from flipping more than 2 cards at the same time
     */
    let cardsChosen = [];
    let cardsChosenId = [];
    let cardsWon = [];
    let lockBoard = true;
    let firstMatch = true;

    function flipCard() {
        let cardId = this.getAttribute('data-id');
        cardsChosen.push(cardsArray[cardId].name);
        cardsChosenId.push(cardId);
        this.classList.add('flipped');

        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch, 500);
        }
    }

    /**
     * Check cards flipped for match, continue game based on outcome
     * Show message to user when cards match containing vocabulary and pronunciation
     */
    function checkForMatch() {
        let cards = document.querySelectorAll('.card');
        let optionOneId = cardsChosenId[0];
        let optionTwoId = cardsChosenId[1];

        if (optionOneId === optionTwoId) {
            cards[optionOneId].classList.remove('flipped');
            cards[optionTwoId].classList.remove('flipped');
        } else if (cardsChosen[0] === cardsChosen[1]) {
            cards[optionOneId].removeEventListener('click', flipCard);
            cards[optionTwoId].removeEventListener('click', flipCard);
            cardsWon.push(cardsChosen);
            let message = firstMatch
                ? `Awesome! You found the first word!\n\n${cardsChosen[0]}`
                : `Awesome! You found another word!\n\n${cardsChosen[0]}`;
            alert(message);
            firstMatch = false;
        } else {
            cards[optionOneId].classList.remove('flipped');
            cards[optionTwoId].classList.remove('flipped');
        }

        /**
         * Unlock board when no match
         * final message when all cards have been flipped
        */
        cardsChosen = [];
        cardsChosenId = [];
        lockBoard = false;

        if (cardsWon.length === cardsArray.length / 2) {
            alert('Congratulations! You found them all! Great job!');
        }
    }

    /* Function and EventListener for game reset */
    function resetGame() {
        cardsChosen = [];
        cardsChosenId = [];
        cardsWon = [];
        lockBoard = false;
        gameBoard.innerHTML = '';
        form.reset();
        firstMatch = true;

        /* Stop current game music and select a new random game music */
        gameMusicArray.forEach(music => music.pause());
        currentGameMusic = gameMusicArray[Math.floor(Math.random() * gameMusicArray.length)];

        if (isMusicPlaying) {
            currentGameMusic.play();
        }
    }

    resetButton.addEventListener('click', resetGame);

    /* Start a new game */
    startGame();
});
