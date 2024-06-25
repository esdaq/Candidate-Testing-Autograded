const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = ``;
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = "";


//TODO: Variables for Part 2
let questions = [
  "Who was the first American woman in space? ",
  "True or false: 5 kilometer == 5000 meters? ",
  "(5 + 3)/2 * 10 = ? ",
  "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ",
  "What is the minimum crew size for the ISS? "
];

let correctAnswers = [
  "Sally Ride",
  "true",
  "40",
  "Trajectory",
  "3"
];

let candidateAnswers = [];


function askForName() {
  // TODO 1.1b: Ask for candidate's name //
  candidateName = input.question("Please enter your name: ");
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
  //candidateAnswer = input.question(question);
  //candidateAnswers.push(candidateAnswer);
  questions.forEach(question => {
    candidateAnswer = input.question(question);
    candidateAnswers.push(candidateAnswer);
    //console.log(candidateAnswers);
  });
}

function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
/*   console.log("Your Answer: " + candidateAnswer);
  console.log("Correct Answer: " + correctAnswer);
  if(candidateAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
    console.log("\nYou're correct!");
  } else {
    console.log("Sorry wrong answer.");
  } */

  //NOTE Refractor
  let numOfCorrectAnswers = 0;
  console.log("");
  console.log("Candidate Name: " + candidateName);
  for (let i = 0; i < candidateAnswers.length; i++) {
    console.log((i+1) + ") " + questions[i]);
    console.log("Your Answer: " + candidateAnswers[i]);
    console.log("Correct Answer: " + correctAnswers[i]);
    console.log();
    if(candidateAnswers[i].toLowerCase() === correctAnswers[i].toLowerCase()) {
      //console.log("\nYou're correct!");
      numOfCorrectAnswers++;
    }
  }


  //NOTE End of Refractor

  let grade = (numOfCorrectAnswers / questions.length) * 100;  //TODO 3.2 use this variable to calculate the candidates score.
  console.log(">>> Overall Grade: " + grade + "% " +
    "(" + numOfCorrectAnswers + " of "
     + correctAnswers.length +
      " responses correct) <<<"
  )

  if (grade >= 80) {
    console.log(">>> Status: PASSED <<<");
  }else {
    console.log(">>> Status: FAILED <<<");
  }

  return grade;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Greet candidate using their name //
   console.log("\nHi, " + candidateName + "\n");
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// ----------- Don't write any code or change any code below this line ---------- //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};