// Opdracht 4.1: Simpele Opslag
console.log('🚀 Opdracht 4.1: Simpele Opslag');

function slaOpNaam() {
    console.log('slaOpNaam() aangeroepen');
    
    // TODO: Haal naam uit input veld
    const naam = document.getElementById('naam-input').value;
    
    // TODO: Check of naam niet leeg is
    if (naam === '') {
        alert('Voer eerst een naam in!');
        return;
    }
    
    // TODO: Sla naam op in localStorage
    localStorage.setItem('opgeslagenNaam', naam);
    const opgeslagenNaam = localStorage.getItem('opgeslagenNaam');
    console.log('Naam opgeslagen in localStorage:', opgeslagenNaam);
    
    // TODO: Toon welkomstbericht
    toonWelkom();
    
    // Maak input leeg
    document.getElementById('naam-input').value = '';
}

function toonWelkom() {
    // TODO: Haal naam op uit localStorage
    const opgeslagenNaam = localStorage.getItem('opgeslagenNaam');
    
    const welkomElement = document.getElementById('welkom-bericht');
    
    // TODO: Toon juiste bericht
    if (opgeslagenNaam) {
        welkomElement.textContent = `Welkom terug, ${opgeslagenNaam}!`;
    } else {
        welkomElement.textContent = 'Geen naam opgeslagen.';



        console.log('Geen naam gevonden in localStorage');
    }
}

function wisNaam() {
    // TODO: Verwijder naam uit localStorage
    localStorage.removeItem('opgeslagenNaam');
    console.log('Naam verwijderd uit localStorage');
    
    toonWelkom();
}

// TODO: Roep toonWelkom() aan bij pagina laden
window.onload = toonWelkom;