const p1button = document.querySelector('#p1button');
const p2button = document.querySelector('#p2button');
const resetbutton = document.querySelector('#reset');

const number = document.querySelector('#numberSelect');

const p1score = document.getElementById('p1score');
const p2score = document.getElementById('p2score');

let count1 = 0;
let count2 = 0;

p1button.addEventListener('click', () => {
  count1++;
  p1score.textContent = count1;
  checkScore(); // スコアをチェックしてボタンを無効化する
});

p2button.addEventListener('click', () => {
  count2++;
  p2score.textContent = count2;
  checkScore(); // スコアをチェックしてボタンを無効化する
});

resetbutton.addEventListener('click', () => {
  count1 = 0;
  count2 = 0;
  p1score.textContent = 0;
  p2score.textContent = 0;
  enableButtons(); // ボタンを有効化
});

// スコアをチェックしてボタンを無効化する関数
function checkScore() {
  const targetScore = parseInt(number.value, 10); // 選択された数値を取得
  if (count1 === targetScore || count2 === targetScore) {
    disableButtons(); // ボタンを無効化
  }
}

// ボタンを無効化する関数
function disableButtons() {
  p1button.disabled = true;
  p2button.disabled = true;
  p1button.style.opacity = 0.5;
  p2button.style.opacity = 0.5;
}

// ボタンを有効化する関数
function enableButtons() {
  p1button.disabled = false;
  p2button.disabled = false;
  p1button.style.opacity = 1;
  p2button.style.opacity = 1;
}