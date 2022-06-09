document.addEventListener('DOMContentLoaded', () => {
  // Card options

  type CardArray = {
    name: string;
    img: string;
  };

  const cardArray: CardArray[] = [
    {
      name: 'cheeseburger',
      img: 'images/cheeseburger.png',
    },
    {
      name: 'cheeseburger',
      img: 'images/cheeseburger.png',
    },
    {
      name: 'hotdog',
      img: 'images/hotdog.png',
    },
    {
      name: 'pizza',
      img: 'images/pizza.png',
    },
    {
      name: 'milkshake',
      img: 'images/milkshake.png',
    },
    {
      name: 'ice-cream',
      img: 'images/ice-cream.png',
    },
    {
      name: 'milkshake',
      img: 'images/milkshake.png',
    },
    {
      name: 'ice-cream',
      img: 'images/ice-cream.png',
    },
    {
      name: 'fries',
      img: 'images/fries.png',
    },
    {
      name: 'fries',
      img: 'images/fries.png',
    },
    {
      name: 'hotdog',
      img: 'images/hotdog.png',
    },
    {
      name: 'pizza',
      img: 'images/pizza.png',
    },
  ];

  cardArray.sort(() => 0.5 - Math.random());

  const grid: Element = document.querySelector('.grid');
  const resultDisplay: Element = document.querySelector('#result');
  let cardsChosen: string[] = [];
  let cardsChosenId: number[] = [];
  let cardsWon: string[] = [];

  // Create your board
  function createBoard(): void {
    for (let i = 0; i < cardArray.length; i++) {
      const card: Element = document.createElement('img');
      card.setAttribute('src', 'images/blank.png');
      card.setAttribute('data-id', String(i));
      card.addEventListener('click', flipCard);
      grid.appendChild(card);
    }
  }

  // Check for matches
  function checkForMatch(): void {
    const cards = document.querySelectorAll('img');
    const optionsIds: number[] = [cardsChosenId[0], cardsChosenId[1]];

    if (optionsIds[0] === optionsIds[1]) {
      alert('You have selected the same card !');

      for (let i = 0; i < optionsIds.length; i++) {
        cards[optionsIds[i]].setAttribute('src', 'blank.png');
      }
    } else if (cardsChosen[0] === cardsChosen[1]) {
      alert('You found a match !');

      for (let i = 0; i < optionsIds.length; i++) {
        cards[optionsIds[i]].setAttribute('src', 'images/white.png');
      }
      for (let i = 0; i < optionsIds.length; i++) {
        cards[optionsIds[i]].removeEventListener('click', flipCard);
      }
      cardsWon.concat(cardsChosen);
    } else {
      alert('Sorry this was not a match, try again !');

      for (let i = 0; i < optionsIds.length; i++) {
        cards[optionsIds[i]].setAttribute('src', 'images/blank.png');
      }
    }

    // Clean both arrays in order to restart playing
    cardsChosen = [];
    cardsChosenId = [];

    resultDisplay.textContent = String(cardsWon.length);
    if (cardsWon.length === cardArray.length / 2) {
      resultDisplay.textContent = 'Congratulations !';
    }
  }

  // Flip your card
  function flipCard(): void {
    let cardId: number = this.getAttribute('data-id');
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenId.push(cardId);
    this.setAttribute('src', cardArray[cardId].img);
    if (cardsChosen.length === 2) {
      setTimeout(checkForMatch, 500);
    }
  }

  createBoard();
});
