string = "ABBA are a Swedish pop supergroup formed in Stockholm";

array = string.split("");

 
let charCodeMap = array.map(element => element.charCodeAt(0))


//console.log(charCodeMap)
arrayNumEncrypted = [];


charCodeMap.forEach(element => {
  if (element<96) {
  arrayNumEncrypted.push(element+33)
  } else 
  if (element === 96) {
    arrayNumEncrypted.push(97)
  } else
  if (element === 128) {
    arrayNumEncrypted.push(65)
  } else  {
  arrayNumEncrypted.push(element-31)
  }
})


const arrayofLettersEncrypted = arrayNumEncrypted.map(element => String.fromCharCode(element))


const newString = arrayofLettersEncrypted.join('');
console.log(newString)


 charCodeMapEncrypted = newString.split('').map(e => e.charCodeAt(0))
 arrayNumDecrypted = [];


charCodeMapEncrypted.forEach(element => {
  if (element>97) {
    arrayNumDecrypted.push(element-33)
  } else 
  if (element === 97) {
    arrayNumDecrypted.push(96)
  } else
  if (element === 65) {
    arrayNumDecrypted.push(128)
  } else  {
    arrayNumDecrypted.push(element+31)
  }
})

const arrayofLettersDecrypted = arrayNumDecrypted.map(element => String.fromCharCode(element))
console.log(arrayofLettersDecrypted.join(''))
