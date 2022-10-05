const readlineSync = require("readline-sync");
const chalk = require('chalk');

let score = 0;
const userName = readlineSync.question(chalk.blueBright("What is your name? "));

console.log("Welcome " + chalk.bold.yellow(userName) + " to a Quiz on " + chalk.bold.yellowBright("FAMOUS CITIES AND THEIR NICKNAMES!!"));
console.log("----------------------");

const highScore = {
  name: "Anupam",
  score: 5
}

function ask(nickName, realName, options) {

  console.log(chalk.blueBright("Q) Which city is known as " + chalk.yellowBright(nickName) + "\n" + chalk.yellow('Options: ')))
  options.forEach(city => console.log(city));
  
  const userAnswer = readlineSync.question(chalk.blueBright('Please type your answer : '));
  
  if (userAnswer.toUpperCase() === realName.toUpperCase()) {
    console.log(chalk.bold.greenBright("You are right!"));
    score++;
  } else {
    console.log(chalk.bold.redBright("You are wrong!"));
    console.log("The correct answer is " + chalk.bold.greenBright(realName));
  }

  console.log("Your current score :", score);
  console.log("----------------------");
}

const cities = [{
  nickName: "The City of Lakes? ",
  realName: "Bhopal",
  options: ['Indore', 'Bhopal', 'Surat', 'Kolkata']
}, {
  nickName: "The Diamond City? ",
  realName: "Surat",
  options: ['Surat', 'Jabalpur', 'Ranchi', 'Amritsar']
}, {
  nickName: "The Pink City ",
  realName: "Jaipur",
  options: ['Jaipur', 'Allahabad', 'Dhanbad', 'Srinagar']
}, {
  nickName: "Silicon Valley of India? ",
  realName: "Bangalore",
  options: ['Varanasi', 'Coimbatore', 'Gwalior', 'Bangalore']
}, {
  nickName: "City of Joy? ",
  realName: "Kolkata",
  options: ['Madurai', 'Kolkata', 'Raipur', 'Kota']
}]

for (var i = 0; i < cities.length; i++) {
  var currentCity = cities[i];
  ask(currentCity.nickName, currentCity.realName, currentCity.options);
}

console.log("YAY! Your final score is :", score);

console.log("The latest recorded high score is of " + chalk.bold.yellowBright(highScore.name) + " with score " + chalk.bold.yellowBright(highScore.score) + ". \nIf you have beaten this high score ping me with your high score score and I'll update this right away. \n" + chalk.bold.greenBright("Thank You for playing :)"));

