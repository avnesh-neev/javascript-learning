//Checking Exist value in Array prototype: inArray
Array.prototype.inArray = function(value){
	for(var count=0; count<this.length; count++){
		if (value === this[count]) {
			return true;
		}
	}
	return false;
}

//String reverse prototype
String.prototype.reverse = function() {
	return Array.prototype.reverse.apply(this.split('')).join('');
}
