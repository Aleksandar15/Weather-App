const request = require("postman-request");
// require("dotenv").config();
require("dotenv").config({ path: "./config/dev.env" });
//^ this "PATH" is Absolute path => starting from root directory
// & NOT relative path (do NOT create "config" folder inside /utils/)

const geocode = (address, callback) => {
  const geocodeURL = `https://api.mapbox.com/geocoding/v5/mapbox.places/'${encodeURIComponent(
    address
  )}'.json?access_token=${process.env.accessKey_mapBox}&limit=1`;

  request({ url: geocodeURL, json: true }, (error, response) => {
    if (error) {
      callback("Unable to connect to location services :/", undefined);
    } else if (response.body?.features?.length === 0) {
      callback("Unable to find location. Try another search", undefined);
    } else {
      callback(undefined, {
        latitude: response.body?.features[0].center[1],
        longitude: response.body?.features[0].center[0],
        location: response.body?.features[0].place_name,
      });
    }
  });
};

module.exports = geocode;
