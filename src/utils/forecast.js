const request = require("postman-request");
// require("dotenv").config();
require("dotenv").config({ path: "./config/dev.env" });
//^ this "PATH" is Absolute path => starting from root directory
// & NOT relative path (do NOT create "config" folder inside /utils/)

const forecast = (latitute, longitude, callback) => {
  const weatherURL = `http://api.weatherstack.com/current?access_key=${process.env.accessKey_weatherStack}&query=${latitute},${longitude}`;

  request({ url: weatherURL, json: true }, (error, response) => {
    if (error) {
      callback("Unable to connect to weather services :/", undefined);
    } else if (response.body?.success === false) {
      callback("Unable to find location.", undefined);
    } else {
      callback(undefined, {
        locationName: response.body.location.name,
        locationRegion: response.body.location.region,
        locationCountry: response.body.location.country,
        temperature: response.body.current.temperature,
        feelsLike: response.body.current.feelslike,
        precip: response.body.current.precip,
        chanceOfRain: response.body.current.humidity,
        chanceOfRain: response.body.current.precip,
        localTime: response.body.location.localtime,
        wind: response.body.current.wind_speed,
        windDir: response.body.current.wind_dir,
        description: response.body.current.weather_descriptions[0],
        lastUpdate: response.body.current.observation_time,
        weatherIcon: response.body.current.weather_icons[0],
      });
    }
  });
};

module.exports = forecast;
