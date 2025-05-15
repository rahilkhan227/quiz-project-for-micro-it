const quizData = [
  {
    question: "What is the capital city of France?",
    options: ["Paris", "London", "Berlin", "Madrid"],
    answer: "Paris"
  },
  {
    question: "Who wrote the play 'Romeo and Juliet'?",
    options: ["William Shakespeare", "Leo Tolstoy", "Mark Twain", "Jane Austen"],
    answer: "William Shakespeare"
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Mars", "Venus", "Jupiter", "Saturn"],
    answer: "Mars"
  },
  {
    question: "How many continents are there on Earth?",
    options: ["5", "6", "7", "8"],
    answer: "7"
  },
  {
    question: "What is the largest ocean on Earth?",
    options: ["Atlantic Ocean", "Indian Ocean", "Pacific Ocean", "Arctic Ocean"],
    answer: "Pacific Ocean"
  },
  {
    question: "Who painted the Mona Lisa?",
    options: ["Leonardo da Vinci", "Vincent Van Gogh", "Pablo Picasso", "Michelangelo"],
    answer: "Leonardo da Vinci"
  },
  {
    question: "Which country is famous for the Great Pyramid of Giza?",
    options: ["Mexico", "Egypt", "Peru", "India"],
    answer: "Egypt"
  },
  {
    question: "What is the chemical symbol for water?",
    options: ["HO", "H2O", "O2", "CO2"],
    answer: "H2O"
  },
  {
    question: "Which language is the most widely spoken in the world?",
    options: ["English", "Mandarin Chinese", "Spanish", "Hindi"],
    answer: "Mandarin Chinese"
  },
  {
    question: "In which year did the Titanic sink?",
    options: ["1912", "1905", "1898", "1920"],
    answer: "1912"
  },
  {
    question: "What is the tallest mountain in the world?",
    options: ["K2", "Mount Everest", "Kangchenjunga", "Lhotse"],
    answer: "Mount Everest"
  },
  {
    question: "Who is known as the Father of Computers?",
    options: ["Alan Turing", "Charles Babbage", "Thomas Edison", "Nikola Tesla"],
    answer: "Charles Babbage"
  }
];

let current = 0;
let score = 0;

window.onload = loadQuestion;

function loadQuestion() {
  const q = quizData[current];
  document.getElementById("question").textContent = q.question;
  const optBox = document.getElementById("options");
  optBox.innerHTML = "";

  q.options.forEach(opt => {
    const btn = document.createElement("button");
    btn.textContent = opt;
    btn.onclick = () => checkAnswer(btn, q.answer);
    optBox.appendChild(btn);
  });
}

function checkAnswer(selected, correct) {
  const buttons = document.querySelectorAll("#options button");
  buttons.forEach(btn => btn.disabled = true);

  if (selected.textContent === correct) {
    selected.style.background = "limegreen";
    score++;
  } else {
    selected.style.background = "crimson";
    buttons.forEach(btn => {
      if (btn.textContent === correct) {
        btn.style.background = "limegreen";
      }
    });
  }

  document.getElementById("scoreDisplay").textContent = `Score: ${score} / ${quizData.length}`;
}

function nextQuestion() {
  if (current < quizData.length - 1) {
    current++;
    loadQuestion();
  } else {
    document.getElementById("question").textContent = "🎉 You finished the quiz!";
    document.getElementById("options").innerHTML = "";
    document.getElementById("nextBtn").style.display = "none";
  }
}
