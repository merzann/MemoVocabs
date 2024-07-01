document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById('game-setup');
    const resetButton = document.getElementById("reset-button");
    const gameSection = document.getElementById('game');
    const gameBoard = document.createElement('div');
    gameBoard.id = 'gameBoard';
    gameSection.appendChild(gameBoard);

    document.getElementById('how-to-play').addEventListener('click', () => {
        alert("Welcome to MemoVocabs!\n\nHow to play:\nPlease enter your name and the vocabulary you want to practice.\n'Enter vocabulary' opens a window with a table. Enter 12 word pairs you want to practice then press 'Continue'.\nAlternatively you can play with the default set of cards.\nSelect the number of cards and choose a back card color.\n'Start Game' will start the game, 'Reset Game' will reset the game.\n   Enjoy! \u{263A}");
    });

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
    let customCards = [];

    function startGame() {
        const playerName = document.getElementById('name').value;
        let numberOfCards = parseInt(document.getElementById('cards-number').value);
        let cardColor = document.getElementById('card-color').value;

        // Clear previous game board
        gameBoard.innerHTML = '';
        gameBoard.className = `board-${numberOfCards}`;

        // Generate cards array based on vocabulary entries or default cards
        cardsArray = customCards.length > 0 ? generateCardsArray(numberOfCards / 2, customCards) : generateCardsArray(numberOfCards / 2);

        createBoard(cardsArray, cardColor);

        // Stop background music and play game music
        backgroundMusic.pause();
        if (isMusicPlaying) {
            currentGameMusic.play();
        }
    }

    // Function to create the vocabulary entry pop-up
    function createVocabularyPopup() {
        const popup = document.createElement('div');
        popup.id = 'vocabulary-popup';
        popup.innerHTML = `
            <div class="popup-content">
                <h2>Enter Vocabulary</h2>
                <table id="vocabulary-table">
                    <tr>
                        <th>Vocable</th>
                        <th>Meaning</th>
                    </tr>
                    ${Array.from({ length: 12 }).map((_, i) => `
                        <tr>
                            <td><input type="text" class="vocab-name" placeholder="Enter your text here..."></td>
                            <td><input type="text" class="vocab-name" placeholder="Enter your text here...."></td>
                        </tr>
                    `).join('')}
                </table>
                <button id="submit-vocabulary">Continue</button>
                <button id="close-popup">Close</button>
            </div>
        `;
        document.body.appendChild(popup);

        // Add input event listener to limit character count
        const vocabInputs = document.querySelectorAll('.vocab-image, .vocab-name');
        vocabInputs.forEach(input => {
            input.addEventListener('input', (event) => {
                if (event.target.value.length > 25) {
                    event.target.value = event.target.value.slice(0, 25);
                }
            });
        });

        document.getElementById('close-popup').addEventListener('click', () => {
            document.body.removeChild(popup);
        });

        document.getElementById('submit-vocabulary').addEventListener('click', () => {
            const vocabImages = Array.from(document.getElementsByClassName('vocab-image')).map(input => input.value);
            const vocabNames = Array.from(document.getElementsByClassName('vocab-name')).map(input => input.value);
            customCards = vocabImages.map((image, index) => ({ img: image, name: vocabNames[index] }));

            if (customCards.length < 6 || customCards.some(card => !card.img || !card.name)) {
                alert("Please enter 12 word pairs to play the game.");
                return;
            }

            document.body.removeChild(popup);
        });
    }

    document.getElementById('enter-vocabulary').addEventListener('click', createVocabularyPopup);

    function generateCardsArray(pairCount, customCards = []) {
        if (customCards.length > 0) {
            return customCards.slice(0, pairCount).concat(customCards.slice(0, pairCount)).sort(() => 0.5 - Math.random());
        }
        const baseCards = [
            { name: 'bracelet   (phonetics: breɪslət)', img: 'image1.jpg' },
            { name: 'plush toy   (phonetics: plʌʃ tɔɪ)', img: 'image2.jpg' },
            { name: 'suit   (phonetics:  suːt)', img: 'image3.jpg' },
            { name: 'hanger   (phonetics: hæŋə)', img: 'image4.jpg' },
            { name: 'crayon   (phonetics: kreɪɒn)', img: 'image5.jpg' },
            { name: 'arrow   (phonetics:  ærəʊ)', img: 'image6.jpg' },
            { name: 'calculator   (phonetics: kælkjəleɪtə)', img: 'image7.jpg' },
            { name: 'menu   (phonetics: mɛnjuː)', img: 'image8.jpg' },
            { name: 'ballpoint pen   (phonetics: bɔːlˌpɔɪnt pɛn)', img: 'image9.jpg' },
            { name: 'sports car   (phonetics: spɔːts kɑː', img: 'image10.jpg' },
            { name: 'hard drive   (phonetics: hɑːd draɪv)', img: 'image11.jpg' },
            { name: 'bowl   (phonetics: bəʊl)', img: 'image12.jpg' }
        ];
        const selectedCards = baseCards.slice(0, pairCount);
        return selectedCards.concat(selectedCards).sort(() => 0.5 - Math.random());
    }

    function createBoard(cardsArray, cardColor) {
        gameBoard.innerHTML = ''; // Clear the board before creating new cards

        cardsArray.forEach((item, index) => {
            let card = document.createElement('div');
            card.setAttribute('class', `card ${cardColor}`);
            card.setAttribute('data-id', index);

            let frontFace = document.createElement('div');
            frontFace.setAttribute('class', 'front');
            frontFace.innerHTML = '<span class="question-mark">?</span>';

            let backFace = document.createElement('div');
            backFace.setAttribute('class', 'back');
            if (item.img.startsWith('http')) {
                backFace.style.backgroundImage = `url('${item.img}')`;
            } else if (item.img.endsWith('.jpg') || item.img.endsWith('.png') || item.img.endsWith('.gif')) {
                backFace.style.backgroundImage = `url('assets/images/${item.img}')`;
            } else {
                backFace.textContent = item.img;  // Display text if it's not a URL or image file name
            }

            card.appendChild(frontFace);
            card.appendChild(backFace);

            card.addEventListener('click', flipCard);
            gameBoard.appendChild(card);
        });
    }

    let cardsChosen = [];
    let cardsChosenId = [];
    let cardsWon = [];
    let lockBoard = false;
    let firstMatch = true;

    function flipCard() {
        if (lockBoard) return;
        let cardId = this.getAttribute('data-id');
        cardsChosen.push(cardsArray[cardId].name);
        cardsChosenId.push(cardId);
        this.classList.add('flipped');

        if (cardsChosen.length === 2) {
            lockBoard = true;
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
        customCards = [];

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
