
/* 
        
    - An example showing how promises and syncronous functions play nicely

*/
var Promise = require('bluebird');
var colors = require('colors');

var addOne = function(result) {
    return result + 1;
};

Promise.resolve(0)
    .then(addOne)
    .then(addOne)
    .then(addOne)
    .then(function(value) {
        return Promise.resolve(value)
            .then(addOne)
            .then(addOne)
            .then(addOne)
    })
    .then(function(result) {
        console.log(result.toString().green);
    });
