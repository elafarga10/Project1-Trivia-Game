//In html we need to create 10 questions and their corresponding answers

//the answers should be assigned to a button or some element user will click on

//HTML should also include the Trivia Game title

//In js we will need to target the buttons and add event listeners using event propagation

//we will also need to target the questions by class

//separate question by functions and use each function to display the question and answers

//when user clicks on right question, button turns green and rest turn red

//once user answers question, next question needs to be displayed along with its own corresponding answer choices

//process repeats

//once final question is answered, screen displays score

// //In summary: app should be able to display question along with corresponding answers in buttons, when user clicks on right answer it will display as green or correct, if the user selects wrong answer it will display as wrong, then a new question will appear along with its own corresponding answers and the process repeats.

const questionOne = 'When was Lego founded?';

// const wrongAnswer1 = '1912';
// const wrongAnswer2 = '1943';
// const wrongAnswer3 = '1951';
const wrongAnswer4 = 'United States';
const wrongAnswer5 = 'Sweden';
const wrongAnswer6 = 'Germany';
const wrongAnswer7 = 'Rubber';
const wrongAnswer8 = 'Plastic';
const wrongAnswer9 = 'Steel';
const wrongAnswer10 = 'English words "leg on" ';
const wrongAnswer11 = 'Latin words "leg godt"';
const wrongAnswer12 = 'Spanish word "lechuga"';
const wrongAnswer13 = '1957';
const wrongAnswer14 = '1971';
const wrongAnswer15 = '1988';
const wrongAnswer16 = 'United States';
const wrongAnswer17 = 'Germany';
const wrongAnswer18 = 'Netherlands';
const wrongAnswer19 = 'doors';
const wrongAnswer20 = 'mini-figure hair';
const wrongAnswer21 = 'female mini-figure hair';
const wrongAnswer22 = '$500 million';
const wrongAnswer23 = '$2.7 billion';
const wrongAnswer24 = '$22.3 billion';
const wrongAnswer25 = 'Fantastic Legoland';
const wrongAnswer26 = 'Legoland Adventure';
const wrongAnswer27 = 'Legoland USA';
const wrongAnswer28 = 'Godtfred Kirk Lomp';
const wrongAnswer29 = 'Niels B.  Svord';
const wrongAnswer30 = 'Kjeld Kirk Kristiansen';

const rightAnswers = ['Denmark', 'Wood', 'Danish words "leg godt"', '1978'];
const wrongAnswers = [
	// wrongAnswer1,
	// wrongAnswer2,
	// wrongAnswer3,
	wrongAnswer4,
	wrongAnswer5,
	wrongAnswer6,
	wrongAnswer7,
	wrongAnswer8,
	wrongAnswer9,
	wrongAnswer10,
	wrongAnswer11,
	wrongAnswer12,
	wrongAnswer13,
	wrongAnswer14,
	wrongAnswer15,
];
//add event listener to all buttons

//if the inner text in the button shows the correct answer then that button turns green, rest of them turn red
const questionHolder = document.querySelector('p');
questionHolder.innerText = `Question 1: ${questionOne}`;
const buttonOne = document.querySelector('.answer1');
const buttonTwo = document.querySelector('.answer2');
const buttonThree = document.querySelector('.answer3');
const buttonFour = document.querySelector('.answer4');

const body = document.querySelector('body');

body.addEventListener('click', handleButtonClick1);
buttonOne.innerText = '1912';
buttonTwo.innerText = '1932';
buttonThree.innerText = '1976';
buttonFour.innerText = '1951';

const buttonContainer = document.querySelector('.button-container');
const score = document.querySelector('.score');
let playerScore = 0;

playerScore += 0;
score.innerText = `Score: ${playerScore}`;

let questions = [
	{
		question: 'When was Lego founded?',
		answer: '1932',
	},
	{
		question: "In which country are Lego's corporate headquarters located?",
		answer: 'Denmark',
	},
	{
		question: 'What were the first toys produced by Lego made out of?',
		answer: 'Wood',
	},
	{
		question: "How did Lego get it's name?",
		answer: 'Danish words "leg godt"',
	},
	{
		question: 'What year was the first mini figure made?',
		answer: '1978',
	},
	{
		question: 'What country opened the first Legoland park outside of Denmark?',
		answer: 'England',
	},
	{
		question: '1961 was the first year that you could buy which Lego element?',
		answer: 'wheels',
	},
	{
		question: 'What is the Lego company worth?',
		answer: '$14.6 billion',
	},
	{
		question: 'What is the official name of the Legoland park in California?',
		answer: 'Legoland California',
	},
	{
		question: 'Who is the founder of Lego?',
		answer: 'Ole Kirk Christiansen',
	},
];

