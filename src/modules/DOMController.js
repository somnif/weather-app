import getWeather from "./getWeather.js";

const DOMController = () => {
  const locationResult = document.getElementById("location-result");
  const weatherResult = document.getElementById("weather-result");
  const searchBar = document.getElementById("location");
  const searchButton = document.getElementById("get-location");

  searchButton.addEventListener("click", (e) => {
    e.preventDefault();
    loadNewWeather();
  });

  const createElement = ({ element, classNames = "", innerText = "" }) => {
    const newElement = document.createElement(element);
    newElement.innerText = innerText;
    newElement.className = classNames;
  };

  const loadNewWeather = async () => {
    locationResult.innerText = "Loading new weather";
    weatherResult.innerText = "Please Wait";
    try {
      const query = searchBar.value;
      const result = await getWeather(query);
      locationResult.innerText = `Searching for weather in ${result.resolvedAddress}`;
      weatherResult.innerText = `The weather there is ${result.currentConditions.conditions}`;
    } catch {
      locationResult.innerText = "This is not the city you are looking for!";
      weatherResult.innerText = "Please try another castle.";
    }
  };
};

export default DOMController;