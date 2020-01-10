// function sum(){
//   var sum = 0;
//   for ( let i = 0; i< arguments.length; i++){
//     sum += arguments[i];
//   }
//   return sum;
// }
// sum(1, 2, 3)

function sum(){
  const numbers = Array.from(arguments);// bien doi object arguments thanh Array
  return numbers.reduce(function(sum, num){
    return sum + num;
  },0)
}
console.log(sum(1, 2, 3, 4));

// let arr = [1,2,3,4];
// sum = (arr) => {
//   let sum = 0;
//   for(let i of arr){
//     sum += i;
//   }
//   return sum;
// }
// sum(arr);