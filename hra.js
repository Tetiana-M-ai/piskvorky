import { findWinner } from 'https://unpkg.com/piskvorky@0.1.4';

let currentPlayer = 'circle';

const btnElm = document.querySelectorAll('button');

const changeMove = (event) => {
  if (currentPlayer === 'circle') {
    event.target.classList.add('board__field--circle', 'zoom');
    currentPlayer = 'cross';
    player.className = 'board__player--cross';
  } else if (currentPlayer === 'cross') {
    event.target.classList.add('board__field--cross', 'zoom');
    currentPlayer = 'circle';
    player.className = 'board__player--circle';
  }
  event.target.disabled = true;
  herniPole();
};

const signs = document.querySelectorAll('.gridContainer button');

const herniPole = () => {
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
      alert('Won the cross');
      location.reload();
    }, 200);
  } else if (winner === 'o') {
    setTimeout(() => {
      alert('Won the circle');
      location.reload();
    }, 200);
  } else if (winner === 'tie') {
    setTimeout(() => {
      alert('The game ended in a draw');
      location.reload();
    }, 200);
  }
};

btnElm.forEach((button) => {
  button.addEventListener('click', changeMove);
});

const restart = document.querySelector('.rightRestart');
restart.addEventListener('click', (event) => {
  if (!confirm('Opravdu chces zacit znovu?')) {
    event.preventDefault();
  }
});
