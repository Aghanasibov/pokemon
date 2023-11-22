console.log(window);

const oyununQaydasi = ['e', 'f', 'w'];

let player1Point = 0;
let player2Point = 0;

const shouPoint1 = document.querySelector('#showPoint1');
const shouPoint2 = document.querySelector('#showPoint2');

const showResult1 = document.querySelector('#showResult1');
const showResult2 = document.querySelector('#showResult2');

const showImg1 = document.querySelector('#showImg1');
const showImg2 = document.querySelector('#showImg2');


function randomElement() {
  const randomIndex = Math.floor(Math.random() * oyununQaydasi.length);
  return oyununQaydasi[randomIndex];
}

function resultGame(u, c) {
  console.log(u);
  console.log(c);
  showImg1.src = `./img/pokemon img/${u}.png`;
  showImg2.src = `./img/pokemon img/${c}.png`;

  if (u == 'w' && c == 'f') {
    console.log('win');
    player1Point += 1;
    shouPoint1.innerHTML = player1Point;
    showResult1.innerHTML = 'WIN';
    showResult2.innerHTML = 'LOSE';
    showResult1.style.color = 'green';
    showResult2.style.color = 'red';
  } else if (u == 'f' && c == 'e') {
    console.log('win');
    player1Point += 1;
    shouPoint1.innerHTML = player1Point;
    showResult1.innerHTML = 'WIN';
    showResult2.innerHTML = 'LOSE';
    showResult1.style.color = 'green';
    showResult2.style.color = 'red';
  } else if (u == 'e' && c == 'w') {
    console.log('win');
    player1Point += 1;
    shouPoint1.innerHTML = player1Point;
    showResult1.innerHTML = 'WIN';
    showResult2.innerHTML = 'LOSE';
    showResult1.style.color = 'green';
    showResult2.style.color = 'red';
  } else if (u == c) {
    console.log('draw');
    showResult1.innerHTML = 'DRAW';
    showResult2.innerHTML = 'DRAW';
    showResult1.style.color = 'gray';
    showResult2.style.color = 'gray';
  } else {
    console.log('lose');
    player2Point += 1;
    shouPoint2.innerHTML = player2Point;
    showResult1.style.color = 'red';
    showResult2.style.color = 'green';
    showResult2.innerHTML = 'WIN';
    showResult1.innerHTML = 'LOSE';
  }
  if (player1Point < 10) {
    console.log('Win');
  } else {
    console.log('LOSE');
  }
}

window.addEventListener('keypress', function (e) {
  const userChoose = e.key;

  if (player1Point >= 10 || player2Point >= 10) {
    window.removeEventListener('keypress', keyPressHandler);
    if (player1Point >= 10) {
      console.log('Me win!');
    } else {
      console.log('comp win!');
    }
  }

  if (oyununQaydasi.indexOf(userChoose) != -1) {
    const compChoose = randomElement();

    resultGame(userChoose, compChoose);
  } else {
    alert('Bu herfleri secin zehmet olmasa e,f,w');
  }
});

