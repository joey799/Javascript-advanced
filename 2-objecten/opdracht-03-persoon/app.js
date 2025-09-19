// Stap 1

// Maak een persoon object waar je allemaal eigenschappen van een persoon in kunt opslaan en tonen op het scherm.

// Het object moet de volgende properties bevatten:
const person = {
    name: 'Joey',
    age: 20,
    birthDate: '2005-03-31',
    sex: 'male',
    alive: true,
    hobbies: ['reading', 'traveling', 'swimming', 'gaming'],
    // Een method (functie) die de naam moet veranderen. De naam moet je via de parameters kunnen meegeven.
    rename: function(newName) {
        this.name = newName;
    },
    // Een method (functie) die het ‘in leven’ property kan veranderen.
    changeAliveStatus: function() {
        this.alive = !this.alive;
        return this.alive;
    },
    // Een method (functie) die een extra hobby toevoegt aan de array. Een hobby moet je via de parameters kunnen meegeven.
    addHobby: function(newHobby) {
        this.hobbies.push(newHobby);
        return this.hobbies;
    }
};

// Toon elke property op het scherm door het in een p-tag te plaatsen. Hiervoor gebruik je de div-tag van de vorige opdracht.
function showPerson() {
    document.getElementById("output").innerHTML =
        `<p>Naam: ${person.name}</p>
        <p>Leeftijd: ${person.age}</p>
        <p>Geboortedatum: ${person.birthDate}</p>
        <p>Geslacht: ${person.sex}</p>
        <p>In leven: ${person.alive}</p>
        <p>Hobby's: ${person.hobbies.join(", ")}</p>`;  
}
// Toon originele gegevens
showPerson();

// Pas de gegevens aan met de methods
console.log(person.rename('Ricky'));
console.log(person.changeAliveStatus());
console.log(person.addHobby('cooking'));

// Toon de wijzigingen op het scherm
showPerson();
// Log het object naar de console
console.log(person);
