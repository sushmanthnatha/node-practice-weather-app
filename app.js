
// weather-stack key 7cbba7d0dacc63824c6b0d2dc2f0cc7a


const request = require('postman-request')

const url = 'http://api.weatherstack.com/current?access_key=7cbba7d0dacc63824c6b0d2dc2f0cc7a&query=Hyderabad'

request( { url : url, json : true}, (error, response) => {

    const data = JSON.parse(response.body);
    // console.log(data.current)

    console.log(response.body.current)
})

  