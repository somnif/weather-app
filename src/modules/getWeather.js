const getWeather = async (location) => {
  try {
    const response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=metric&include=current&key=43NABXETQAF4KP5T3HLKMFUNU&contentType=json`,
      {
        method: "GET",
        mode: "cors",
      },
    );
    const results = await response.json();
    const { resolvedAddress, currentConditions } = results;
    return { resolvedAddress, currentConditions };
  } catch (err) {
    console.log(err);
  }
};

export default getWeather;
