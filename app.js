const dictionaries = {
  ko: {
    name: '한국어',
    locale: 'ko-KR',
    words: {
      apple: '사과',
      banana: '바나나',
      strawberry: '딸기',
      cat: '고양이',
      dog: '강아지',
      rabbit: '토끼',
      dolphin: '돌고래',
      shark: '상어',
      octopus: '문어',
      butterfly: '나비',
      bee: '벌',
      ant: '개미',
      carrot: '당근',
      tomato: '토마토',
      broccoli: '브로콜리',
      doctor: '의사',
      chef: '요리사',
      firefighter: '소방관',
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
    ],
  },
  {
    id: 'animal',
    label: '🐶 동물',
    cards: [
      { key: 'cat', en: 'Cat', emoji: '🐱' },
      { key: 'dog', en: 'Dog', emoji: '🐶' },
      { key: 'rabbit', en: 'Rabbit', emoji: '🐰' },
    ],
  },
  {
    id: 'sea',
    label: '🐬 해양동물',
    cards: [
      { key: 'dolphin', en: 'Dolphin', emoji: '🐬' },
      { key: 'shark', en: 'Shark', emoji: '🦈' },
      { key: 'octopus', en: 'Octopus', emoji: '🐙' },
    ],
  },
  {
    id: 'insect',
    label: '🦋 곤충',
    cards: [
      { key: 'butterfly', en: 'Butterfly', emoji: '🦋' },
      { key: 'bee', en: 'Bee', emoji: '🐝' },
      { key: 'ant', en: 'Ant', emoji: '🐜' },
    ],
  },
  {
    id: 'vegetable',
    label: '🥕 야채',
    cards: [
      { key: 'carrot', en: 'Carrot', emoji: '🥕' },
      { key: 'tomato', en: 'Tomato', emoji: '🍅' },
      { key: 'broccoli', en: 'Broccoli', emoji: '🥦' },
    ],
  },
  {
    id: 'job',
    label: '🧑‍🚒 직업',
    cards: [
      { key: 'doctor', en: 'Doctor', emoji: '🩺' },
      { key: 'chef', en: 'Chef', emoji: '👨‍🍳' },
      { key: 'firefighter', en: 'Firefighter', emoji: '🧑‍🚒' },
    ],
  },
];

const browserLanguage = (navigator.language || 'en').toLowerCase();
const languageCode = browserLanguage.split('-')[0];
const selectedLanguage = dictionaries[languageCode] || dictionaries.ko;

const categoryScreenEl = document.getElementById('category-screen');
const categoryGridEl = document.getElementById('category-grid');
const flashScreenEl = document.getElementById('flash-screen');
const currentCategoryEl = document.getElementById('current-category');
const cardWrapEl = document.getElementById('card-wrap');
const cardEl = document.getElementById('card');
const imageEl = document.getElementById('word-image');
const enEl = document.getElementById('word-en');
const localEl = document.getElementById('word-local');
const infoEl = document.getElementById('language-info');
const changeCategoryBtn = document.getElementById('change-category');

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

document.getElementById('prev').addEventListener('click', () => move(-1));
document.getElementById('next').addEventListener('click', () => move(1));
changeCategoryBtn.addEventListener('click', showCategoryScreen);

document.addEventListener('keydown', (event) => {
  if (flashScreenEl.classList.contains('hidden')) return;
  if (event.key === 'ArrowLeft') move(-1);
  if (event.key === 'ArrowRight') move(1);
});

cardWrapEl.addEventListener('pointerdown', (event) => {
  startX = event.clientX;
});

cardWrapEl.addEventListener('pointerup', (event) => {
  const deltaX = event.clientX - startX;
  const threshold = 45;

  if (Math.abs(deltaX) < threshold) return;
  if (deltaX < 0) move(1);
  if (deltaX > 0) move(-1);
});

renderCategories();
showCategoryScreen();
