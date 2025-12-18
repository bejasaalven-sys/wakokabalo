const allFlashcards = [
    {
        question: "WHAT IS THE CAPITAL CITY OF THE PHILIPPINES?",
        answer: "Manila",
        qImg: "pic2.webp",
        aImg: "manila.jpeg"
    },
    {
        question: "WHAT ARE THE HARDEST THING TO UNDERSTAND?",
        answer: "Women",
        qImg: "pic2.webp",
        aImg: "maldita.jpeg"
    },
    {
        question: "WHAT DO WE CALL FATHER OF THE FATHER OF THE MOTHER OF YOUR GRAND FATHER?",
        answer: "IMONG LOLO",
        qImg: "pic2.webp",
        aImg: "reni1.jpeg"
    }
];

let flashcards = [...allFlashcards];
let currentIndex = 0;

/* LOAD CARD */
function loadCard() {
    const card = flashcards[currentIndex];
    document.getElementById("question-text").textContent = card.question;
    document.getElementById("question-image").src = card.qImg;

    document.getElementById("user-answer").value = "";
    document.getElementById("answer-section").style.display = "none";
    document.querySelector(".flip-container").classList.remove("flip");
}

/* SHOW ANSWER */
function showAnswer() {
    const card = flashcards[currentIndex];
    const userAnswer = document.getElementById("user-answer").value.trim().toLowerCase();
    const correct = userAnswer === card.answer.toLowerCase();

    document.getElementById("answer-section").style.display = "flex";
    document.getElementById("answer-display").innerHTML =
        `Your Answer: ${userAnswer}<br>Correct Answer: ${card.answer}`;
    document.getElementById("answer-image").src = card.aImg;

    setTimeout(() => {
        document.querySelector(".flip-container").classList.add("flip");
    }, 100);
}

/* NAVIGATION */
function nextCard() {
    if (currentIndex < flashcards.length - 1) {
        currentIndex++;
        loadCard();
    }
}

function prevCard() {
    if (currentIndex > 0) {
        currentIndex--;
        loadCard();
    }
}

/* ADD NEW FLASHCARD */
function addNewFlashcard() {
    const question = document.getElementById("new-question").value;
    const answer = document.getElementById("new-answer").value;
    const image = document.getElementById("new-image").files[0];

    if (!question || !answer) {
        alert("Please provide both question and answer.");
        return;
    }

    const newFlashcard = {
        question: question,
        answer: answer,
        qImg: URL.createObjectURL(image),
        aImg: "default-image.png" // You can add a default image or handle it differently
    };

    flashcards.push(newFlashcard);
    alert("New flashcard added!");
    loadCard();
}

window.onload = loadCard;
