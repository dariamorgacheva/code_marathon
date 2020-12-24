function random_string(min, max) {
  
  var gen_string = []; 
  var characters = 'QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm'
  length = Math.floor(Math.random() * (max-min))+min;
  for (var i=0; i<length; i++) {
    gen_string[i] = characters[Math.floor(Math.random()*52)]
  }
 
  gen_string = gen_string.join('')
console.log(gen_string)
}
