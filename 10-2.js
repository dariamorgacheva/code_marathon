function any(num, system) {
  const array = []
  const i = 0
  while (num>=1) {
    array.push(num%system)
    num = Math.floor(num/system)
  }
  result = array.reverse()
  console.log(result.join(''))
}

any(43, 8)
