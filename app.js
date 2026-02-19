const dictionaries = {
  ko: {
    name: '한국어',
    locale: 'ko-KR',
    words: {
      apple: '사과',
      banana: '바나나',
      strawberry: '딸기',
      grape: '포도',
      watermelon: '수박',
      cat: '고양이',
      dog: '강아지',
      rabbit: '토끼',
      lion: '사자',
      elephant: '코끼리',
      dolphin: '돌고래',
      shark: '상어',
      octopus: '문어',
      whale: '고래',
      crab: '게',
      butterfly: '나비',
      bee: '벌',
      ant: '개미',
      ladybug: '무당벌레',
      dragonfly: '잠자리',
      carrot: '당근',
      tomato: '토마토',
      broccoli: '브로콜리',
      cucumber: '오이',
      mushroom: '버섯',
      doctor: '의사',
      chef: '요리사',
      firefighter: '소방관',
      teacher: '선생님',
      police: '경찰관',
      bus: '버스',
      train: '기차',
      airplane: '비행기',
      bicycle: '자전거',
      boat: '보트',
      sunny: '맑음',
      rainy: '비',
      cloudy: '구름',
      snowy: '눈',
      windy: '바람',
      bed: '침대',
      chair: '의자',
      table: '테이블',
      lamp: '램프',
      clock: '시계',
      ball: '공',
      kite: '연',
      swings: '그네',
      slide: '미끄럼틀',
      sandbox: '모래놀이터',
    },
  },
  en: {
    name: 'English',
    locale: 'en-US',
    words: {},
  },
};

const categories = [
  {
    id: 'fruit',
    label: '🍎 과일',
    audio: 'C4',
    cards: [
      { key: 'apple', en: 'Apple', emoji: '🍎', image: 'assets/apple.svg' },
      { key: 'banana', en: 'Banana', emoji: '🍌', image: 'assets/banana.svg' },
      { key: 'strawberry', en: 'Strawberry', emoji: '🍓' },
      { key: 'grape', en: 'Grape', emoji: '🍇' },
      { key: 'watermelon', en: 'Watermelon', emoji: '🍉' },
    ],
  },
  {
    id: 'animal',
    label: '🐶 동물',
    audio: 'D4',
    cards: [
      { key: 'cat', en: 'Cat', emoji: '🐱', image: 'assets/cat.svg' },
      { key: 'dog', en: 'Dog', emoji: '🐶', image: 'assets/dog.svg' },
      { key: 'rabbit', en: 'Rabbit', emoji: '🐰' },
      { key: 'lion', en: 'Lion', emoji: '🦁' },
      { key: 'elephant', en: 'Elephant', emoji: '🐘' },
    ],
  },
  {
    id: 'sea',
    label: '🐬 해양동물',
    audio: 'E4',
    cards: [
      { key: 'dolphin', en: 'Dolphin', emoji: '🐬' },
      { key: 'shark', en: 'Shark', emoji: '🦈' },
      { key: 'octopus', en: 'Octopus', emoji: '🐙' },
      { key: 'whale', en: 'Whale', emoji: '🐋' },
      { key: 'crab', en: 'Crab', emoji: '🦀' },
    ],
  },
  {
    id: 'insect',
    label: '🦋 곤충',
    audio: 'F4',
    cards: [
      { key: 'butterfly', en: 'Butterfly', emoji: '🦋' },
      { key: 'bee', en: 'Bee', emoji: '🐝' },
      { key: 'ant', en: 'Ant', emoji: '🐜' },
      { key: 'ladybug', en: 'Ladybug', emoji: '🐞' },
      { key: 'dragonfly', en: 'Dragonfly', emoji: '🪰' },
    ],
  },
  {
    id: 'vegetable',
    label: '🥕 야채',
    audio: 'G4',
    cards: [
      { key: 'carrot', en: 'Carrot', emoji: '🥕' },
      { key: 'tomato', en: 'Tomato', emoji: '🍅' },
      { key: 'broccoli', en: 'Broccoli', emoji: '🥦' },
      { key: 'cucumber', en: 'Cucumber', emoji: '🥒' },
      { key: 'mushroom', en: 'Mushroom', emoji: '🍄' },
    ],
  },
  {
    id: 'job',
    label: '🧑‍🚒 직업',
    audio: 'A4',
    cards: [
      { key: 'doctor', en: 'Doctor', emoji: '🩺' },
      { key: 'chef', en: 'Chef', emoji: '👨‍🍳' },
      { key: 'firefighter', en: 'Firefighter', emoji: '🧑‍🚒' },
      { key: 'teacher', en: 'Teacher', emoji: '🧑‍🏫' },
      { key: 'police', en: 'Police Officer', emoji: '👮' },
    ],
  },
  {
    id: 'transport',
    label: '🚌 교통수단',
    audio: 'B4',
    cards: [
      { key: 'bus', en: 'Bus', emoji: '🚌', image: 'assets/bus.svg' },
      { key: 'train', en: 'Train', emoji: '🚆', image: 'assets/train.svg' },
      { key: 'airplane', en: 'Airplane', emoji: '✈️', image: 'assets/airplane.svg' },
      { key: 'bicycle', en: 'Bicycle', emoji: '🚲', image: 'assets/bicycle.svg' },
      { key: 'boat', en: 'Boat', emoji: '🚤', image: 'assets/boat.svg' },
    ],
  },
  {
    id: 'weather',
    label: '🌦️ 날씨',
    audio: 'C5',
    cards: [
      { key: 'sunny', en: 'Sunny', emoji: '☀️', image: 'assets/sunny.svg' },
      { key: 'rainy', en: 'Rainy', emoji: '🌧️', image: 'assets/rainy.svg' },
      { key: 'cloudy', en: 'Cloudy', emoji: '☁️', image: 'assets/cloudy.svg' },
      { key: 'snowy', en: 'Snowy', emoji: '❄️', image: 'assets/snowy.svg' },
      { key: 'windy', en: 'Windy', emoji: '🌬️', image: 'assets/windy.svg' },
    ],
  },
  {
    id: 'home',
    label: '🛋️ 집안 물건',
    audio: 'D5',
    cards: [
      { key: 'bed', en: 'Bed', emoji: '🛏️', image: 'assets/bed.svg' },
      { key: 'chair', en: 'Chair', emoji: '🪑', image: 'assets/chair.svg' },
      { key: 'table', en: 'Table', emoji: '🪵', image: 'assets/table.svg' },
      { key: 'lamp', en: 'Lamp', emoji: '💡', image: 'assets/lamp.svg' },
      { key: 'clock', en: 'Clock', emoji: '🕒', image: 'assets/clock.svg' },
    ],
  },
  {
    id: 'playground',
    label: '🛝 놀이터',
    audio: 'E5',
    cards: [
      { key: 'ball', en: 'Ball', emoji: '⚽', image: 'assets/ball.svg' },
      { key: 'kite', en: 'Kite', emoji: '🪁', image: 'assets/kite.svg' },
      { key: 'swings', en: 'Swings', emoji: '🎠', image: 'assets/swings.svg' },
      { key: 'slide', en: 'Slide', emoji: '🛝' },
      { key: 'sandbox', en: 'Sandbox', emoji: '🏖️' },
    ],
  },
];

