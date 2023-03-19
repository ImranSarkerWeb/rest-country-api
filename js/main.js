//https://restcountries.com/v3.1/all

const getCountries = () => {
  fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then((data) => displayCountries(data));
};

const displayCountries = (countries) => {
  console.log(countries);
  const allCountriesHtml = countries.map((country) => createUi(country));
  const countryDiv = document.getElementById("countries");
  countryDiv.innerHTML = allCountriesHtml.join(" ");
};

const createUi = (country) => {
  return `
    <div class="country">
        <h2>${country.name.common}</h2>
        <img src="${country.flags.png}"/>
    </div>
    `;
};

getCountries();
