const inquirer = require('inquirer');

const questions = [
  {
    type: 'input',
    name: 'playerName',
    message: 'Привет! Как тебя зовут?',
  },
];
const gameQuestions = [
  {
    type: 'list',
    name: 'question1',
    message: 'Какая игровая консоль самая продаваемая на сегодняшний день?',
    answer: ['Плейстейшен'],
    filter: (answer) => answer.toLowerCase(),
  },
  {
    type: 'list',
    name: 'question2',
    message: 'Самая известная игра компании близзард?',
    answer: ['Варкрафт'],
    filter: (answer) => answer.toLowerCase(),
  },
  {
    type: 'list',
    name: 'question3',
    message: 'По образу какой еды был смоделирован пакман? ',
    answer: ['Пицца'],
    filter: (answer) => answer.toLowerCase(),
  },
  {
    type: 'list',
    name: 'question4',
    message: 'Какую должность в Нинтендо занимал создатель геймбой?',
    answer: ['Дворник'],
    filter: (answer) => answer.toLowerCase(),
  },
  {
    type: 'list',
    name: 'question5',
    message: 'Топ1 русская игра в мире ?',
    answer: ['тетрис'],
    filter: (answer) => answer.toLowerCase(),
  },
];
const gameQuestions2 = [
  {
    type: 'list',
    name: 'question6',
    message: 'Самый известный динозавр?',
    answer: ['Тирекс'],
    filter: (answer) => answer.toLowerCase(),
  },
  {
    type: 'list',
    name: 'question7',
    message: 'Назовите страну с самой высокой продолжительностью жизни',
    answer: ['Китай'],
    filter: (answer) => answer.toLowerCase(),
  },
  {
    type: 'list',
    name: 'question8',
    message: 'Какая планета в солнечной системе самая большая?',
    answer: ['Юпитер'],
    filter: (answer) => answer.toLowerCase(),
  },
  {
    type: 'list',
    name: 'question9',
    message: 'Какой самый популярный напиток в ирландии?',
    answer: ['Чай'],
    filter: (answer) => answer.toLowerCase(),
  },
  {
    type: 'list',
    name: 'question10',
    message: 'Высочайшая точка над уровнем моря в Африке? ',
    answers: ['Килиманджаро'],
    filter: (answer) => answer.toLowerCase(),
  },
];

module.exports = { questions, gameQuestions, gameQuestions2 };
