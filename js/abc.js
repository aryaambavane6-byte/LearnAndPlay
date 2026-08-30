const questions = [
    {
        image: "assets/images/ABC/apple.jpg",
        answer: "A"
    },

    {
        image: "assets/images/ABC/ball.jpg",
        answer: "B"
    },

    {
        image: "assets/images/ABC/cow.jpg",
        answer: "C"
    },

    {
        image: "assets/images/ABC/dog.jpg",
        answer: "D"
    },

    {
        image: "assets/images/ABC/elephant.jpg",
        answer: "E"
    }
];


let currentQuestion = 0;
let score = 0;


function checkAnswer(answer) {

    const feedback = document.getElementById("feedback");

    const correctAnswer = questions[currentQuestion].answer;


    if (answer === correctAnswer) {

        score++;

        feedback.textContent = "🎉 Correct! Great job!";

        feedback.className = "correct";

    } else {

        feedback.textContent =
            "❌ Oops! The correct answer is " + correctAnswer;

        feedback.className = "wrong";
    }


    setTimeout(nextQuestion, 1000);
}


function nextQuestion() {

    currentQuestion++;


    if (currentQuestion >= questions.length) {

        showResult();

        return;
    }


    document.getElementById("questionImage").src =
        questions[currentQuestion].image;


    document.getElementById("questionNumber").textContent =
        currentQuestion + 1;


    document.getElementById("feedback").textContent = "";
}


function showResult() {

    document.querySelector(".game-page").innerHTML = `

        <div class="result-card">

            <h2>🎉 Great Job!</h2>

            <p class="final-score">
                You scored ${score} / ${questions.length}
            </p>

            <p>
                ⭐ Keep learning and playing!
            </p>

            <a href="abc.html" class="play-again">
                🔄 Play Again
            </a>

            <a href="games.html" class="back-button">
                🎮 Choose Another Game
            </a>

        </div>

    `;
}