const browserLanguage = (navigator.language || 'en').toLowerCase();
const languageCode = browserLanguage.split('-')[0];
const selectedLanguage = dictionaries[languageCode] || dictionaries.ko;

let categoryScreenEl;
let categoryGridEl;
let flashScreenEl;
let currentCategoryEl;
let cardWrapEl;
let cardEl;
let imageEl;
let enEl;
let localEl;
let infoEl;
let changeCategoryBtn;
let soundBtn;

let currentCategory = null;
let currentCards = [];
let currentIndex = 0;
let startX = 0;

const noteFrequencies = {
  C4: 261.63,
  D4: 293.66,
  E4: 329.63,
  F4: 349.23,
  G4: 392,
  A4: 440,
  B4: 493.88,
  C5: 523.25,
  D5: 587.33,
  E5: 659.25,
};

function speak(text, lang) {
  if (!window.speechSynthesis) return;
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = lang;
  utterance.rate = 0.9;
  utterance.pitch = 1;
  window.speechSynthesis.speak(utterance);
}

function playCategoryAudio() {
  if (!currentCategory?.audio) return;

  const frequency = noteFrequencies[currentCategory.audio];
  if (!frequency) return;

  const AudioContextClass = window.AudioContext || window.webkitAudioContext;
  if (!AudioContextClass) return;

  const context = new AudioContextClass();
  const oscillator = context.createOscillator();
  const gainNode = context.createGain();

  oscillator.type = 'triangle';
  oscillator.frequency.value = frequency;

  gainNode.gain.setValueAtTime(0.0001, context.currentTime);
  gainNode.gain.exponentialRampToValueAtTime(0.24, context.currentTime + 0.02);
  gainNode.gain.exponentialRampToValueAtTime(0.0001, context.currentTime + 0.42);

  oscillator.connect(gainNode);
  gainNode.connect(context.destination);
  oscillator.start();
  oscillator.stop(context.currentTime + 0.45);

  oscillator.onended = () => {
    context.close().catch(() => null);
  };
}

