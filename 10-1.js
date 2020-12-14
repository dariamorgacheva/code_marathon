function binary(num) {
  const array = []
  const i = 0
  while (num>=1) {
    array.push(num%2)
    num = Math.floor(num/2)
  }
  result = array.reverse()
  console.log(result.join(''))
}

binary(305)
