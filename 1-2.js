const request = require('request')

const url = 'https://worldtimeapi.org/api/timezone/America/Toronto'

request({ url, json: true }, (error, {body}) => {
  if (error) {
    console.log('Unable to connect to services!')
    return
  } 
  const d = body.datetime        
  const hour = d.split('T')[1].split(':')[0]
  greet('Dasha', hour)
})

function greet(name, hour) {
  if (hour <= 4 ) {
    console.log('доброй ночи ' + name)
  } else if (hour <= 9) {
    console.log('доброе утро ' + name)
  } else if (hour <= 16) {
    console.log('добрый день, ' + name)
  } else {
    console.log('добрый вечер, ' + name)
  }
}  
