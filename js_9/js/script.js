
  let counter = document.querySelector('.num');
  let minusBtn = document.querySelector('.minus');
  let restartBtn = document.querySelector('.restart');
  let plusBtn = document.querySelector('.plus');
  let randomBtn = document.querySelector('.random');

  let count = 0;

  minusBtn.addEventListener('click', () => {
    count--;
    counter.textContent = count;
  });

  restartBtn.addEventListener('click', () => {
    count = 0;
    counter.textContent = count;
  });

  plusBtn.addEventListener('click', () => {
    count++;
    counter.textContent = count;
  });

  randomBtn.addEventListener('click', () => {
    count = Math.floor(Math.random() * 1000);
    counter.textContent = count;
  });


  