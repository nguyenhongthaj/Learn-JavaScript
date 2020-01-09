/*Cách 1  dùm that thay this*/
// var newYear = {
//   name: 'Happy New Year 2020 !!!',
//   run: function(){
//     var that = this; //cách 1 thay thế that = this -> this đây là biến newYear
//     var run2 = function(){
//       console.log(that.name); // that
//     }
//     run2();
//   }
// }
// newYear.run(); 

/*Cách 2  bind*/
// var newYear = {
//   name: 'Happy New Year 2020 !!!',
//   run: function(){
//     var run2 = function(){
//       console.log(this.name);
//     }.bind(this); // dùng bind
//     run2();
//   }
// }
// newYear.run();

/* Cách dùm fat Arrow  */
var newYear = {
  name: 'Happy New Year 2020 !!!',
  run: function(){
    var run2 = () =>{
      console.log(this.name);
    }
    run2();
  }
}
newYear.run();
// var c = newYear.run.bind(newYear);
// c();
