function check_array(num, input) {
  let condition = [];
  while (num%10 > 1) {
    condition.push(num%10);
      num = Math.floor(num/10)

  } 
  var n = condition.length;
  console.log('в массиве массивов должно быть '+n + ' массивов, длиной ' + condition )
  
  if (input.length === condition.length) {
    
  let check_map = new Map;

  input.forEach(element => {
    condition.forEach (item => {  
    if (element.length === item) {
        check_map.set(element, item)
      } 

    });

  })
if (check_map.size === n) {
console.log('True: каждому массиву соответствует число ', check_map, )
} else {
  console.log('False - не все массивы подходят под описание', check_map)
}
 } else {
    return console.log('False - неверное число массивов')
    
  }

}  


check_array(5555, [[1,2,3, 5, 5],[1,2,3, 5, 5,7], [5,6, 6,5, 7], [5,6,7,8,9]])
