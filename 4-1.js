
function isThereSum (arr, num) {
  arr1 = [];
  arr.forEach(a1 => {
    
    if (a1<=num) {
      arr1.push(a1)
    }
  });

  arr1 = arr1.sort();
  console.log(arr1);

  for (i=0; i<arr1.length; i++) {
    for (j=arr.length; j>i; j--) {
      if (arr1[i]+arr1[j]===num) {
        console.log("HARDTYPED TRUE")
      } 
    }
  }
}  


  isThereSum([1, 3, 2, 12, 11], 5)
  isThereSum([1, 6, 12, 11], 6)
