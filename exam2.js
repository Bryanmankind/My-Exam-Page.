"use strict";

const Question = [
  " 1. How many states are in Nigeria ?",
  " 2. who is the current president of Nigeria ?",
  " 3. which state are you from ?",
  " 4. How  many state in Nigeria have you traveled to ?",
];

// LIST OF OPTIONS.

const Options = [
  [" A:22", "B:35", "C:23", "D:36"],
  [" A:Buhari", "B:Osibanjo", "C:Saraki", "D:Mike Adenuga"],
  [" A:Osun", "B:Imo", "C:Lagos", "D:Uyo"],
  [" A:4", "B:3", "C:4", "D:6"],
];

// LIST OF ANSWERS

let Answers = ["D:36", "A:Buhari", "A:Osun", "D:6"];

// Student Answers

let StudentAnw = [];

for (let i = 0; i < Question.length; i++) {
  // Display both question  and options

  const SeeQuest = document.createElement("div");

  //   Attribute Name Given
  SeeQuest.id = "SeeQuest";

  // Adding the question as a text node.

  // const QuestNode = document.createTextNode(Question[i]);

  // Append our text

  SeeQuest.appendChild(document.createTextNode(Question[i]));

  for (let j = 0; j < Options.length; j++) {
    // create our exam
    const TypeOptions = document.createElement("input");

    (TypeOptions.type = "radio"), (TypeOptions.name = i);
    TypeOptions.value = Options[i][j];

    // wrap off exam div

    const DisOptions = document.createElement("div");

    DisOptions.appendChild(TypeOptions);

    // Display each option beside thier correspondig exams

    const examnode = document.createTextNode(Options[i][j]);

    DisOptions.appendChild(examnode);

    SeeQuest.appendChild(DisOptions);
  }
  document.getElementById("container").appendChild(SeeQuest);
}

const submitbtn = document.createElement("button");
submitbtn.innerHTML = "Submit";
document.getElementById("container").append(submitbtn);

// Selecting all the checked inputs

const finish = function () {
  const user = document.querySelectorAll("input:checked");
  console.log(user);

  // Adding checked answer to array

  for (let i = 0; i < user.length; i++) {
    StudentAnw.push(user[i].value);
  }
  console.log(StudentAnw);
  console.log(Answers);

  for (let k = 0; k < Answers.length; k++) {
    var correct = 0;

    if (Answers[k] == StudentAnw[k]) {
      return correct++;
    }
  }

  document.getElementById(
    "container"
  ).innerHTML = ` Your Score is ${correct} out of ${Answers.length}`;
};

submitbtn.addEventListener("click", finish);
