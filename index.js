var readlineSync = require("readline-sync");
const chalk = require('chalk');

var score = 0;
var userName = readlineSync.question(chalk.blueBright("What is your name? "));

console.log("Welcome " + chalk.bold.yellow(userName) + " to an exciting Quiz on "+ chalk.bold.yellowBright("FAMOUS CITIES AND THEIR NICKNAMES!!"));
console.log("----------------------");

var highScore = {
  name : "Atul",
  score : 10
}

function ask(nickName, realName) {
  var userAnswer = readlineSync.question(chalk.blueBright("Q)Which city is known as ") + chalk.yellowBright(nickName)+"\nA)");

  if(userAnswer.toUpperCase() === realName.toUpperCase()) {
    console.log(chalk.bold.greenBright("You are right!"));
    score++;
  } else {
    console.log(chalk.bold.redBright("You are wrong!"));
    console.log("The correct answer is " + chalk.bold.greenBright(realName));
  }

  console.log("Your current score :", score);
  console.log("----------------------");
}

var cities = [ {
  nickName : "The City of Lakes? ",
  realName : "Bhopal"
}, {
  nickName : "The Diamond City? ",
  realName : "Surat"
}, {
  nickName : "The Pink City ",
  realName : "Jaipur"
}, {
  nickName : "Silicon Valley of India? ",
  realName : "Bangalore"
}, {
  nickName : "The Forbidden City? ",
  realName : "Beijing"
}, {
  nickName : "City of Joy? ",
  realName : "Kolkata"
}, {
  nickName : "The City of Dreams? ",
  realName : "Mumbai"
}, {
  nickName : "The Gambling Town? ",
  realName : "Las Vegas"
}, {
  nickName : "The Sun City? ",
  realName : "Jodhpur"
}, {
  nickName : "Manchester of India? ",
  realName : "Ahmedabad"
}]

for(var i = 0; i<cities.length; i++ ) {
  var currentCity = cities[i];
  ask(currentCity.nickName, currentCity.realName);
}

console.log("YAY! Your final score is :", score);

console.log("The latest recorded highscore is of " + chalk.bold.yellowBright(highScore.name) + " with score " + chalk.bold.yellowBright(highScore.score) + ". \nIf you have beaten this highscore send me a screenshot with your highscore score and I'll update this right away. \n" + chalk.bold.greenBright("Thank You for Playing :)"));

