/* 
	- .then always returns a promise
	- Refactoring is easy like this, you can easily remove items in the chain
	- jquery really popularised this chained syntax
*/

var Promise = require('bluebird');
var colors = require('colors');

var addOne = function(result){
	return result + 1;
};

Promise.resolve(0)
	.then(addOne)
	.then(addOne)
	.then(addOne)
	.then(function(result){
		console.log(result.toString().green);
	});