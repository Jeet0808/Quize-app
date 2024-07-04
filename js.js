const questions = [
    {
        question: "Wich has the fastest speed in the universe ",
        answers: [
            {
                text: " The speed of space-X jet-engine", correct: false
            },
            {
                text: "  The speed of light ", correct: false
            },
            {
                text: " The speed of prodution of photonse ", correct: true
            },
            {
                text: "Speed of fusion", correct: false
            },
        ] 
    },

    {
        question: "Which wave reads brain signals  ",
        answers: [
            {
                text: " Neuraletic waves", correct: true
            },
            {
                text: "  Longnitudinal waves ", correct: false
            },
            {
                text: " Trasverse wave", correct: false
            },
            {
                text: "Neurathink waves", correct: false
            },
        ] 
    },

    {
        question: "Who was the founder of  speed of prodution of photones  ",
        answers: [
            {
                text: " The grest sir Nikola tesla", correct: false
            },
            {
                text: "  Albert einstine ", correct: false
            },
            {
                text: " Isac neuton ", correct: false
            },
            {
                text: "Jeet solanki", correct: true
            },
        ] 
    },

    {
        question: "Who is the owner of JLss production  ",
        answers: [
            {
                text: "Jeet solanki", correct: true
            },
            {
                text: " Ratan tata ", correct: false
            },
            {
                text: " Elon musk ", correct: false
            },
            {
                text: "Donald dumb", correct: false
            },
        ] 
    },

    {
        question: "Who proposed neuralatic waves  ",
        answers: [
            {
                text: "Rutherford", correct: false
            },
            {
                text: " J J thanos ", correct: false
            },
            {
                text: "Stiphin hockines", correct: false
            },
            {
                text: "Jeet solanki", correct: true
            },
        ] 
    },


];

const questionelement = document.getElementById("question");
const answerbtn = document.getElementById("answer-buttons");
const nextbtn = document.getElementById("next-btn");
const face = document.getElementById("face");
const face2 = document.getElementById("face2");

const face3 = document.getElementById("face3");
const face0 = document.getElementById("face0");

const face4 = document.getElementById("face4");



let currentqindex = 0;
let score = 0;

function startQuiz(){
    currentqindex = 0;
    score = 0;
    nextbtn.innerHTML = "Next";
    showquestion();
    face.style.display = "none";
    face2.style.display = "none";
    face3.style.display = "none";
    face0.style.display = "inline";
    face4.style.display = "none";
}



function showquestion(){
    resetstate();
    let currentq = questions[currentqindex];
    let questionno = currentqindex + 1;
    questionelement.innerHTML = questionno + ". " + currentq.question;

    currentq.answers.forEach(answers => {
        const button = document.createElement("button");
        button.innerHTML = answers.text;
        button.classList.add("btn");
        answerbtn.appendChild(button);
        if(answers.correct){
            button.dataset.correct = answers.correct;
        }
        button.addEventListener("click", selectans);
    });

} 
function resetstate(){
    nextbtn.style.display = "none";
    while(answerbtn.firstChild){
        answerbtn.removeChild(answerbtn.firstChild);
    }
}

function selectans(e){
    const selectbtn = e.target;
    const iscorr = selectbtn.dataset.correct === "true";

    if(iscorr){
        selectbtn.classList.add("correct");
        score++;

    }
    else{
        selectbtn.classList.add("incorrect");
    }
    Array.from(answerbtn.children).forEach(button =>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct");

        }

        button.disabled =true;
    });
    nextbtn.style.display = "block";

}

function showscore(){
    resetstate();
   
        if(score == questions.length){
             questionelement.innerHTML = `you scored ${score} out of ${questions.
        length}  You are a genius let's chairs`;
        face.style.display = "none";
        face2.style.display = "none";
       face3.style.display = "inline";
       face4.style.display = "inline";
       face0.style.display = "none";
        }
        else if(score < questions.length){
            questionelement.innerHTML = `you scored ${score} out of ${questions.
                length }  You are a dumb  `;
                face.style.display = "inline";
                face2.style.display = "inline";
                 face3.style.display = "none";
                 face0.style.display = "none";
                 face4.style.display = "none";
        }

        nextbtn.innerHTML = "Try again"
        nextbtn.style.display = "block";
}

function handlenextbtn(){
    currentqindex++;
    if(currentqindex < questions.length){
        showquestion();
    }
    else{
        showscore();
    }

}

nextbtn.addEventListener("click",() => {
    if(currentqindex < questions.length) {
        handlenextbtn();
    }
    else{
        startQuiz();
    }
})

startQuiz();


