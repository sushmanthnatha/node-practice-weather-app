const request = require('postman-request')

const geocode = (address, callback) => {
    const url = 'http://api.positionstack.com/v1/forward?access_key=587687d5b67c7827d315e836abd107c4&query='+ address +'&limit=1'

    request( { url : url, json : true }, (error, response) => {
        if(error){
            callback('Unable to connect to position stack', undefined)
        }else if(response.body.error){
            callback(response.body.error.code+' : '+response.body.error.message)
        }else if(!response.body.data.length){
            callback('Invalid input: No matching results found')
        }else{
          const data2 = response.body.data[0]
            callback(undefined, {
                latitude: data2.latitude,
                longitude: data2.longitude,
                location: data2.label
            })         
        }
    })

}

module.exports = geocode