fetch("https://restcountries.com/v3.1/all")
  .then((response) => response.json())
  .then((data) => editCountry(data));
var icon = document.getElementById("btn");
icon.onclick = function () {
  document.body.classList.toggle("dark-theme");
};

var list = "";
function editCountry(items) {
  for (var i = 0; i < items.length; i++) {
    //console.log(`${key}: ${items[i].languages[key]}`);

    // console.log(items[i].currencies[key2].name);

    list += `
      <div class="country">
      <img src="${items[i].flags.png}" alt="Flag" class="flag"/>
    <h3 class="country-name"> ${items[i].name.official}</h3>
    <ul class="detail-list">
    <li><strong>Capital:</strong> ${items[i].capital}</li>
    <li><strong>Subregion:</strong> ${items[i].subregion}</li>
    <li class="new"><strong>Timezones:</strong> ${items[i].timezones}</li>
    <li><strong>Population:</strong> ${items[i].population}</li>
    `;
    for (var key in items[i].languages) {
      list += `<li><strong>Languages:</strong> ${items[i].languages[key]}</li>`;
    }
    for (var key2 in items[i].currencies) {
      list += `
      <li><strong>Currency:</strong> ${items[i].currencies[key2].name} - <strong>${items[i].currencies[key2].symbol}</strong></li>
 `;
    }
    list += `</ul>
    </div>`;
  }
  //  <p>Languages: ${key} + ${items[i].languages[key]}</p>
  // console.log(items[2].flags.png);

  //

  document.getElementById("flex-container").innerHTML = list;
}
