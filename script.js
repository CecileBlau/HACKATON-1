//when the submit button is clicked:
//retrieve the buttonLocation
let formLocation = document.forms[0]

//add an event listener to the buttonLocation
formLocation.addEventListener("submit", submitForm)


//Array with users inputs
let arrayInputsUser = [];

//create the submitFunction
function submitForm(e){
	e.preventDefault();
	console.log(e)
	console.log(e.target)
	console.log(e.target.elements)

	let inputExpense = e.target.elements.expense.value
	let inputCost = e.target.elements.cost.value
	let inputDate = e.target.elements.date.value
	let inputType = e.target.elements.type.value


	if (inputCost<0){
		
		e.preventDefault()
	}


	console.log(inputExpense, inputCost, inputDate)
	//here is the object that will be filled with the users inputs value
	let inputsUser = {
		expense: inputExpense,
		cost: inputCost,
		date: inputDate,
		type: inputType

	}

	//with the push method, it will send all of the inputsUser (objects) to the array
	arrayInputsUser.push(inputsUser);
	console.log(arrayInputsUser)


	displayElements()
	amountOfParagraphs()
	totalAmountOfCost()
	
}




let newElem= " "

function displayElements () {
	for (let elem of arrayInputsUser){

		let lengthOfArrayMinusOne= arrayInputsUser.length-1
		console.log(lengthOfArrayMinusOne)
		newElem = arrayInputsUser[lengthOfArrayMinusOne]
		console.log(newElem)
		return
	}

	
}

function amountOfParagraphs(){	
	for (let i=0; i<1; i++){
		let paragraph = document.createElement("p");
		paragraph.classList.add("paragraph")
		let text = document.createTextNode(`You spent on  ${newElem.expense} ${newElem.cost} NIS on ${newElem.date} | ${newElem.type}`);
		paragraph.appendChild(text);
		containerLocation.appendChild(paragraph);	
	}
}

locationTotalAmount = document.getElementById("totalAmount")
let counter = 0
function totalAmountOfCost(){
	for(let j=0; j<1;j++){
		
		counter=counter + parseInt(newElem.cost)	
	}

	while (locationTotalAmount.firstChild) {
		locationTotalAmount.removeChild(locationTotalAmount.firstChild);
	}
	let paragraphTwo = document.createElement("p");
	let textTwo = document.createTextNode(`Your total amount is: ${counter} NIS`);
	paragraphTwo.appendChild(textTwo);
	locationTotalAmount.appendChild(paragraphTwo);	
}




//Since the array is a collection, we need to separete each indivual element 
//to be able to display it to the user.
//but first within the for of loop, it will create a li for each element 
//and a div that containes the lis







//append the elements of the array in the container div
//find the containerLocation
let containerLocation = document.getElementById("container")

