const apiUrl = "https://api.countrystatecity.in/v1/";
const apiKey = "U1k4OVVDUFpnMEtHNWlzQUo5V2phakUwT0J2VWNOa3ZrTXQ1SHhFSg=="; // replace with your own API key
// Fetch countries
fetch(apiUrl + "countries", {
headers: {
"X-CSCAPI-KEY": apiKey,
},
})
.then((response) => response.json())
.then((data) => {
const countrySelect = document.getElementById("country");
data.forEach((country) => {
const option = document.createElement("option");
option.text = country.name;
option.value = country.iso2;
countrySelect.add(option);
});
countrySelect.addEventListener("change", (event) => {
const countryCode = event.target.value;
fetch(apiUrl + "states/" + countryCode, {
headers: {
"X-CSCAPI-KEY": apiKey,
},
})
.then((response) => response.json())
.then((data) => {
const stateSelect = document.getElementById("state");
stateSelect.innerHTML = "";
data.forEach((state) => {
const option = document.createElement("option");
option.text = state.name;
option.value = state.id;
stateSelect.add(option);
});
stateSelect.addEventListener("change", (event) => {
const stateId = event.target.value;
fetch(apiUrl + "cities/" + stateId, {
headers: {
"X-CSCAPI-KEY": apiKey,
},
})
.then((response) => response.json())
.then((data) => {
const citySelect = document.getElementById("city");
citySelect.innerHTML = "";
data.forEach((city) => {
const option = document.createElement("option");
option.text = city.name;
option.value = city.id;
citySelect.add(option);
});
})
.catch((error) => console.error(error));
});
})
.catch((error) => console.error(error));
});
})
.catch((error) => console.error(error));