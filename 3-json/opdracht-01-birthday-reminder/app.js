
//Je gaat een birthday reminder applicatie maken zoals hieronder op de afbeelding wordt getoond.

//Maak een json-bestand met zes verschillende objecten. Elk object heeft een naam, leeftijd en afbeelding van een persoon.
//Toon alle data uit je json-bestand op het scherm (zie afbeelding)
//Het getal ‘5’ uit de titel is niet handmatig ingevoerd, maar je telt de aantal objecten uit je json-bestand en dat toon je op het scherm
//Als je op de ‘clear all’ knop klikt moet alle data van het scherm verwijderd worden (niet uit het json-bestand verwijderen)
//Style het zoals op het voorbeeld wordt weergeven (kleur mag afwijken)
// Verwijzingen naar DOM-elementen
const remindersContainer = document.getElementById('reminders');
const clearButton = document.getElementById('clear-all');
const headerTitle = document.querySelector('.header h1');

// Functie om de verjaardagsherinneringen weer te geven
function displayBirthdays(people) {
  let out = '';
  
  // Loop door elk persoon object in de array
  for (let person of people) {
    out += `
      <div class="person">
        <img src="${person.image}" alt="${person.name}" />
        <div class="info">
          <h2>${person.name}</h2>
          <p>${person.age} years</p>
        </div>
      </div>
    `;
  }
  
  remindersContainer.innerHTML = out;
  
  // Titel bijwerken met aantal personen
  headerTitle.innerText = `Birthday Reminder (${people.length})`;
}

// Functie om alles te verwijderen
function clearAll() {
  remindersContainer.innerHTML = '';
  headerTitle.innerText = 'Birthday Reminder (0)';
}

// Event listener voor de clear-all knop
clearButton.addEventListener('click', clearAll);

// Data ophalen met fetch()
fetch('birthday.json')
  .then((response) => {
    // Controleren of het bestand correct is geladen
    if (!response.ok) {
      throw new Error('Bestand niet gevonden');
    }
    return response.json();
  })
  .then((data) => {
    // Data is geladen toon de verjaardagen
    displayBirthdays(data);
  })
  .catch((error) => {
    // Foutafhandeling
    console.error('Er ging iets mis:', error);
    remindersContainer.innerHTML = '<p class="error">Data kon niet geladen worden.</p>';
    headerTitle.innerText = 'Birthday Reminder (0)';
  });

// Laad indicator weergeven tijdens het laden
remindersContainer.innerHTML = '<p class="loading">Loading birthdays...</p>';