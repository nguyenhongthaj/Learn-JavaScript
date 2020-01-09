var rectangle = {
	height:10,
	weight:20,
	getHeight: function(){
		return this.height;
	},
	getWidth: function(){
		return this.weight
	},
	getArea: function Area(){
		return this.height*this.weight;
		
	}
}
console.log(rectangle.getArea());
