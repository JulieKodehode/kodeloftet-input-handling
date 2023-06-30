// Først hente ut elementet vi ønskere 
const userFormInput = document.getElementById("user-input")

// Legger til en funskjon som kjører ved en hendelse
userFormInput.addEventListener(
  "submit",
  handleSubmit
)

// Hendelses funksjonen
/**
 * 
 * @param {SubmitEvent} event 
 */
function handleSubmit(event) {
  // Siden det er form element
  // må forhindre at siden lastes inn på nytt
  event.preventDefault()

  // Finner alle element
  const formElement = event.target
  const userInput = formElement[0]
  const multiply = formElement[2]
  const addition = formElement[3]

  let operation;
  if (multiply.checked) {
    operation = "multiply"
  } else if (addition.checked) {
    operation = "addition"
  }

  // Send innhold videre til funksjonen vår
  setDisplayContent(userInput.value, operation)
}


// Først hente ut elementet vi ønskere 
const displayElement = document.getElementById("display-text")

// Vi må skrive til elementet
/**
 * Setter display til det som blir gitt inn
 * 
 * @param {number} value
 */
function setDisplayContent(value, operation) {
  console.log(operation)
  // Gjør logikk på inputen her
  let newValue = value / 3

  // Oppdater HTML her
  displayElement.textContent = newValue.toFixed(0)
}