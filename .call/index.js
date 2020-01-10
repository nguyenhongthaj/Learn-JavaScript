//call: func.call(this, param1, param2, ...)
// Nếu k có this thì truyển thẳng param vào
//vd:
// function greeting(name, age){
//   return console.log(`Hello ${name} and ${age}`);
// }
// greeting.call(null, name, age); // null vì đó là this, nếu có this thì truyền vào chỗ null 1 cái gì đó, ví dụ như myName ~~
function greeting(year){
  return console.log(`Hello ${this.name} and ${this.age} and year ${year}`);
}

var myName = {
  name:'Thai',
  age: 22,
}
var myName1 = {
  name:'Thai222',
  age: 22,
}
greeting.call(myName,2020); // trả thẳng luôn giá trị mà hàm trả về


// 2 cái dưới này giống nhau

// var b = greeting.bind(myName1)(); tra ve 1 gàm

// var b = greeting.bind(myName1); tra ve 1 ham và phai goi ra de tra ve gia tri
// b();