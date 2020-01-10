// function a(...a){
//   console.log('a: '+ a)
//   console.log(Array.from(arguments));
// }
// a(1, 2, 3, 4);

// function sum(...number){
//   return number.reduce((a,b) => a+b, 0);
// }
// sum(1, 2, 3, 4);

// separator : dãi phân cách -> chính là phần tử đầu, nếu không có phần tử đàu thì ...string chính là tất cả phần tử
// ...string các phần tử còn lại
function concat(separator, ...string){
  return string.join(separator);
}
console.log(concat('.', 'a', 'b', 'c'));