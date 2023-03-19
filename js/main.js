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

//destructuring option 2
const createUi = ({ name, flags, area }) => {
  //you must have to use curly braces when use object destructuring
  //   console.log(name, flags, area);
  return `
    <div class="country">
        <h2>${name.common}</h2>
        <p>Area: ${area}</p>
        <img src="${flags.png}"/>
    </div>
    `;
};

//destructuring option 1
// const createUi = (country) => {
//   const { name, flags } = country;

//   return `
//     <div class="country">
//         <h2>${name.common}</h2>
//         <img src="${flags.png}"/>
//     </div>
//     `;
// };

//without destructring
// const createUi = (country) => {
//   return `
//     <div class="country">
//         <h2>${country.name.common}</h2>
//         <img src="${country.flags.png}"/>
//     </div>
//     `;
// };

getCountries();
