let request = require('/Users/coreycosman/Dasha/code-marathon/users_ds.json')

// 1) Получить всех пользователей из указанной страны. Страна приходит параметром.
function byCountry(country) {
  const array1 = request.filter(e => e.country === country)
//  console.log(array1)
  return array1
}

// 2) Получить всех пользователей указанного возраста. Возраст приходит параметром.
function byAge(age, users) {
  const array2 = users.filter(e => e.age === age)
//  console.log(array2)
  return array2
}

// 3) Получить всех пользователей старше указанного возраста. Возраст приходит параметром.
function olderThan(age, users) {
  const array3 = users.filter(e => e.age > age)
//  console.log(array3)
  return array3
}

// 4) Получить всех пользователей младше указанного возраста или равного ему. Возраст приходит параметром.
function youngerThan(age, users) {
  const array4 = users.filter(e => e.age <= age)
  //console.log(array4)
  return array4
}

// 5) Получить всех совершеннолетних.
function isAdult() {

 const rusAdult = olderThan(18, byCountry('Russia')).concat()
 const usaAdult = olderThan(21, byCountry('USA'))
 const thaiAdult = olderThan(20, byCountry('Thailand'))
 const japAdult = olderThan(20, byCountry('Japan'))
 allAdults = rusAdult.concat(usaAdult, thaiAdult, japAdult)
 console.log(allAdults.length
  )
}

// 6) Получить всех тинов (тины - это все, кто не достиг совершеннолетия)
function isTeen() {
  const rusTeen = youngerThan(18, byCountry('Russia'))
  const usaTeen = youngerThan(21, byCountry('USA'))
  const thaiTeen = youngerThan(20, byCountry('Thailand'))
  const japTeen = youngerThan(20, byCountry('Japan'))
  allTeens = rusTeen.concat(usaTeen, thaiTeen, japTeen)
  return allTeens 
 } 


// 7) Найти все битые записи. Битые записи — это когда пользователь для текущей локации на самом деле должен быть совершеннолетним или тином, а в базе поле is_teen проставлено неправильно.

function broken() {
  isTeen()
  const brokenTeens = allTeens.filter(e => e.is_teen === false)
  isAdult()
  const brokenAdults = allAdults.filter(e => e.is_teen === true)
  const allBrokenRecs = brokenTeens.concat(brokenAdults)
  return allBrokenRecs}

  console.log(broken())
