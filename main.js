// Først hente ut elementet vi ønsker
const userFormInput = document.getElementById("user-input");
// console.log(userFormInput);

// Legger til en funksjon som kjører ved en hendelse
userFormInput.addEventListener("submit", handleSubmit);

// Hendelsesfunksjonen
/**
 * Dette er funksjonen som blir kjørt når addEventListner lytter til et submit
 * @param {SubmitEvent} event
 */
function handleSubmit(event) {
	// Siden det er form element lastes siden inn på nytt når knappen trykkes på
	// event.preventDefault() kanselerer denne effekten
	event.preventDefault();

	// Finner alle elementene
	// event.target returnerer et HTML-element som ble aktivert av en hendelse.
	// Her har jeg gått inn og brukt ID-navnene, istedenfor object tallet til elementene som Lars-Gunnar demonstrerte med console.dir()
	const formElement = event.target;
	// console.log(formElement);
	const inputValue = formElement.inputValue.value;
	// console.log(inputValue);
	const fromUnit = formElement.fromUnit.value;
	// console.log(fromUnit);
	const toUnit = formElement.toUnit.value;
	// console.log(toUnit);

	let result;

	// Setter opp konverteringen
	if (fromUnit === "meter" && toUnit === "kilometer") {
		result = inputValue / 1000;
	} else if (fromUnit === "kilometer" && toUnit === "meter") {
		result = inputValue * 1000;
	} else {
		result = inputValue;
		console.log("Error: Make sure you have selected to and from properly");
	}

	// Send innhold videre til funksjonen vår
	setDisplayContent(result);
}

// Først hente ut elementet vi ønsker
const displayElement = document.getElementById("display-text");
// console.log(displayElement);

// Vi må skrive til elementet
/**
 * Setter resultatet til å vise på nettsiden våres
 *
 * @param {number} value
 */
function setDisplayContent(result) {
	// Setter opp en ny varabel som tar i mot result fra funksjonen over
	let displayValue = result;
	// console.log(displayValue);

	// Oppdaterer HTML her
	// .toFixed(0) er en metode som fjerner desimaler, tallet er hvor mange desimaler vi ønsker - som er 2
	displayElement.textContent = displayValue.toFixed(2);
}
