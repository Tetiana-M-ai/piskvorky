let currentPlayer = 'circle';

const btnElm1 = document.querySelector('button:nth-child(1)');
const btnElm2 = document.querySelector('button:nth-child(2)');
const btnElm3 = document.querySelector('button:nth-child(3)');
const btnElm4 = document.querySelector('button:nth-child(4)');
const btnElm5 = document.querySelector('button:nth-child(5)');
const btnElm6 = document.querySelector('button:nth-child(6)');
const btnElm7 = document.querySelector('button:nth-child(7)');
const btnElm8 = document.querySelector('button:nth-child(8)');
const btnElm9 = document.querySelector('button:nth-child(9)');
const btnElm10 = document.querySelector('button:nth-child(10)');

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

btnElm1.addEventListener('click', changeMove);
btnElm2.addEventListener('click', changeMove);
btnElm3.addEventListener('click', changeMove);
btnElm4.addEventListener('click', changeMove);
btnElm5.addEventListener('click', changeMove);
btnElm6.addEventListener('click', changeMove);
btnElm7.addEventListener('click', changeMove);
btnElm8.addEventListener('click', changeMove);
btnElm9.addEventListener('click', changeMove);
btnElm10.addEventListener('click', changeMove);

const restart = document.querySelector('.rightRestart');
restart.addEventListener('click', (event) => {
  if (!confirm('Opravdu chces zacit znovu?')) {
    event.preventDefault();
  }
});
