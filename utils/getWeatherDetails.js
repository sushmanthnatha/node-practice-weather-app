const request = require('postman-request')

const getWeatherDetails = ( searchTerm, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=7cbba7d0dacc63824c6b0d2dc2f0cc7a&query='+searchTerm+'&units=m'    
       request( {url : url, json: true}, (error, response) => {
           if(error){
               callback('Unable to connect to weather forecast', undefined)
           }else if(response.body.error){
               callback(response.body.error.info, undefined)
           }else{
               const data = response.body
               callback(undefined, {
                   location: data.location.name,
                   actualTemp : data.current.temperature,
                   feelsLikeTemp: data.current.feelslike
               })
           }
       })
   }
   
   module.exports = getWeatherDetails