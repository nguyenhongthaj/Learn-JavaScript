// Các phép tính ++/-- độ ưu tiên trước * / + - 
var a = 10;
var b = 18;

var x = a--+b++-++b-++a;
// a-- tính xong mới trừ nên vẫn bằng a= 10
// b ++ tính xong mới cộng nên b = 18
// ++b cộng trước mới tính nên b = 20
// ++a cộng trước mới tinh nên a = 10
var s = 10+18-20-10;
console.log('X= '+x+ ' S= '+s);