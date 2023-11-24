const inquirer = require("inquirer");
const chalk = require("chalk");
const { questions, gameQuestions, gameQuestions2, themes } = require("./model");
const logo = [
  ["********************************************************"],
  ["*_\\\\\\      \\       \\\\\\    \\\\\\    \\\\\\      *"],
  ["*  \\   \\     \\       \\  \\    \\   \\   \\         *"],
  ["*___\\\\\\      \\       \\\\\\    \\    \\  \\\\\\    *"],
  ["*    \\   \\     \\       \\  \\    \\   \\   \\       *"],
  ["*_____\\\\\\      \\\\\\   \\  \\    \\\\\\    \\\\\\  *"],
  ["********************************************************"],
  ["_______________________RUNERS___________________________"],
  ["                                                        "],
  ["                 < Q    U   i     Z >                   "],
  ["________________________________________________________"],
];

console.log(logo);
async function startGame() {
  const welcome = await inquirer.prompt(questions);
  console.log(chalk.bgBlue(`Привет ${welcome.playerName}! Давай начнем игру!`));
  const themesChoise = await inquirer.prompt(themes);

  if (themesChoise.Type === "Природа") {
    for (let index = 0; index <= gameQuestions2.length; index += 1) {
      let userAnswer = await inquirer.prompt(gameQuestions2[index]);
      if (
        userAnswer[gameQuestions2[index].name] === gameQuestions2[index].answer
      ) {
        console.log(chalk.green("Верно"));
      } else {
        console.log(chalk.red("Неверно"));
      }
    }
  } else {
    for (let index = 0; index < gameQuestions.length; index += 1) {
      let userAnswer = await inquirer.prompt(gameQuestions[index]);
      if (
        userAnswer[gameQuestions[index].name] === gameQuestions[index].answer
      ) {
        console.log(chalk.green("Верно"));
      } else {
        console.log(chalk.red("Неверно"));
      }
    }
  }
}

startGame();

module.exports = startGame;
