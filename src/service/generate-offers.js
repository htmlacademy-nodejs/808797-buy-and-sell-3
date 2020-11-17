import {getRandomInt, shuffleArray} from './utils.js';

const TITLES = [
  `Продам книги Стивена Кинга.`,
  `Продам приставку Sony Playstation 5.`,
  `Продам отличную подборку фильмов на VHS.`,
  `Куплю антиквариат.`,
  `Куплю породистого кота.`,
  `Продам коллекцию журналов «Огонёк».`,
  `Отдам в хорошие руки подшивку «Мурзилка».`,
  `Продам советскую посуду. Почти не разбита.`,
  `Куплю детские санки.`
];

const SENTENCES = [
  `Товар в отличном состоянии.`,
  `Пользовались бережно и только по большим праздникам.`,
  `Продаю с болью в сердце...`,
  `Бонусом отдам все аксессуары.`,
  `Даю недельную гарантию.`,
  `Если товар не понравится, верну все до последней копейки.`,
  `Это настоящая находка для коллекционера!`,
  `Если найдете дешевле - сброшу цену.`,
  `Таких предложений больше нет!`,
  `При покупке с меня бесплатная доставка в черте города.`,
  `Две страницы заляпаны свежим кофе.`,
  `Кажется, что это хрупкая вещь.`,
  `Мой дед не мог её сломать.`,
  `Кому нужен этот новый телефон, если тут такое...`,
  `Не пытайтесь торговаться. Цену вещам я знаю.`
];

const CATEGORIES = [
  `Книги`,
  `Разное`,
  `Посуда`,
  `Игры`,
  `Животные`,
  `Журналы`
];

const OfferType = {
  OFFER: `offer`,
  SALE: `sale`
};

const SumRestrict = {
  MIN: 1000,
  MAX: 100000
};

const PictureRestrict = {
  MIN: 1,
  MAX: 16
};

const getPictureFileName = (number) => {
  number = number > 9 ? `` + number : `0` + number;
  return `item` + number + `.jpg`;
};

const getCategoriesList = () => CATEGORIES.filter(() => getRandomInt(0, 1));

const generateOffers = (count) => {
  return Array(count).fill({}).map(() => ({
    title: TITLES[getRandomInt(0, TITLES.length - 1)],
    picture: getPictureFileName(getRandomInt(PictureRestrict.MIN, PictureRestrict.MAX)),
    description: shuffleArray(SENTENCES).slice(1, 5).join(` `),
    type: Object.keys(OfferType)[Math.floor(Math.random() * Object.keys(OfferType).length)],
    sum: getRandomInt(SumRestrict.MIN, SumRestrict.MAX),
    category: getCategoriesList()
  }));
};

export default generateOffers;
