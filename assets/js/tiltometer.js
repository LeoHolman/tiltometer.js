$('img[usemap]').imageMap(); //Make image map responsive

const questionScreenText = document.getElementById("questionScreenText");
const responseScreenText = document.getElementById("responseScreenText");
const questions = { //list questions and answers
    "1" : {         //answers are coded, codes explained in answerCodes
        "question" : "Write a research paper on censorship and the Internet",
        "Correct" : [1,2,4,8,9],
        "Almost" : [3,5,6],
        "False" : [7]
    },
    "2" : {
        "question" : "Check out the latest football scores",
        "Correct" : [6,3],
        "Almost" : [2,7],
        "False" : [1,4,5,8,9]
    },
    "3" : {
        "question" : "Research current information on a company before a job interview",
        "Correct" : [6,2,3,8],
        "Almost" : [7],
        "False" : [1,4,5,9]
    },
    "4" : {
        "question" : "Find a review of a current movie",
        "Correct" : [6,3,8],
        "Almost" : [7],
        "False" : [1,2,4,5,9]
    },
    "5" : {
        "question" : "Locate a brief history of the transistor and its inventors",
        "Correct" : [4,5,8,9],
        "Almost" : [2,6],
        "False" : [1,3,7]
    },
    "6" : {
        "question" : "Read about yesterday's earthquake in Mexico",
        "Correct" : [3,6],
        "Almost" : [2,7],
        "False" : [1,4,5,8,9]
    },
    "7" : {
        "question" : "Locate studies for a paper about employee email abuse",
        "Correct" : [9,8,4,1,2],
        "Almost" : [3,5,6,7],
        "False" : []
    },
    "8" : {
        "question" : "You have successfully filled all seven requests"
    }
};
const answerCodes = { //correlate button types with answer codes
    "journal"             : "1", 
    "magazine"            : "2",
    "newspaper"           : "3",
    "book"                : "4",
    "encyclopedia"        : "5",
    "web"                 : "6",
    "email"               : "7",
    "periodical-database" : "8",
    "library-catalog"     : "9"
}

//Wire up buttons
document.getElementById("journal").addEventListener("click", () => {
    checkAnswer("journal");
});

document.getElementById("magazine").addEventListener("click", () => {
    checkAnswer("magazine");
});

document.getElementById("newspaper").addEventListener("click", () => {
    checkAnswer("newspaper");
});

document.getElementById("book").addEventListener("click", () => {
    checkAnswer("book");
});

document.getElementById("encyclopedia").addEventListener("click", () => {
    checkAnswer("encyclopedia");
});

document.getElementById("web").addEventListener("click", () => {
    checkAnswer("web");
});

document.getElementById("email").addEventListener("click", () => {
    checkAnswer("email");
});

document.getElementById("periodical-database").addEventListener("click", () => {
    checkAnswer("periodical-database");
});

document.getElementById("library-catalog").addEventListener("click", () => {
    checkAnswer("library-catalog");
});

function setResponseScreenText(string){
    responseScreenText.innerHTML = string;
}

function setQuestionScreenText(string){
    questionScreenText.innerHTML = string;
}

//Initalize to 0 so first question appears
var thisQuestionNumber = 0;

function nextQuestion(){
    if(thisQuestionNumber < Object.keys(questions).length){
        thisQuestionNumber++;
        setQuestionScreenText(questions[thisQuestionNumber].question);
    }
}

function checkAnswer(buttonName){
    let found = false;
    if(!(questions[thisQuestionNumber].question == "You have successfully filled all seven requests")){ //check to see if at end of questions, skip checking process if at the end
        if(!found){ //search for answer in correct
            for(let i = 0; i <= Object.keys(questions[thisQuestionNumber].Correct).length; i++){ 
                if(answerCodes[buttonName] == questions[thisQuestionNumber].Correct[i]){
                    //setPointer(correct);
                    setResponseScreenText("Correct!");
                    found = true;
                    break;
                }
            }
        }
        if(!found){ //if not found in correct search almost
            for(let i = 0; i <= Object.keys(questions[thisQuestionNumber].Almost).length; i++){
                if(answerCodes[buttonName] == questions[thisQuestionNumber].Almost[i]){
                    //setPointer(correct);
                    setResponseScreenText("Almost!");
                    found = true;
                    break;
                }
            }
        }
        if(!found){ //if not found in correct or almost search false
            for(let i = 0; i <= Object.keys(questions[thisQuestionNumber].False).length; i++){
                if(answerCodes[buttonName] == questions[thisQuestionNumber].False[i]){
                    //setPointer(correct);
                    setResponseScreenText("False!");
                    found = true;
                    break;
                }
            }
        }    
        nextQuestion();
    }
}

//Ask first question
nextQuestion();

//jQuery rotate plugin
function rotatePointer(correctness){
    $("#pointer").rotate({
        angle: 0,
        animateTo: -70,
        duration: 1000
    });
    setTimeout( () => {
        $("#pointer").stopRotate();
    }, 500);
    if(correctness == "correct"){
        setTimeout( () => {
            let currentAngle = $("#pointer").getRotateAngle();
            $("#pointer").rotate({
                angle: currentAngle,
                animateTo: 70,
                duration: 2000
            });
        }, 600);
    }
}
rotatePointer("correct");