//Each function checks to make sure the correct answer was clicked then programs the next question and answers. It also sets up the next question and answers even if the wrong button is clicked however it does not add a point to the player's score.
//QUESTION 1
function handleButtonClick1() {
	if (event.target.classList.contains('answer-button')) {
		if (event.target.innerText === questions[0].answer) {
			playerScore += 1;
			score.innerText = `Score: ${playerScore}`;
			questionHolder.innerText = `Question 2: ${questions[1].question}`;
			buttonOne.innerText = questions[1].answer;
			buttonTwo.innerText = wrongAnswer4;
			buttonThree.innerText = wrongAnswer5;
			buttonFour.innerText = wrongAnswer6;
		} else {
			questionHolder.innerText = `Question 2: ${questions[1].question}`;
			buttonOne.innerText = questions[1].answer;
			buttonTwo.innerText = wrongAnswer4;
			buttonThree.innerText = wrongAnswer5;
			buttonFour.innerText = wrongAnswer6;
		}
	}
	body.removeEventListener('click', handleButtonClick1);
	body.addEventListener('click', handleButtonClick2);
}

//QUESTION 2
function handleButtonClick2() {
	if (event.target.classList.contains('answer-button')) {
		if (event.target.innerText === questions[1].answer) {
			playerScore += 1;
			score.innerText = `Score: ${playerScore}`;
			questionHolder.innerText = `Question 3: ${questions[2].question}`;
			buttonOne.innerText = wrongAnswer7;
			buttonTwo.innerText = questions[2].answer;
			buttonThree.innerText = wrongAnswer8;
			buttonFour.innerText = wrongAnswer9;
		} else {
			questionHolder.innerText = `Question 3: ${questions[2].question}`;
			buttonOne.innerText = wrongAnswer7;
			buttonTwo.innerText = questions[2].answer;
			buttonThree.innerText = wrongAnswer8;
			buttonFour.innerText = wrongAnswer9;
		}
	}
	body.removeEventListener('click', handleButtonClick2);
	body.addEventListener('click', handleButtonClick3);
}

//QUESTION 3
function handleButtonClick3() {
	if (event.target.classList.contains('answer-button')) {
		if (event.target.innerText === questions[2].answer) {
			playerScore += 1;
			score.innerText = `Score: ${playerScore}`;
			questionHolder.innerText = `Question 4: ${questions[3].question}`;
			buttonOne.innerText = wrongAnswer10;
			buttonTwo.innerText = wrongAnswer11;
			buttonThree.innerText = wrongAnswer12;
			buttonFour.innerText = questions[3].answer;
		} else {
			questionHolder.innerText = `Question 4: ${questions[3].question}`;
			buttonOne.innerText = wrongAnswer10;
			buttonTwo.innerText = wrongAnswer11;
			buttonThree.innerText = wrongAnswer12;
			buttonFour.innerText = questions[3].answer;
		}
	}
	body.removeEventListener('click', handleButtonClick3);
	body.addEventListener('click', handleButtonClick4);
}

//QUESTION 4
function handleButtonClick4() {
	if (event.target.classList.contains('answer-button')) {
		if (event.target.innerText === questions[3].answer) {
			playerScore += 1;
			score.innerText = `Score: ${playerScore}`;
			questionHolder.innerText = `Question 5: ${questions[4].question}`;
			buttonOne.innerText = wrongAnswer13;
			buttonTwo.innerText = questions[4].answer;
			buttonThree.innerText = wrongAnswer14;
			buttonFour.innerText = wrongAnswer15;
		} else {
			questionHolder.innerText = `Question 5: ${questions[4].question}`;
			buttonOne.innerText = wrongAnswer13;
			buttonTwo.innerText = questions[4].answer;
			buttonThree.innerText = wrongAnswer14;
			buttonFour.innerText = wrongAnswer15;
		}
	}
	body.removeEventListener('click', handleButtonClick4);
	body.addEventListener('click', handleButtonClick5);
}

//QUESTION 5
function handleButtonClick5() {
	if (event.target.classList.contains('answer-button')) {
		if (event.target.innerText === questions[4].answer) {
			playerScore += 1;
			score.innerText = `Score: ${playerScore}`;
			questionHolder.innerText = `Question 6: ${questions[5].question}`;
			buttonOne.innerText = wrongAnswer16;
			buttonTwo.innerText = questions[5].answer;
			buttonThree.innerText = wrongAnswer17;
			buttonFour.innerText = wrongAnswer18;
		} else {
			questionHolder.innerText = `Question 6: ${questions[5].question}`;
			buttonOne.innerText = wrongAnswer16;
			buttonTwo.innerText = questions[5].answer;
			buttonThree.innerText = wrongAnswer17;
			buttonFour.innerText = wrongAnswer18;
		}
	}
	body.removeEventListener('click', handleButtonClick5);
	body.addEventListener('click', handleButtonClick6);
}

