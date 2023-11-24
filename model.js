
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
    message: '',
    answer: [''],
    filter: (answer) => answer.toLowerCase(),
  },
  {
    type: 'list',
    name: 'question2',
    message: '',
    answer: [''],
    filter: (answer) => answer.toLowerCase(),
  },
  {
    type: 'list',
    name: 'question3',
    message: '',
    answer: [''],
    filter: (answer) => answer.toLowerCase(),
  },
  {
    type: 'list',
    name: 'question4',
    message: '',
    answer: [''],
    filter: (answer) => answer.toLowerCase(),
  },
  {
    type: 'list',
    name: 'question5',
    message: '',
    answer: [''],
    filter: (answer) => answer.toLowerCase(),
  },
]
  const gameQuestions2 = [
    {
      type: 'list',
      name: 'question6',
      message: '',
      answer: [''],
      filter: (answer) => answer.toLowerCase(),
    },
    {
      type: 'list',
      name: 'question7',
      message: '',
      answer: [''],
      filter: (answer) => answer.toLowerCase(),
    },
    {
      type: 'list',
      name: 'question8',
      message: '',
      answer: [''],
      filter: (answer) => answer.toLowerCase(),
    },
    {
      type: 'list',
      name: 'question9',
      message: '',
      answer: [''],
      filter: (answer) => answer.toLowerCase(),
    },
    {
      type: 'list',
      name: 'question10',
      message: '',
      answers: [''],
      filter: (answer) => answer.toLowerCase(),
    },

];

module.exports = { questions, gameQuestions };