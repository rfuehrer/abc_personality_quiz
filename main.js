let currentQuestion = 0;
let score = [];
let selectedAnswersData = [];
const totalQuestions =questions.length;

const container = document.querySelector('.quiz-container');
//const questionElNum = document.querySelector('.questionNumber');
//const questionEl = document.querySelector('.questionText');
const questionElNum = document.getElementById('questionNumber');
const questionEl = document.getElementById('questionText');
const option1 = document.getElementById('option1');
const option2 = document.getElementById('option2');
const option3 = document.getElementById('option3');
const option4 = document.getElementById('option4');
const option5 = document.getElementById('option5');

const nextButton = document.querySelector('.next');
const previousButton = document.querySelector('.previous');
const restartButton = document.querySelector('.restart');
const result = document.querySelector('.result');

result.style.display = 'none';

// Function get get most frequent item in array
function findMostFrequest(arr) {
    let compare = "";
    let mostFreq = "";

    arr.reduce((acc, val) => {
      if(val in acc){               // if key already exists
         acc[val]++;                // then increment it by 1
      }else{
         acc[val] = 1;      // or else create a key with value 1
      }
      if(acc[val] > compare){   // if value of that key is greater
                                // than the compare value.
         compare = acc[val];    // than make it a new compare value.
         mostFreq = val;        // also make that key most frequent.
      }
      return acc;
    }, {})
//    console.log("Most Frequent Item is:", mostFreq);
    return mostFreq;
}

//Function to generate question 
function generateQuestions (index) {
    //Select each question by passing it a particular index
    const question = questions[index];
    const option1Total = questions[index].answer1Total;
    const option2Total = questions[index].answer2Total;
    const option3Total = questions[index].answer3Total;
    const option4Total = questions[index].answer4Total;
    const option5Total = questions[index].answer5Total;
    //Populate html elements 
    questionElNum.innerHTML = `${index + 1}`
    questionEl.innerHTML = `${question.question}`
    option1.setAttribute('data-total', `${option1Total}`);
    option2.setAttribute('data-total', `${option2Total}`);
    option3.setAttribute('data-total', `${option3Total}`);
    option4.setAttribute('data-total', `${option4Total}`);
    option5.setAttribute('data-total', `${option5Total}`);
    option1.innerHTML = `${question.answer1}`
    option2.innerHTML = `${question.answer2}`
    option3.innerHTML = `${question.answer3}`
    option4.innerHTML = `${question.answer4}`
    option5.innerHTML = `${question.answer5}`
}


function loadNextQuestion () {
    const selectedOption = document.querySelector('input[type="radio"]:checked');
    //Check if there is a radio input checked
    if(!selectedOption) {
        alert('Bitte wähle eine Antwort!');
        return;
    }
    //Get value of selected radio
    var myvalue=selectedOption.value;
    const answerScore=document.getElementById('option'+myvalue).getAttribute('data-total')

    ////Add the answer score to the score array
    score.push(answerScore);

    selectedAnswersData.push()

    const totalScore = score.reduce((total, currentNum) => total + currentNum);

    //Finally we incement the current question number ( to be used as the index for each array)
    currentQuestion++;

        //once finished clear checked
        selectedOption.checked = false;
    //If quiz is on the final question
    if(currentQuestion == totalQuestions - 1) {
        nextButton.textContent = 'Gleich geschafft...';
    }
    //If the quiz is finished then we hide the questions container and show the results 
    if(currentQuestion == totalQuestions) {
        var VARmost = findMostFrequest(score);
        var VARout = VARmost.toString();
        switch(VARout) {
            case "A":
                var VARteam = "Team Publicity";
                break;
            case "B":
                var VARteam = "Team Communities";
                break;
            case "C":
                var VARteam = "Team Qualifications";
                break;
            case "D":
                var VARteam = "Team HR Solutions";
                break;
            case "E":
                var VARteam = "Team Conference";
                break;
            default:
              var VARteam = "Empfang"
        }

        container.style.display = 'none';
        result.style.display = 'flex';
        result.innerHTML =
         `<h1 class="final-score"></h1>
         <div class="summary">
            <h1 class="final-score">Du gehörst eindeutig ins Team:</h1>
            <h2 class="final-team">${VARteam}</h2>
            <p>Nimm am besten gleich mit dem Repräsentaten des Teams Kontakt auf!</p>
        </div>
        <button class="restart">Quiz neu starten</button>
         `;
        return;
    }
    generateQuestions(currentQuestion);
}

//Function to load previous question
function loadPreviousQuestion() {
    //Decrement quentions index
    currentQuestion--;
    //remove last array value;
    score.pop();
    //Generate the question
    generateQuestions(currentQuestion);
}

//Fuction to reset and restart the quiz;
function restartQuiz(e) {
    if(e.target.matches('button')) {
    //reset array index and score
    currentQuestion = 0;
    score = [];
    //Reload quiz to the start
    location.reload();
    }

}


generateQuestions(currentQuestion);
nextButton.addEventListener('click', loadNextQuestion);
previousButton.addEventListener('click',loadPreviousQuestion);
result.addEventListener('click',restartQuiz);