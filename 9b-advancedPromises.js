var Promise = require('bluebird');
var colors = require('colors');

/* 
	.resolve
	.map
	.all
		- Takes an array of promises, and returns when all of them are complete
		- Could use .race, .some, .map, .mapSeries, .reduce, .filter
	- Example API that takes 3 users, and does 3 things to them
	- We will clean this up in the next example

*/

var users = ['Tom', 'Dick', 'Harry'];

var getTheMisters = function() {
    return Promise.map(users, function(name) {
        return Promise.resolve('Mr ' + name);
    });
};

Promise.all(getTheMisters())
    .then(function(misters) {
        console.log(misters[0].blue);
        console.log(misters[1].red);
        console.log(misters[2].green);
    });