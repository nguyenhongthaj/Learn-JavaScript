var hello = {
  name: '2020',
  sayHi: function(){
    console.log('Hello...' + this.name);
  }
}
var goodBye = {
  name: '2019',
  sayHi: function(){
    console.log('GoodBye...' + this.name);
  }
}
//hello.sayHi();
var hell = hello.sayHi.bind(hello);
//var hell = hello.sayHi.bind(goodBye);
//var hell = goodBye.sayHi.bind(goodBye);
hell();