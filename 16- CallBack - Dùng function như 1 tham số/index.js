var coffeMachine = {
	makeCoffe: function(onFinish){
		console.log('Making coffe');
		onFinish();
	}
}
var beep = function done(){
	console.log('Tit tit');
}
coffeMachine.makeCoffe(beep);
coffeMachine.makeCoffe(function(){
	console.log('Done');
})