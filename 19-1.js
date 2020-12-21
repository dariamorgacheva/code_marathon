let cashback = new Map;
function bank(sum, type) {
 var available = [100, 200, 500, 1000, 2000, 5000];
 available = available.reverse();
 if (type === 'размен') {
    num = sum/100;
    console.log(num + ' купюр по 100 рублей')
  }
  if (type === 'крупными') {
   for (i=0; i<available.length; i++) {
   cashback.set(available[i], Math.floor(sum/available[i]))
   sum = sum%available[i]
  }}
console.log(cashback)
}

bank(7500, 'крупными')
