const API_KEY = "";

//dummy function
async function getCoordsForAddress(address) {
  /*
   I don't want use any Geocoding API to Convert an Address Into Coordinates, for this backend.
  maybe try use this: https://opencagedata.com/api#quickstart  (it's free)
  */
  return { lat: 48.1599, lng: 11.5761 };
}

module.exports = getCoordsForAddress;