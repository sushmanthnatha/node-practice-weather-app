const request = require('postman-request')
const chalk = require('chalk')


const weather_stack_access_key = '7cbba7d0dacc63824c6b0d2dc2f0cc7a'
const position_stack_access_key = '587687d5b67c7827d315e836abd107c4'

// const url = 'http://api.weatherstack.com/current?access_key='+ weather_stack_access_key +'&query=Nellore&units=f'
const url = 'http://api.weatherstack.com/current?access_key='+ weather_stack_access_key +'&query=14.433,79.967&units=m'
const url2 = 'http://api.positionstack.com/v1/forward?access_key='+ position_stack_access_key +'&query=1600 Pennsylvania Ave NW, Washington DC&limit=1'
// request( { url : url, json : true}, (error, response) => {

//     if(error){
//         console.log(error)
//         console.log('Unable to connect to weather forecast')
//     } else if(response.body.error) {
//         console.log(response.body.error.info)
//     } else {
//         const data = response.body
//         console.log('In ',data.location.name,' it is currently ',data.current.temperature,' deg temperature and its feeling like ',data.current.feelslike)  
//     }


// })

request( { url : url2, json : true}, (error, response) => {

    if(error){
        console.log(error);
        console.log('Unable to connect to position stack')
    }else if(response.body.error){
        console.log(chalk.red(response.body.error.code),' : ',chalk.red(response.body.error.message))
    }else if(!response.body.data.length){
        console.log(chalk.yellow('Invalid input: No matching results found'))
    }
    else{
        const data2 = response.body.data[0]
        console.log('Place : ',data2.label,'\n Lat : ',data2.latitude,', Long: ',data2.longitude)
    }

})
  

  