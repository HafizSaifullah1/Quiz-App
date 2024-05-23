


var allQuizQuestions = [
    {
        question: "HTML stands for?",
        options: [
            "Hyper Text Markup Language",
            "Home Tool Markup Language",
            "Hyperlinks and Text Markup Language",
            "Hyper Tool Markup Language"
        ],
        correct: "Hyper Text Markup Language"
    },
    {
        question: "What does CSS stand for?",
        options: [
            "Creative Style Sheets",
            "Cascading Style Sheets",
            "Computer Style Sheets",
            "Colorful Style Sheets"
        ],
        correct: "Cascading Style Sheets"
    },

    {
        question: "Which HTML attribute specifies an alternate text for an image, if the image cannot be displayed?",
        options: [
            "src",
            "alt",
            "title",
            "longdesc"
        ],
        correct: "alt"
    },

    {
        question: "Which CSS property controls the text size?",
        options: [
            "font-style",
            "text-size",
            "font-size",
            "text-style"
        ],
        correct: "font-size"
    },
    {
        question: "How do you call a function named 'myFunction' in JavaScript?",
        options: [
            "call myFunction()",
            "call function myFunction()",
            "myFunction()",
            "Call.myFunction()"
        ],
        correct: "myFunction()"
    },
    {
        question: "Inside which HTML element do we put the JavaScript?",
        options: [
            "script",
            "js",
            "javascript",
            "scripting"
        ],
        correct: "script"
    },
    {
        question: "How does a WHILE loop start?",
        options: [
            "while (i <= 10; i++)",
            "while (i <= 10)",
            "while i = 1 to 10",
            "while (i++ <= 10)"
        ],
        correct: "while (i <= 10)"
    },

    {
        question: "Which event occurs when the user clicks on an HTML element?",
        options: [
            "onmouseclick",
            "onchange",
            "onclick",
            "onmouseover"
        ],
        correct: "onclick"
    },
    {
        question: "What is the correct HTML element for the largest heading?",
        options: [
            "heading",
            "h6",
            "head",
            "h1"
        ],
    },

    {
        question: "Which company developed JavaScript?",
        options: [
            "Netscape",
            "Bell Labs",
            "Sun Microsystems",
            "IBM"
        ],
        correct: "Netscape"
    },
    {
        question: "What is the most used programming language in 2021?",
        options: [
            "Java",
            "C",
            "Python",
            "JavaScript"
        ],
        correct: "JavaScript"
    },

    {
        question: "Which of the following is a JavaScript framework?",
        options: [
            "Python",
            "React",
            "Django",
            "Flask"
        ],
        correct: "React"
    },
    {
        question: "What is the correct way to write a JavaScript array?",
        options: [
            "var colors = (1:'red', 2:'green', 3:'blue')",
            "var colors = ['red', 'green', 'blue']",
            "var colors = 'red', 'green', 'blue'",
            "var colors = 1 = ('red'), 2 = ('green'), 3 = ('blue')"
        ],
        correct: "var colors = ['red', 'green', 'blue']"
    },


];

var currentQuestionNo = document.getElementById("currentQuestionNo");
var totalQuestionNo = document.getElementById("totalQuestionNo");
var question = document.getElementById("question");
var options = document.getElementById("options");

var currentIndex = 0;

// console.log(allQuizQuestions.length)

function nextQuestion() {
    if (currentIndex + 1 == allQuizQuestions.length) {
        alert(`Question is complete and your marks are ${marks}`);
        console.log(alert)
        currentIndex = 0;
        marks = 0;
    } else {
        currentIndex++;

    }

    renderQuestion();
}

function checkQuestion(a, b) {
    if (a == b) {
        marks++;
        console.log(marks)
    }
    nextQuestion();
}

function renderQuestion() {
    currentQuestionNo.innerHTML = currentIndex + 1;
    totalQuestionNo.innerHTML = allQuizQuestions.length;
    question.innerHTML = allQuizQuestions[currentIndex].question;
    options.innerHTML = ""


    for (var i = 0; i < allQuizQuestions[currentIndex].options.length; i++) {
        var op = allQuizQuestions[currentIndex].options[i];

        options.innerHTML += `<div class="col=md-4 p-2">
    <button onclick"checkQuestion('${op}','${allQuizQuestions[currentIndex].correct}')" 
    class="btn btn-danger rounded-0" onclick="nextQuestion()">${op}</button>
    </div>`
    }
}
renderQuestion();
