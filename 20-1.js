
function stepUp(a, i, j) {
 if (a[0][0] != a[2][2]) {
  return console.log ('no way');
  
 } else
  if (i===2 && j===2) {
  return console.log(i, j) } else
  if (a[i][j] === a[i][j+1]) {
    console.log(i, j)
    j = j+1
    stepUp(a, i, j)
  } else if (a[i][j] === a[i+1][j]) {
    console.log(i, j)
    i = i+1
    stepUp(a, i, j)
     
  } else {
    if ((a[i][j] != a[i+1][j]) &&  (a[i][j] != a[i][j+1] )) {
    return console.log('no way') }
  }
} 

stepUp([[2,3,2], [2,2,3], [1,2,3]], 0, 0)
