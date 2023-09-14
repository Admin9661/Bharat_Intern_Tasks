const apiUrl = "https://opentdb.com/api.php?amount=10&difficulty=easy&type=multiple";

let quizData = [];
let currentQuestion = 0;
let score = 0;

async function fetchQuizData() {
  const response = await fetch(apiUrl);
  const data = await response.json();
  return data.results;
}

async function loadQuizData() {
  try {
    quizData = await fetchQuizData();
    currentQuestion = 0;
    score = 0;
    loadQuestion();
  } catch (error) {
    console.error(error);
    alert("Failed to fetch quiz data. Please try again later.");
  }
}

function loadQuestion() {
  const questionElement = document.getElementById("question");
  const optionsElement = document.getElementById("options");

  const currentQuizData = quizData[currentQuestion];

  questionElement.innerText = currentQuizData.question;

  optionsElement.innerHTML = "";
  currentQuizData.incorrect_answers.forEach((option) => {
    const button = document.createElement("button");
    button.innerText = option;
    button.addEventListener("click", () => selectAnswer(false));
    optionsElement.appendChild(button);
  });

  const correctButton = document.createElement("button");
  correctButton.innerText = currentQuizData.correct_answer;
  correctButton.addEventListener("click", () => selectAnswer(true));
  optionsElement.appendChild(correctButton);
}

function selectAnswer(isCorrect) {
  if (isCorrect) {
    score++;
  }

  currentQuestion++;

  if (currentQuestion < quizData.length) {
    loadQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  const quizContainer = document.querySelector(".quiz-container");
  quizContainer.innerHTML = `<h1>Quiz Completed</h1>
                             <p>Your score: ${score} out of ${quizData.length}</p>`;
}

loadQuizData();