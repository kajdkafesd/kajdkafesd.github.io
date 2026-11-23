
'use strict';

const fortuneButton = document.getElementById('fortune-button');
const result = document.getElementById('result');
const message = document.getElementById('message');

const fortunes = [
  '大吉',
  '中吉',
  '小吉',
  '吉',
  '末吉',
  '凶'
];

const advice = [
  '今日は新しいことに挑戦してみよう！',
  '好きな音楽を聴くと気分が上がるかも！',
  '焦らず自分のペースで過ごそう。',
  '思いがけない幸運が訪れるかも！',
  '周りの人に優しくすると良いことがありそう！',
  'ゆっくり休むことも大切な一日！'
];

fortuneButton.onclick = () => {
  const random = Math.floor(Math.random() * fortunes.length);

  result.innerHTML = '今日の運勢は…<br>' + fortunes[random] + '！';

  message.innerText = advice[random];
};
