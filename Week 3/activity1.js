//Function working properly
console.log(addition(5));

function addition(x){
	return x + x + x
}

//Function isn't working correctly
console.log(subtraction(10));

var subtraction = function(x){
	return x - 1;
};