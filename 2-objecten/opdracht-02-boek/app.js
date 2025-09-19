// Maak een boek object waar je allemaal gegevens van een boek in kunt opslaan en tonen op het scherm.

// Het object moet de volgende properties bevatten:
//     Titel: de titel van het boek (string)
//     Auteur: de auteur van het boek (string)
//     Uitgeverij: de uitgeverij van het boek (string)
//     Jaar: het jaar van publicatie van het boek (number)
//     Verkocht: aantal verkochten exemplaren (number)
//     Prijs: prijs van het boek (string)

const book = {
    title: 'The Great Gatsby',
    author: 'Jeff Kinney',
    publisher: 'De fontein',
    year: 2009,
    sold: 25000000,
    price: '$10.99'
}

console.log(book);

// Toon elke property op het scherm door het in een p-tag te plaatsen. Hiervoor maak je in je HTML een div-tag aan met de class 'output'.
document.getElementById("output").innerHTML =
    `<p>Titel: ${book.title}</p>
    <p>Auteur: ${book.author}</p>
    <p>Uitgeverij: ${book.publisher}</p>
    <p>Jaar: ${book.year}</p>
    <p>Verkocht: ${book.sold}</p>
    <p>Prijs: ${book.price}</p>`;


// In de theorie staat uitgelegd hoe je dit moet doen.
 


// Let op: in de code conventions staat dat je de code in het Engels moet schrijven!
