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
      orange: '오렌지',
      peach: '복숭아',
      cat: '고양이',
      dog: '강아지',
      rabbit: '토끼',
      lion: '사자',
      elephant: '코끼리',
      bear: '곰',
      monkey: '원숭이',
      dolphin: '돌고래',
      shark: '상어',
      octopus: '문어',
      whale: '고래',
      crab: '게',
      seal: '물개',
      starfish: '불가사리',
      butterfly: '나비',
      bee: '벌',
      ant: '개미',
      ladybug: '무당벌레',
      dragonfly: '잠자리',
      mosquito: '모기',
      grasshopper: '메뚜기',
      carrot: '당근',
      tomato: '토마토',
      broccoli: '브로콜리',
      cucumber: '오이',
      mushroom: '버섯',
      potato: '감자',
      onion: '양파',
      doctor: '의사',
      chef: '요리사',
      firefighter: '소방관',
      teacher: '선생님',
      police: '경찰관',
      nurse: '간호사',
      pilot: '파일럿',
      bus: '버스',
      train: '기차',
      airplane: '비행기',
      bicycle: '자전거',
      boat: '보트',
      car: '자동차',
      motorcycle: '오토바이',
      sunny: '맑음',
      rainy: '비',
      cloudy: '구름',
      snowy: '눈',
      windy: '바람',
      stormy: '폭풍',
      rainbow: '무지개',
      bed: '침대',
      chair: '의자',
      table: '테이블',
      lamp: '램프',
      clock: '시계',
      sofa: '소파',
      mirror: '거울',
      ball: '공',
      kite: '연',
      swings: '그네',
      slide: '미끄럼틀',
      sandbox: '모래놀이터',
      seesaw: '시소',
      scooter: '킥보드',
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
      { key: 'strawberry', en: 'Strawberry', emoji: '🍓' , image: 'assets/strawberry.svg'},
      { key: 'grape', en: 'Grape', emoji: '🍇' , image: 'assets/grape.svg'},
      { key: 'watermelon', en: 'Watermelon', emoji: '🍉' , image: 'assets/watermelon.svg'},
      { key: 'orange', en: 'Orange', emoji: '🍊', image: 'assets/orange.svg' },
      { key: 'peach', en: 'Peach', emoji: '🍑', image: 'assets/peach.svg' },
    ],
  },
  {
    id: 'animal',
    label: '🐶 동물',
    audio: 'D4',
    cards: [
      { key: 'cat', en: 'Cat', emoji: '🐱', image: 'assets/cat.svg' },
      { key: 'dog', en: 'Dog', emoji: '🐶', image: 'assets/dog.svg' },
      { key: 'rabbit', en: 'Rabbit', emoji: '🐰' , image: 'assets/rabbit.svg'},
      { key: 'lion', en: 'Lion', emoji: '🦁' , image: 'assets/lion.svg'},
      { key: 'elephant', en: 'Elephant', emoji: '🐘' , image: 'assets/elephant.svg'},
      { key: 'bear', en: 'Bear', emoji: '🐻', image: 'assets/bear.svg' },
      { key: 'monkey', en: 'Monkey', emoji: '🐵', image: 'assets/monkey.svg' },
    ],
  },
  {
    id: 'sea',
    label: '🐬 해양동물',
    audio: 'E4',
    cards: [
      { key: 'dolphin', en: 'Dolphin', emoji: '🐬' , image: 'assets/dolphin.svg'},
      { key: 'shark', en: 'Shark', emoji: '🦈' , image: 'assets/shark.svg'},
      { key: 'octopus', en: 'Octopus', emoji: '🐙' , image: 'assets/octopus.svg'},
      { key: 'whale', en: 'Whale', emoji: '🐋' , image: 'assets/whale.svg'},
      { key: 'crab', en: 'Crab', emoji: '🦀' , image: 'assets/crab.svg'},
      { key: 'seal', en: 'Seal', emoji: '🦭', image: 'assets/seal.svg' },
      { key: 'starfish', en: 'Starfish', emoji: '⭐', image: 'assets/starfish.svg' },
    ],
  },
  {
    id: 'insect',
    label: '🦋 곤충',
    audio: 'F4',
    cards: [
      { key: 'butterfly', en: 'Butterfly', emoji: '🦋' , image: 'assets/butterfly.svg'},
      { key: 'bee', en: 'Bee', emoji: '🐝' , image: 'assets/bee.svg'},
      { key: 'ant', en: 'Ant', emoji: '🐜' , image: 'assets/ant.svg'},
      { key: 'ladybug', en: 'Ladybug', emoji: '🐞' , image: 'assets/ladybug.svg'},
      { key: 'dragonfly', en: 'Dragonfly', emoji: '🪰' , image: 'assets/dragonfly.svg'},
      { key: 'mosquito', en: 'Mosquito', emoji: '🦟', image: 'assets/mosquito.svg' },
      { key: 'grasshopper', en: 'Grasshopper', emoji: '🦗', image: 'assets/grasshopper.svg' },
    ],
  },
  {
    id: 'vegetable',
    label: '🥕 야채',
    audio: 'G4',
    cards: [
      { key: 'carrot', en: 'Carrot', emoji: '🥕' , image: 'assets/carrot.svg'},
      { key: 'tomato', en: 'Tomato', emoji: '🍅' , image: 'assets/tomato.svg'},
      { key: 'broccoli', en: 'Broccoli', emoji: '🥦' , image: 'assets/broccoli.svg'},
      { key: 'cucumber', en: 'Cucumber', emoji: '🥒' , image: 'assets/cucumber.svg'},
      { key: 'mushroom', en: 'Mushroom', emoji: '🍄' , image: 'assets/mushroom.svg'},
      { key: 'potato', en: 'Potato', emoji: '🥔', image: 'assets/potato.svg' },
      { key: 'onion', en: 'Onion', emoji: '🧅', image: 'assets/onion.svg' },
    ],
  },
  {
    id: 'job',
    label: '🧑‍🚒 직업',
    audio: 'A4',
    cards: [
      { key: 'doctor', en: 'Doctor', emoji: '🩺' , image: 'assets/doctor.svg'},
      { key: 'chef', en: 'Chef', emoji: '👨‍🍳' , image: 'assets/chef.svg'},
      { key: 'firefighter', en: 'Firefighter', emoji: '🧑‍🚒' , image: 'assets/firefighter.svg'},
      { key: 'teacher', en: 'Teacher', emoji: '🧑‍🏫' , image: 'assets/teacher.svg'},
      { key: 'police', en: 'Police Officer', emoji: '👮' , image: 'assets/police.svg'},
      { key: 'nurse', en: 'Nurse', emoji: '🧑‍⚕️', image: 'assets/nurse.svg' },
      { key: 'pilot', en: 'Pilot', emoji: '🧑‍✈️', image: 'assets/pilot.svg' },
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
      { key: 'car', en: 'Car', emoji: '🚗', image: 'assets/car.svg' },
      { key: 'motorcycle', en: 'Motorcycle', emoji: '🏍️', image: 'assets/motorcycle.svg' },
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
      { key: 'stormy', en: 'Stormy', emoji: '⛈️', image: 'assets/stormy.svg' },
      { key: 'rainbow', en: 'Rainbow', emoji: '🌈', image: 'assets/rainbow.svg' },
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
      { key: 'sofa', en: 'Sofa', emoji: '🛋️', image: 'assets/sofa.svg' },
      { key: 'mirror', en: 'Mirror', emoji: '🪞', image: 'assets/mirror.svg' },
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
      { key: 'slide', en: 'Slide', emoji: '🛝' , image: 'assets/slide.svg'},
      { key: 'sandbox', en: 'Sandbox', emoji: '🏖️' , image: 'assets/sandbox.svg'},
      { key: 'seesaw', en: 'Seesaw', emoji: '⚖️', image: 'assets/seesaw.svg' },
      { key: 'scooter', en: 'Scooter', emoji: '🛴', image: 'assets/scooter.svg' },
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
