fetch('https://fortnite-api.com/v2/cosmetics/new')
  .then(response => response.json())
  .then(data => {

for (let item of data.data.items.br) {
  console.log(data.data.items.br);
  document.body.innerHTML += `
    <div class="item">
      <h2>${item.name}</h2>
      <img src="${item.images.icon}" alt="${item.name}">
      <p>Rarity: ${item.rarity.displayValue}</p>
      <p>Type: ${item.type.displayValue}</p>
    </div>
  `;
}
  

});


    



