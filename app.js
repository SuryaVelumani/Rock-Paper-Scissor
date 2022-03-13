const computerChoiceDisplay = document.getElementById('computer-chioce')
const userChoiceDisplay = document.getElementById('user-chioce')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
let userChoice
let computerChoice
let result

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
	userChoice = e.target.id
	userChoiceDisplay.innerHTML = userChoice
	generateComputerChoice()
	getResult()
}))

function generateComputerChoice(){
	const randomNumber = Math.floor(Math.random()*3)+1 // or possibleChoices.length
	console.log(randomNumber)

	if(randomNumber === 1)
	{
		computerChoice = 'rock'
	}
	if(randomNumber === 2)
	{
		computerChoice = 'paper'
	}
	if(randomNumber === 3)
	{
		computerChoice = 'scissors'
	}
	computerChoiceDisplay.innerHTML = computerChoice
}
function getResult()
{
	if(computerChoice === userChoice)
	{
		result = 'its a draw'
	}
	if(computerChoice === 'rock' && userChoice === 'paper')
	{
		result = 'you win'
	}
	if(computerChoice === 'rock' && userChoice === 'scissors')
	{
		result = 'you lost'
	}
	if(computerChoice === 'paper' && userChoice === 'rock')
	{
		result = 'you lost'
	}
	if(computerChoice === 'paper' && userChoice === 'scissors')
	{
		result = 'you win'
	}
	if(computerChoice === 'scissors' && userChoice === 'rock')
	{
		result = 'you win'
	}
	if(computerChoice === 'scissors' && userChoice === 'paper')
	{
		result = 'you lost'
	}
	resultDisplay.innerHTML = result
}