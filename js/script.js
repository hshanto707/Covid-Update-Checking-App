const countryName = document.getElementById("country-name");
const input = document.getElementById("user-input");
const flag = document.getElementById("flag");
const activeCases = document.getElementById("active-cases");
const totalCases = document.getElementById("total-cases");
const todayCases = document.getElementById("today-cases");
const totalDeath = document.getElementById("total-death");
const todayDeath = document.getElementById("today-death");
const totalRecovery = document.getElementById("total-recovery");
const todayRecovery = document.getElementById("today-recovery");
const criticalCases = document.getElementById("critical-cases");
const totalTest = document.getElementById("total-test");
// const = document.getElementById('');

const loadCovidData = () => {
  const url = `https://corona.lmao.ninja/v2/countries/${input.value}`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => displayWeatherData(data));
};

const displayWeatherData = (data) => {
  if (data.message == "Country not found or doesn't have any cases") {
    document.getElementById("error-message").style.display = "block";
    document.getElementById("main-display").style.display = "none";
    input.value = "";
  } else {
    document.getElementById("error-message").style.display = "none";
    document.getElementById("main-display").style.display = "block";
    countryName.innerText = data.country;
    flag.src = data.countryInfo.flag;

    activeCases.innerText = data.active;
    totalCases.innerText = data.cases;
    todayCases.innerText = data.todayCases;
    totalDeath.innerText = data.deaths;
    todayDeath.innerText = data.todayDeaths;
    totalRecovery.innerText = data.recovered;
    todayRecovery.innerText = data.todayRecovered;
    criticalCases.innerText = data.critical;
    totalTest.innerText = data.tests;

    input.value = "";
  }
};
