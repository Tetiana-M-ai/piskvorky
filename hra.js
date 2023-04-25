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
