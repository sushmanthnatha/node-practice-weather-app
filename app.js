const request = require('postman-request')
const chalk = require('chalk')
const geocode = require('./utils/geocode')
const getWeatherDetails = require('./utils/getWeatherDetails')

// const weather_stack_access_key = '7cbba7d0dacc63824c6b0d2dc2f0cc7a'
// const position_stack_access_key = '587687d5b67c7827d315e836abd107c4'

// const url = 'http://api.weatherstack.com/current?access_key='+ weather_stack_access_key +'&query=Nellore&units=f'
// const url = 'http://api.weatherstack.com/current?access_key='+ weather_stack_access_key +'&query=14.433,79.967&units=m'
// const url2 = 'http://api.positionstack.com/v1/forward?access_key='+ position_stack_access_key +'&query=1600 Pennsylvania Ave NW, Washington DC&limit=1'

const address = process.argv[2]

if(!address){
    console.log('Please provide an address')
} else {
    geocode(address, (error, { latitude, longitude, location}={}) => {
        if(error){
           return console.log(error)
        }
       
       getWeatherDetails(latitude + ',' + longitude, (error, forecastData) => {
           if(error){
               return console.log(error)
            }
           console.log(latitude,', ',longitude,', ',location)
           console.log(forecastData)
       
       })
   })
}

// if(!address){
//     console.log('Please provide an address')
// } else {
//     geocode(address, (error, data) => {
//         if(error){
//            return console.log(error)
//         }
       
//        getWeatherDetails(data.latitude + ',' + data.longitude, (error, forecastData) => {
//            if(error){
//                return console.log(error)
//             }
//            console.log(data)
//            console.log(forecastData)
       
//        })
//    })
// }

// getWeatherDetails('14.4386, 79.9759', (error, response) => {
//     console.log(error)
//     console.log(response)

// })
  
// getWeatherDetails('Vijayawa', (error, response) => {
//     console.log(error)
//     console.log(response)
// })
  

// geocode('Hyderabad', (error, response) => {
//     console.log(error)
//     console.log(response)
// })

