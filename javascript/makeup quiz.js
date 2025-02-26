document.addEventListener('DOMContentLoaded', function () {
    const startButton = document.getElementById('start-btn');
    const quizWelcomeArea = document.getElementById('quiz-welcome-area');
    const quizQuestions = document.querySelectorAll('.mak_box');
    let currentQuestionIndex = 0;

    startButton.addEventListener('click', startQuiz);

    function startQuiz() {
        quizWelcomeArea.style.display = 'none';
        collectUserAnswer(); // Open prompt box immediately after clicking start
    }

    function collectUserAnswer() {
        const userAnswer = prompt('Please enter your answer (A, B, C, or D):');
        checkAnswer(userAnswer);
    }

    function checkAnswer(userAnswer) {
        const correctAnswer = 'B'; // Change this to the correct answer (A, B, C, or D)
        if (userAnswer && userAnswer.toUpperCase() === correctAnswer) {
            // If the user provides an answer and it's correct, move to the next question
            currentQuestionIndex++;
            if (currentQuestionIndex < quizQuestions.length) {
                showQuestion();
            } else {
                showQuizResult();
            }
        } else {
            // If the user provides an incorrect answer or no answer, move to the next question
            alert('Incorrect answer! Moving to the next question.');
            currentQuestionIndex++;
            if (currentQuestionIndex < quizQuestions.length) {
                showQuestion();
            } else {
                showQuizResult();
            }
        }
    }

    function showQuestion() {
        resetState();
        quizQuestions[currentQuestionIndex].style.display = 'block';
        startTimer(10); // Start a 10-second timer for each question
    }

    function resetState() {
        quizQuestions.forEach(question => {
            question.style.display = 'none';
        });
    }

    function startTimer(seconds) {
        const timerElement = quizQuestions[currentQuestionIndex].querySelector('.timer');
        let timeLeft = seconds;

        const countdown = setInterval(() => {
            if (timeLeft <= 0) {
                clearInterval(countdown);
                // If time runs out, open a prompt box for the user to input their answer
                collectUserAnswer();
            }
            timerElement.textContent = `Time left: ${timeLeft} seconds`;
            timeLeft -= 1;
        }, 1000);
    }

    function showQuizResult() {
        const quizResult = document.querySelector('.makeup_quiz_result');
        quizResult.style.display = 'block';
    }
});
