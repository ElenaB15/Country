fetch("https://restcountries.com/v3.1/all")
  .then((response) => response.json())
  .then((data) => editCountry(data));
var list = "";
function editCountry(items) {
  for (var i = 0; i < items.length; i++) {
    //  for (var key in items[i].languages) {
    //console.log(`${key}: ${items[i].languages[key]}`);
    for (var key2 in items[i].currencies) {
      // console.log(items[i].currencies[key2].name);

      list += `
      <div class="country">
      <img src="${items[i].flags.png}" alt="Flag" class="flag"/>
      <div class="des">
    <h3 class="country-name"> ${items[i].name.official}</h3>
    <ul class="detail-list">
    <li><strong>Capital:</strong> ${items[i].capital}</li>
    <li><strong>Subregion:</strong>${items[i].subregion}</li>
   <li><strong>Timezones:</strong>${items[i].timezones}</li>
    <li><strong>Population:</strong> ${items[i].population}</li>
    <li><strong>Currency:</strong> ${items[i].currencies[key2].name} - <strong>${items[i].currencies[key2].symbol}</strong></li>
</ul> 
</div></div>`;
      //  <p>Languages: ${key} + ${items[i].languages[key]}</p>
      // console.log(items[2].flags.png);
    }
    // }
  }

  document.getElementById("flex-container").innerHTML = list;
}
function changeMode() {
  var btn = document.getElementById(btn);
  document.body.classList.toggle("dark");
}
