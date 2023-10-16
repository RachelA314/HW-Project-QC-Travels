const quizData = [
    {
        question: "What type of climate do you prefer?",
        a: "Tropical",
        b: "Temperate",
        c: "Polar"
    },
    {
        question: "What is your favorite outdoor activity?",
        a: "Relaxing on the beach",
        b: "Hiking in the Mountains",
        c: "Skiing in the snow"
    },
    {
        question: "Which cuisine do you prefer?",
        a: "Seafood",
        b: "Italian",
        c: "Sushi"
    }
];

const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('input[name="answer"]');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;
let destination = "";

loadQuiz();

function loadQuiz() {
    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
}

function getSelected() {
    let answer = undefined;

    answerEls.forEach(answerEl => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected();

    if (answer) {
        currentQuiz++;
        if (currentQuiz < quizData.length) {
            if (currentQuiz === 1) {
                destination = answer === "a" ? "Bali" : (answer === "b" ? "Thailand" : "Switzerland");
            }
            loadQuiz();
        } else {
            quiz.innerHTML = `<h2>Your next destination is ${destination}</h2><button onclick="location.reload()">Reload</button>`;
        }
    }
});
