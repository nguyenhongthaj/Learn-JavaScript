// function sum(a,b){
//   return a+b;
// }
// var sum = function (a,b){
//   return a+b;
// }
// sum(3,2);
// var sum = (a,b) => a+b;
// sum(7,2)

// var square = (x) => (x*x)
// square(5);
// var multi2 = x => x*2;
// multi2(2);

/* --------------------Không tham số thì để () */
// var doSomeThing = () => Date.now();
// doSomeThing();

let arr = [1, 2, 3];
// arr.map(function(x){
//   return x*x;
// });
//biển đổi trên xuống thành dưới này hihi
let c  = arr.map(x => x*x);
console.log(c);
