// Helper function to render the flag image
function renderFlagImage(country) {
  if (country.flags && country.flags.png) {
    return `<img src="${country.flags.png}" alt="Flag of ${country.name.common}">`;
  }
  return '';
}

fetch('https://restcountries.com/v3.1/all?fields=name,flags')
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    let countriesHTML = '';

    // Loop through each country in the data array
    if (Array.isArray(data)) {
      data.forEach(country => {
        // Log the flag image URL for each country
        console.log(country.flags.png);
        countriesHTML += `
          <div class="country">
              ${renderFlagImage(country)}
          </div>
        `;
      });
      document.body.innerHTML += countriesHTML;
    } else {
      console.error('API did not return an array:', data);
    }
  })
  .catch(error => {
    console.error('Fetch error:', error);
  });








