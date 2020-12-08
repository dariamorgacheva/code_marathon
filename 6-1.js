function sumCheck(num) {
  if ((num%10 === Math.floor(num/10)) || (num%10 + Math.floor(num/10) === 10)) {
    console.log(true)
  } else {
    console.log(false)
  }

}

sumCheck(66)
sumCheck(70)
sumCheck(64)
