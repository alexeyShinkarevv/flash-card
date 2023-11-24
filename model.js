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
    type: "input",
    name: "question1",
    message: "Какая игровая консоль самая продаваемая на сегодняшний день?",
    answer: "плейстейшен",
    filter: (answer) => answer.toLowerCase(),
  },
  {
    type: "input",
    name: "question2",
    message: "Самая известная игра компании близзард?",
    answer: "варкрафт",
    filter: (answer) => answer.toLowerCase(),
  },
  {
    type: "input",
    name: "question3",
    message: "По образу какой еды был смоделирован пакман? ",
    answer: "пицца",
    filter: (answer) => answer.toLowerCase(),
  },
  {
    type: "input",
    name: "question4",
    message: "Какую должность в Нинтендо занимал создатель геймбой?",
    answer: "дворник",
    filter: (answer) => answer.toLowerCase(),
  },
  {
    type: "input",
    name: "question5",
    message: "Топ1 русская игра в мире ?",
    answer: "тетрис",
    filter: (answer) => answer.toLowerCase(),
  },
];

const gameQuestions2 = [
  {
    type: "input",
    name: "question6",
    message: "Самый известный динозавр?",
    answer: "тирекс",
    filter: (answer) => answer.toLowerCase(),
  },
  {
    type: "input",
    name: "question7",
    message: "Назовите страну с самой высокой продолжительностью жизни",
    answer: "китай",
    filter: (answer) => answer.toLowerCase(),
  },
  {
    type: "input",
    name: "question8",
    message: "Какая планета в солнечной системе самая большая?",
    answer: "юпитер",
    filter: (answer) => answer.toLowerCase(),
  },
  {
    type: "input",
    name: "question9",
    message: "Какой самый популярный напиток в ирландии?",
    answer: "чай",
    filter: (answer) => answer.toLowerCase(),
  },
  {
    type: "input",
    name: "question10",
    message: "Высочайшая точка над уровнем моря в Африке? ",
    answers: "килиманджаро",
    filter: (answer) => answer.toLowerCase(),
  },
];
const themes = [
  {
    type: "list",
    name: "Type",
    message: "выбери тему",
    choices: ["Природа", "Игры"],
  },
];

module.exports = { questions, gameQuestions, gameQuestions2, themes };
