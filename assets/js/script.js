document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById('game-setup');
    const resetButton = document.getElementById("reset-button");
    const gameSection = document.getElementById('game');
    const gameBoard = document.createElement('div');
    gameBoard.id = 'gameBoard';
    gameSection.appendChild(gameBoard);

    // Music elements
    const backgroundMusic = document.getElementById('background-music');
    const gameMusic = document.getElementById('game-music');
    const volumeControl = document.getElementById('volume-control');
    const volumeIcon = document.getElementById('volume-icon');

    const gameMusicArray = [gameMusic, backgroundMusic];
    let currentGameMusic = gameMusic;

    let isMusicPlaying = false;

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        startGame();
    });

    volumeControl.addEventListener('click', () => {
        if (isMusicPlaying) {
            backgroundMusic.pause();
            currentGameMusic.pause();
            volumeIcon.classList.remove('fa-volume-up');
            volumeIcon.classList.add('fa-volume-xmark');
        } else {
            // Resume the appropriate music based on game state
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

    let cardsArray = [];

    function startGame() {
        const playerName = document.getElementById('name').value;
        let numberOfCards = parseInt(document.getElementById('cards-number').value);
        let cardColor = document.getElementById('card-color').value;

        cardsArray = generateCardsArray(numberOfCards / 2);

        // Clear previous game board
        // Set board class based on the number of cards
        gameBoard.innerHTML = '';
        gameBoard.className = `board-${numberOfCards}`;

        createBoard(cardsArray, cardColor);

        // Stop background music and play game music
        backgroundMusic.pause();
        if (isMusicPlaying) {
            currentGameMusic.play();
        }
    }

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

        cardsChosen = [];
        cardsChosenId = [];
        lockBoard = false;

        if (cardsWon.length === cardsArray.length / 2) {
            alert('Congratulations! You found them all! Great job!');
        }
    }

    function resetGame() {
        cardsChosen = [];
        cardsChosenId = [];
        cardsWon = [];
        lockBoard = false;
        gameBoard.innerHTML = '';
        form.reset();
        firstMatch = true;

        // Stop current game music and select a new random game music
        gameMusicArray.forEach(music => music.pause());
        currentGameMusic = gameMusicArray[Math.floor(Math.random() * gameMusicArray.length)];

        if (isMusicPlaying) {
            currentGameMusic.play();
        }
    }

    resetButton.addEventListener('click', resetGame);

    // Start a new game
    startGame();
});
