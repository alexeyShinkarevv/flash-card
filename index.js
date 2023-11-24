const inquirer = require("inquirer");

class Hello {
  constructor(type, name, message) {
    this.type = type;
    this.name = name;
    this.message = message;
  }
}

// class Quiz {
//   constructor(themes, questions, results) {
//     this.themes = themes;
//     this.questions = questions;
//     this.results = results;
//   }
// }

async function startGame() {
  const r = new Hello();
  const welcome = await inquirer.prompt(Hello);
  console.log("welcome");
}

startGame();
