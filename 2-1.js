function reader(str, maxlen) {
  var n = str.length;
  let count = 0;
  var arr = str.split('');
  for (i=0; i < n; i++) {
  if (arr[i] === ' ') {
    count = count + 1;
  }
}
let oddEven = '';
if (str.length % 2 === 0) {
  oddEven = 'количество символов в тексте четное'
} else {
  oddEven = 'количество символов в тексте нечетное'
}

let moreLess = '';
if (str.length > maxlen) {
  moreLess = ', длина текста превышает длину ' + maxlen + ' символов'
} else {
  moreLess = ''
}
console.log('количество символов в тексте ' + n + ', количество символов без учета пробелов ' + (n-count) + ', ' + oddEven +  moreLess);
}

reader('this is a  string', 17);
