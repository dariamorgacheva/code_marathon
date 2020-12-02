function getHour(name) {
   var d = new Date();
   var n = d.getHours();
  if (n < 4 ) {
       console.log('доброй ночи ' + name, n)
    } else if (n < 9) {
       console.log('доброе утро ' + name)
    } else if (n < 16) {
        console.log('добрый день, ' + name)
    } else {
      console.log('добрый вечер, ' + name)
  }}

getHour('Dasha')
