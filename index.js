const inquirer = require("inquirer");
const { EOL } = require("os");
const { questions, gameQuestions, gameQuestions2, themes } = require("./model");
const checkAnswer = require("./check");

async function startGame() {
  const welcome = await inquirer.prompt(questions);
  console.log(`Привет ${welcome.playerName}! Давай начнем игру!`);
  const themesChoise = await inquirer.prompt(themes);

  if (themesChoise.Type === "Природа") {
    for (let index = 0; index < gameQuestions2.length; index += 1) {
      let userAnswer = await inquirer.prompt(gameQuestions2[index]);

      if (
        userAnswer[gameQuestions2[index].name] === gameQuestions2[index].answer
      ) {
        console.log("Верно");
      } else {
        console.log("Неверно");
      }
    }
  } else {
    for (let index = 0; index < gameQuestions.length; index += 1) {
      let userAnswer = await inquirer.prompt(gameQuestions[index]);

      if (
        userAnswer[gameQuestions[index].name] === gameQuestions[index].answer
      ) {
        console.log("Верно");
      } else {
        console.log("Неверно");
      }
    }
  }
}

startGame();

module.exports = startGame;
