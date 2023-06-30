// Først hente ut elementet vi ønskere 
const userFormInput = document.getElementById("user-input")

// Legger til en funskjon som kjører ved en hendelse
userFormInput.addEventListener(
  "submit",
  (event) => handleSubmit(event)
)

// Hendelses funksjonen
function handleSubmit(event) {
  // Siden det er form element
  // må forhindre at siden lastes inn på nytt
  event.preventDefault()

  // Hente ut den informasjonen vi er interesert i

  // Overordnet form element
  const formElement = event.target
  // Form text input
  const inputText = formElement[0]

  // Sjekk typen til det vi har
  const value = Number(inputText.value)

  // Send innhold videre til funksjonen vår
  setDisplayContent(value)
}


// Først hente ut elementet vi ønskere 
const displayElement = document.getElementById("display-text")

// Vi må skrive til elementet
/**
 * Setter display til det som blir gitt inn
 * 
 * @param {number} value 
 */
function setDisplayContent(value) {
  // Gjør logikk på inputen her
  let newValue = value / 3

  // Oppdater HTML her
  displayElement.textContent = newValue.toFixed(0)
}