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
    cards: [
      { key: 'apple', en: 'Apple', emoji: '🍎' },
      { key: 'banana', en: 'Banana', emoji: '🍌' },
      { key: 'strawberry', en: 'Strawberry', emoji: '🍓' },
      { key: 'grape', en: 'Grape', emoji: '🍇' },
      { key: 'watermelon', en: 'Watermelon', emoji: '🍉' },
    ],
  },
  {
    id: 'animal',
    label: '🐶 동물',
    cards: [
      { key: 'cat', en: 'Cat', emoji: '🐱' },
      { key: 'dog', en: 'Dog', emoji: '🐶' },
      { key: 'rabbit', en: 'Rabbit', emoji: '🐰' },
      { key: 'lion', en: 'Lion', emoji: '🦁' },
      { key: 'elephant', en: 'Elephant', emoji: '🐘' },
    ],
  },
  {
    id: 'sea',
    label: '🐬 해양동물',
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
    cards: [
      { key: 'doctor', en: 'Doctor', emoji: '🩺' },
      { key: 'chef', en: 'Chef', emoji: '👨‍🍳' },
      { key: 'firefighter', en: 'Firefighter', emoji: '🧑‍🚒' },
      { key: 'teacher', en: 'Teacher', emoji: '🧑‍🏫' },
      { key: 'police', en: 'Police Officer', emoji: '👮' },
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

let currentCategory = null;
let currentCards = [];
let currentIndex = 0;
let startX = 0;

function speak(text, lang) {
  if (!window.speechSynthesis) return;
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = lang;
  utterance.rate = 0.9;
  utterance.pitch = 1;
  window.speechSynthesis.speak(utterance);
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
  imageEl.src = emojiSvgDataUri(item.emoji);
  imageEl.alt = `${item.en} illustration`;

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
    !changeCategoryBtn
  ) {
    return;
  }

  document.getElementById('prev').addEventListener('click', () => move(-1));
  document.getElementById('next').addEventListener('click', () => move(1));
  changeCategoryBtn.addEventListener('click', showCategoryScreen);

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
