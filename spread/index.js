// tuong tự như rest, nhưng được trải ra
const a = [1, 2, 3];
const b = ['a','b',...a, 5, 6, 'c'];// ...a có dấu 3 chấm
const c = ['a','b', a, 5, 6, 'c'];// a

console.log(b);// ...a thì trãi giá trị a vào b
console.log(c);// nếu không ...a thì sẽ lồng a vào b

function sum(){
  return a.reduce((a,b)=>a+b)
}
sum(...a)

console.log('-------------')
///------------ojb
//- sao chép obj không thay đổi giá trị obj đã sao chép
obj1 = {
  a: 1,
  b: 2,
  c: 3,
  d:{
    uu: 4
  }
}

obj2 = {
  ...obj1,
  c:4,
  e:'khác với obj1- có thể thêm giá trị khác',
}
obj2.d.uu = 6; // thấy đấy obj1 cũng thay đổi giá trị của uu lun r
console.log(obj1 , obj2);

console.log('-------------')
//giải quyết vấn đề obj lồng nhau như ở trên 
const aa = {
  languages: {
    vi: 'Xin chào'
  }
}
let bb = JSON.parse(JSON.stringify(aa))
bb.languages.vi = 'Chao xìn'
console.log(bb.languages.vi) // Chao xìn
console.log(aa.languages.vi) // Xin chào

//https://viblo.asia/p/su-khac-nhau-giua-deep-copy-va-shallow-copy-trong-javascript-4dbZN3qylYM