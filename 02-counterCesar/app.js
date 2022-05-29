const btns = document.querySelectorAll('.btn');
const value = document.getElementById('value');
const keyPass = document.querySelector('.keyValue');
const submitBtn = document.querySelector('.send');
const secret = document.querySelector('.secret');
const imgCorrect = document.querySelector('.correct');
const imgWrong = document.querySelector('.wrong');
let count = 0;
btns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    const singleBtn = e.currentTarget.classList;
    if (singleBtn.contains('decrease')) {
      count--;
    } else if (singleBtn.contains('decimal-decrease')) {
      count -= 0.1;
    } else if (singleBtn.contains('reset')) {
      count = 0;
      imgCorrect.classList.remove('show') || imgWrong.classList.remove('show');
      secret.style = 'black';
      secret.textContent = 'upyhaylm cm ipyllunyx';
    } else if (singleBtn.contains('hundred-decrease')) {
      count -= 100;
    } else if (singleBtn.contains('increase')) {
      count++;
    } else if (singleBtn.contains('decimal-increase')) {
      count += 0.1;
    } else if (singleBtn.contains('hundred-increase')) {
      count += 100;
    }
    if (count === 21) {
      value.style.color = 'darkslategray';
    } else {
      value.style.color = 'black';
    }
    value.textContent = count.toFixed(1);
  });
});

secret.textContent = 'upyhaylm cm ipyllunyx';

submitBtn.addEventListener('click', () => {
  if (keyPass.value === '21') {
    secret.style.color = 'red';
    secret.textContent = 'avengers is overrated';
    imgCorrect.classList.add('show');
    imgWrong.classList.remove('show');
  } else {
    imgWrong.classList.add('show');
    imgCorrect.classList.remove('show');
    secret.style = 'black';
    secret.textContent = 'upyhaylm cm ipyllunyx';
  }
  keyPass.value = '';
});
