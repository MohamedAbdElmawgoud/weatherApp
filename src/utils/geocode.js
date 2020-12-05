const request = require('request')


// Geocoding
// Address -> Lat/Long -> Weather

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=pk.eyJ1IjoiZ29kYTk4IiwiYSI6ImNrZmw3bm13MjBvZzgyd3Ftc2E2bDA3Y2EifQ.bWhzD1EwVhGA7cmPtMjjZA'

    request({ url, json: true }, (error, { body }) => {
      if(error){
        console.log('unable to connect to Map api service', undefined)
    
    } else if (body.features.length === 0) {
        console.log('unable to find latitude and longitude', undefined)
    }
    else{
        callback(undefined, {
            latitude: body.features[0].center[1],
            longitude: body.features[0].center[0],
            location: body.features[0].place_name
        })
        // console.log(latitude, longitude)
    }
    })
}

module.exports = geocode