//QUESTION 6

function handleButtonClick6() {
	if (event.target.classList.contains('answer-button')) {
		if (event.target.innerText === questions[5].answer) {
			playerScore += 1;
			score.innerText = `Score: ${playerScore}`;
			questionHolder.innerText = `Question 7: ${questions[6].question}`;
			buttonOne.innerText = questions[6].answer;
			buttonTwo.innerText = wrongAnswer19;
			buttonThree.innerText = wrongAnswer20;
			buttonFour.innerText = wrongAnswer21;
		} else {
			questionHolder.innerText = `Question 7: ${questions[6].question}`;
			buttonOne.innerText = questions[6].answer;
			buttonTwo.innerText = wrongAnswer19;
			buttonThree.innerText = wrongAnswer20;
			buttonFour.innerText = wrongAnswer21;
		}
	}
	body.removeEventListener('click', handleButtonClick6);
	body.addEventListener('click', handleButtonClick7);
}

//QUESTION 7

function handleButtonClick7() {
	if (event.target.classList.contains('answer-button')) {
		if (event.target.innerText === questions[6].answer) {
			playerScore += 1;
			score.innerText = `Score: ${playerScore}`;
			questionHolder.innerText = `Question 8: ${questions[7].question}`;
			buttonOne.innerText = wrongAnswer22;
			buttonTwo.innerText = wrongAnswer23;
			buttonThree.innerText = wrongAnswer24;
			buttonFour.innerText = questions[7].answer;
		} else {
			questionHolder.innerText = `Question 8: ${questions[7].question}`;
			buttonOne.innerText = wrongAnswer22;
			buttonTwo.innerText = wrongAnswer23;
			buttonThree.innerText = wrongAnswer24;
			buttonFour.innerText = questions[7].answer;
		}
	}
	body.removeEventListener('click', handleButtonClick7);
	body.addEventListener('click', handleButtonClick8);
}

//QUESTION 8

function handleButtonClick8() {
	if (event.target.classList.contains('answer-button')) {
		if (event.target.innerText === questions[7].answer) {
			playerScore += 1;
			score.innerText = `Score: ${playerScore}`;
			questionHolder.innerText = `Question 9: ${questions[8].question}`;
			buttonOne.innerText = wrongAnswer25;
			buttonTwo.innerText = wrongAnswer26;
			buttonThree.innerText = questions[8].answer;
			buttonFour.innerText = wrongAnswer27;
		} else {
			questionHolder.innerText = `Question 9: ${questions[8].question}`;
			buttonOne.innerText = wrongAnswer25;
			buttonTwo.innerText = wrongAnswer26;
			buttonThree.innerText = questions[8].answer;
			buttonFour.innerText = wrongAnswer27;
		}
	}
	body.removeEventListener('click', handleButtonClick8);
	body.addEventListener('click', handleButtonClick9);
}

//QUESTION 9

function handleButtonClick9() {
	if (event.target.classList.contains('answer-button')) {
		if (event.target.innerText === questions[8].answer) {
			playerScore += 1;
			score.innerText = `Score: ${playerScore}`;
			questionHolder.innerText = `Question 10: ${questions[9].question}`;
			buttonOne.innerText = wrongAnswer28;
			buttonTwo.innerText = questions[9].answer;
			buttonThree.innerText = wrongAnswer29;
			buttonFour.innerText = wrongAnswer30;
		} else {
			questionHolder.innerText = `Question 10: ${questions[9].question}`;
			buttonOne.innerText = wrongAnswer28;
			buttonTwo.innerText = questions[9].answer;
			buttonThree.innerText = wrongAnswer29;
			buttonFour.innerText = wrongAnswer30;
		}
	}
	body.removeEventListener('click', handleButtonClick9);
	body.addEventListener('click', handleButtonClick10);
}

//QUESTION 10

function handleButtonClick10() {
	if (event.target.classList.contains('answer-button')) {
		if (event.target.innerText === questions[9].answer) {
			playerScore += 1;
			let endScore = document.querySelector('.end-score');
			endScore.innerText = `Final Score: ${playerScore}/10`;
			let endScreenResult = document.querySelector('.end-screen-text');
			endScreenResult.style.display = 'block';
			score.style.display = 'none';
			buttonContainer.style.display = 'none';
			questionHolder.style.display = 'none';
		} else {
			let endScore = document.querySelector('.end-score');
			endScore.innerText = `Final Score: ${playerScore}/10`;
			let endScreenResult = document.querySelector('.end-screen-text');
			endScreenResult.style.display = 'block';
			score.style.display = 'none';
			buttonContainer.style.display = 'none';
			questionHolder.style.display = 'none';
		}
	}
}
