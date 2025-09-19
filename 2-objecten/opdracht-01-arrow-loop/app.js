// Je gaat even oefenen met het gebruiken van een arrow function en de for/of loop. 
 
// Maak een array genaamd 'marvels' en plaats hier 4 Marvel films in.
let marvels = ['Iron man', 'Thor', 'Captain America', 'Black Panther'];
// Maak een arrow function genaamd 'addMarvel'
let addMarvel = () => {
    marvels.push('Doctor Strange');
}
// In je functie voeg je een nieuwe Marvel film toe zonder dit zelf in de bovenstaande array toe te voegen
addMarvel();
// Roep de functie op (het klopt dat je nog niets ziet)
// Loop met een for/of loop door de array en toon alle items in de array in je console
for (let Marvel of marvels) {
    console.log(Marvel += marvels +   1);
}