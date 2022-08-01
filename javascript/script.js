const API_URL = "https://restcountries.com/v3.1/all";

/*function loadCountriesData() {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "https://restcountries.com/v3.1/all", false);
  xhr.send();
  var data = JSON.parse(xhr.responseText); //data is now a javascript object full of the API data
  // extractCurriencies(data);
  extractPopulations(data);
  // printTheFollowingDetails(data);
  console.log("CoutriesData", data);
}*/

function getCountriesData() {
  fetch(API_URL)
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      DATA = res;
      console.log('JSON', DATA);
      printTheFollowingDetails(DATA);
      extractPopulations(DATA);
      extractCurriencies(DATA);
    });
}

// Print details , name , capital , flag
function printTheFollowingDetails(data) {
  data.forEach((element) => {
    if (element.name) {
      console.log("Name-Details", element.name);
    }
    if (element.flag) {
      console.log("Flag", element.flag);
    }
    if (element.capital) {
      console.log("Capital", element.capital[0]);
    }
  });
}

// ExtractPopulations
function extractPopulations(data) {
  let overallPopulation = data
    .map((data) => data.population)
    .reduce((preVal, curVal) => preVal + curVal);
  console.log("OverallPopulation", overallPopulation);
  return overallPopulation;
}

// ExtractCurrency
function extractCurriencies(data) {
  data.map((data) => {
    if(data.currencies.USD) {
      let extracted = data.currencies.USD;
      console.log(extracted)
    }
  })
}
// loadCountriesData();
getCountriesData();
