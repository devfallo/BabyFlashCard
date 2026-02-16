const dictionaries = {
  ko: {
    name: '한국어',
    locale: 'ko-KR',
    words: {
      apple: '사과',
      cat: '고양이',
      car: '자동차',
      water: '물',
      book: '책',
      sun: '태양',
      tree: '나무',
      bird: '새',
    },
  },
  ja: {
    name: '日本語',
    locale: 'ja-JP',
    words: {
      apple: 'りんご',
      cat: 'ねこ',
      car: 'くるま',
      water: 'みず',
      book: 'ほん',
      sun: 'たいよう',
      tree: 'き',
      bird: 'とり',
    },
  },
  es: {
    name: 'Español',
    locale: 'es-ES',
    words: {
      apple: 'manzana',
      cat: 'gato',
      car: 'coche',
      water: 'agua',
      book: 'libro',
      sun: 'sol',
      tree: 'árbol',
      bird: 'pájaro',
    },
  },
  fr: {
    name: 'Français',
    locale: 'fr-FR',
    words: {
      apple: 'pomme',
      cat: 'chat',
      car: 'voiture',
      water: 'eau',
      book: 'livre',
      sun: 'soleil',
      tree: 'arbre',
      bird: 'oiseau',
    },
  },
  de: {
    name: 'Deutsch',
    locale: 'de-DE',
    words: {
      apple: 'Apfel',
      cat: 'Katze',
      car: 'Auto',
      water: 'Wasser',
      book: 'Buch',
      sun: 'Sonne',
      tree: 'Baum',
      bird: 'Vogel',
    },
  },
  zh: {
    name: '中文',
    locale: 'zh-CN',
    words: {
      apple: '苹果',
      cat: '猫',
      car: '汽车',
      water: '水',
      book: '书',
      sun: '太阳',
      tree: '树',
      bird: '鸟',
    },
  },
};

const cards = [
  { key: 'apple', en: 'Apple', image: 'assets/apple.svg' },
  { key: 'cat', en: 'Cat', image: 'assets/cat.svg' },
  { key: 'car', en: 'Car', image: 'assets/car.svg' },
  { key: 'water', en: 'Water', image: 'assets/water.svg' },
  { key: 'book', en: 'Book', image: 'assets/book.svg' },
  { key: 'sun', en: 'Sun', image: 'assets/sun.svg' },
  { key: 'tree', en: 'Tree', image: 'assets/tree.svg' },
  { key: 'bird', en: 'Bird', image: 'assets/bird.svg' },
];

const browserLanguage = (navigator.language || 'en').toLowerCase();
const languageCode = browserLanguage.split('-')[0];
const selectedLanguage = dictionaries[languageCode] || dictionaries.ko;

const cardEl = document.getElementById('card');
const imageEl = document.getElementById('word-image');
const enEl = document.getElementById('word-en');
const localEl = document.getElementById('word-local');
const infoEl = document.getElementById('language-info');

let currentIndex = 0;

function speak(text, lang) {
  if (!window.speechSynthesis) {
    return;
  }
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

function render() {
  const item = cards[currentIndex];
  imageEl.src = item.image;
  imageEl.alt = `${item.en} illustration`;

  enEl.textContent = item.en;
  const localWord = selectedLanguage.words[item.key] || item.en;
  localEl.textContent = localWord;

  enEl.onclick = () => speak(item.en, 'en-US');
  localEl.onclick = () => speak(localWord, selectedLanguage.locale);

  infoEl.textContent = `English + ${selectedLanguage.name} (${selectedLanguage.locale})`;
}

function move(step) {
  currentIndex = (currentIndex + step + cards.length) % cards.length;
  animateCard();
  render();
}

document.getElementById('prev').addEventListener('click', () => move(-1));
document.getElementById('next').addEventListener('click', () => move(1));

document.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowLeft') move(-1);
  if (event.key === 'ArrowRight') move(1);
});

render();