function playWordAudio() {
  if (!currentCards.length) return;
  const item = currentCards[currentIndex];
  const localWord = selectedLanguage.words[item.key] || item.en;

  speak(item.en, 'en-US');
  setTimeout(() => speak(localWord, selectedLanguage.locale), 850);
}

function animateCard() {
  cardEl.classList.add('animating');
  setTimeout(() => cardEl.classList.remove('animating'), 280);
}

function emojiSvgDataUri(emoji) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 260"><rect width="360" height="260" rx="24" fill="#ffffff22"/><text x="50%" y="54%" dominant-baseline="middle" text-anchor="middle" font-size="132">${emoji}</text></svg>`;
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

function render() {
  if (!currentCards.length) return;

  const item = currentCards[currentIndex];
  imageEl.src = item.image || emojiSvgDataUri(item.emoji);
  imageEl.alt = `${item.en} illustration`;
  imageEl.onerror = () => {
    imageEl.src = emojiSvgDataUri(item.emoji);
  };

  enEl.textContent = item.en;
  const localWord = selectedLanguage.words[item.key] || item.en;
  localEl.textContent = localWord;

  enEl.onclick = () => speak(item.en, 'en-US');
  localEl.onclick = () => speak(localWord, selectedLanguage.locale);

  infoEl.textContent = `English + ${selectedLanguage.name} (${selectedLanguage.locale})`;
}

function move(step) {
  if (!currentCards.length) return;
  currentIndex = (currentIndex + step + currentCards.length) % currentCards.length;
  animateCard();
  render();
}

function startCategory(categoryId) {
  currentCategory = categories.find((category) => category.id === categoryId);
  if (!currentCategory) return;

  currentCards = currentCategory.cards;
  currentIndex = 0;

  categoryScreenEl.classList.add('hidden');
  flashScreenEl.classList.remove('hidden');
  currentCategoryEl.textContent = `현재 카테고리: ${currentCategory.label}`;
  render();
  playCategoryAudio();
}

function showCategoryScreen() {
  flashScreenEl.classList.add('hidden');
  categoryScreenEl.classList.remove('hidden');
}

function renderCategories() {
  categoryGridEl.innerHTML = '';
  categories.forEach((category) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'category-btn';
    button.textContent = category.label;
    button.addEventListener('click', () => startCategory(category.id));
    categoryGridEl.appendChild(button);
  });
}

function handleSwipe(endX) {
  const deltaX = endX - startX;
  const threshold = 45;

  if (Math.abs(deltaX) < threshold) return;
  if (deltaX < 0) move(1);
  if (deltaX > 0) move(-1);
}

function initSwipeEvents() {
  cardWrapEl.addEventListener('pointerdown', (event) => {
    startX = event.clientX;
  });

  cardWrapEl.addEventListener('pointerup', (event) => {
    handleSwipe(event.clientX);
  });

  cardWrapEl.addEventListener(
    'touchstart',
    (event) => {
      startX = event.changedTouches[0].clientX;
    },
    { passive: true },
  );

  cardWrapEl.addEventListener(
    'touchend',
    (event) => {
      handleSwipe(event.changedTouches[0].clientX);
    },
    { passive: true },
  );
}

function init() {
  categoryScreenEl = document.getElementById('category-screen');
  categoryGridEl = document.getElementById('category-grid');
  flashScreenEl = document.getElementById('flash-screen');
  currentCategoryEl = document.getElementById('current-category');
  cardWrapEl = document.getElementById('card-wrap');
  cardEl = document.getElementById('card');
  imageEl = document.getElementById('word-image');
  enEl = document.getElementById('word-en');
  localEl = document.getElementById('word-local');
  infoEl = document.getElementById('language-info');
  changeCategoryBtn = document.getElementById('change-category');
  soundBtn = document.getElementById('play-sound');

  if (
    !categoryScreenEl ||
    !categoryGridEl ||
    !flashScreenEl ||
    !currentCategoryEl ||
    !cardWrapEl ||
    !cardEl ||
    !imageEl ||
    !enEl ||
    !localEl ||
    !infoEl ||
    !changeCategoryBtn ||
    !soundBtn
  ) {
    return;
  }

  document.getElementById('prev').addEventListener('click', () => move(-1));
  document.getElementById('next').addEventListener('click', () => move(1));
  changeCategoryBtn.addEventListener('click', showCategoryScreen);
  soundBtn.addEventListener('click', playWordAudio);

  document.addEventListener('keydown', (event) => {
    if (flashScreenEl.classList.contains('hidden')) return;
    if (event.key === 'ArrowLeft') move(-1);
    if (event.key === 'ArrowRight') move(1);
  });

  initSwipeEvents();
  renderCategories();
  showCategoryScreen();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
