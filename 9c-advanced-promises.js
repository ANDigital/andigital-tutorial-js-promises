var Promise = require('bluebird');
var colors = require('colors');

/* 
	
	- Just cleaning it up a little

*/

var users = ['Tom', 'Dick', 'Harry'];

var getTheMisters = function() {
    return Promise.map(users, function(name) {
        return Promise.resolve('Mr ' + name);
    });
};

Promise.all(getTheMisters())
	.spread(function(tom, dick, harry){
        console.log(tom.blue);
        console.log(dick.red);
        console.log(harry.green);
    });