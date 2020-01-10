// apply tương tự như call
//Nhưng tham số thứ 2 truyền vào là 1 Array hoặc Array-like object
// apply: func.apply(this, [param1, param2, ...]);
function sum(){
  const number = Array.from(arguments);
  return number.reduce((sum, num) => sum+num, 0);
}

function average(){
  const x = sum.apply(null, arguments);
  return x/arguments.length;
}

console.log(average(1,2,3,4,5));
