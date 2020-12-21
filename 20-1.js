function stepUp(a, i, j) {
if (a[0][0] != a[2][2]) {
  console.log('No way')
} else {
if (i<=1, j<=1) {
  if (a[i][j] === a[i][j+1]) {
    j = j+1
    stepUp(a, i, j)
  } else if (a[i][j] === a[i+1][j]) {
    i = i+1
    stepUp(a, i, j)
 
  } else {
    return console.log('no way')
  }
} 

} return console.log('There is a way')
}

stepUp([[2,3,2], [2,2,3], [2,2,2]], 0,  0)
