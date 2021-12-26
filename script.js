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
		// let paragraph = document.createElement("p");
		// paragraph.classList.add("paragraph")
		// let text = document.createTextNode(`You spent on  ${newElem.expense} ${newElem.cost} NIS on ${newElem.date} | ${newElem.type}`);
		// paragraph.appendChild(text);
		// containerLocation.appendChild(paragraph);	

		// Find a <table> element with id="myTable":
		let table = document.getElementById("expense_table");

		// Create an empty <tr> element and add it to the 1st position of the table:
		let row = table.insertRow(-1);

		// Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
		let cell1 = row.insertCell(0);
		let cell2 = row.insertCell(1);
		let cell3 = row.insertCell(2);
		let cell4 = row.insertCell(3);

		// Add some text to the new cells:
		cell1.innerHTML = newElem.expense;
		cell2.innerHTML = newElem.cost;
		cell3.innerHTML = newElem.date;
		cell4.innerHTML = newElem.type;
	}
}
locationTotalAmount = document.getElementById("totalAmount").children[1]
let counter = 0
function totalAmountOfCost(){
	for(let j=0; j<1;j++){
		
		counter=counter + parseInt(newElem.cost)	
	}

	while (locationTotalAmount.firstChild) {
		locationTotalAmount.removeChild(locationTotalAmount.firstChild);
	}
	let paragraphTwo = document.createElement("p");
	let textTwo = document.createTextNode(`You have spent -${counter} NIS`);
	paragraphTwo.classList.add("paragraphTwo");
	paragraphTwo.appendChild(textTwo);
	locationTotalAmount.appendChild(paragraphTwo);	

	console.log(`${counter}`)
}



//Since the array is a collection, we need to separete each indivual element 
//to be able to display it to the user.
//but first within the for of loop, it will create a li for each element 
//and a div that containes the lis




//append the elements of the array in the container div
//find the containerLocation
let containerLocation = document.getElementById("container")




//-------------------GOAL SECTION-------------------------//

let setButton = document.getElementById("setButton")
let goalNumber=document.getElementById("goalNumber").value
let month = document.getElementById("month").children
let allMonths = [];
setButton.addEventListener("click", goalFunction)


function goalFunction(){
	let paragraphGoal = document.createElement("p");


	let goalDisplay = document.createTextNode(`Your goal is to spend maximum ${document.getElementById("goalNumber").value} NIS `)
	let goalDisplayOnlyNumber = document.createTextNode(`${document.getElementById("goalNumber").value}`)
	paragraphGoal.appendChild(goalDisplay)
	document.getElementById("displayYourGoal").appendChild(paragraphGoal)


}