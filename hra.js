import { findWinner } from 'https://unpkg.com/piskvorky@0.1.4';

let currentPlayer = 'circle';

const btnElm = document.querySelectorAll('button');

const changeMove = (event) => {
  if (currentPlayer === 'circle') {
    event.target.classList.add('board__field--circle', 'zoom');
    currentPlayer = 'cross';
    player.className = 'board__player--cross';
    answer();
  } else if (currentPlayer === 'cross') {
    event.target.classList.add('board__field--cross', 'zoom');
    currentPlayer = 'circle';
    player.className = 'board__player--circle';
  }
  event.target.disabled = true;
  playGround();
};

const signs = document.querySelectorAll('.gridContainer button');

const playGround = () => {
  const gameArray = Array.from(signs).map((sign) => {
    if (sign.classList.contains('board__field--circle')) {
      return 'o';
    } else if (sign.classList.contains('board__field--cross')) {
      return 'x';
    }
    return '_';
  });

  const winner = findWinner(gameArray);

  if (winner === 'x') {
    setTimeout(() => {
      alert('Congratulation! The cross won');
      location.reload();
    }, 200);
  } else if (winner === 'o') {
    setTimeout(() => {
      alert('Congratulation! The circle won');
      location.reload();
    }, 200);
  } else if (winner === 'tie') {
    setTimeout(() => {
      alert('The game ended in a draw');
      location.reload();
    }, 200);
  }
};
const answer = () => {
  btnElm.forEach((button) => {
    button.disabled = true;
  });

  const playingField = Array.from(btnElm);
  const findIt = playingField.map((button) => {
    if (button.classList.contains('board__field--circle')) {
      return 'o';
    } else if (button.classList.contains('board__field--cross')) {
      return 'x';
    } else {
      return '_';
    }
  });

  fetch('https://piskvorky.czechitas-podklady.cz/api/suggest-next-move', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      board: findIt,
      player: 'x',
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      const { x, y } = data.position;
      const index = x + y * 10;
      btnElm.forEach((button) => {
        if (
          button.classList.contains('board__field--cross') ||
          button.classList.contains('board__field--circle')
        ) {
          button.disabled = true;
        } else {
          button.disabled = false;
        }
      });

      btnElm[index].click();
    });
};

btnElm.forEach((button) => {
  button.addEventListener('click', changeMove);
});

const restart = document.querySelector('.rightRestart');
restart.addEventListener('click', (event) => {
  if (!confirm('Would you like to start the game agan?')) {
    event.preventDefault();
  }
});
