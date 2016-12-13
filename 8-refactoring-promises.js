var Promise = require('bluebird');
var colors = require('colors');

/* 

    - Now it's very clear how many numbers will be added
    - 3 lots of ones, and 1 set of add three
    - Refactoring promises can be really easy
    - Swapping the functions around can also be really easy
        - This makes things agile
        - One of the main principles of agile development is that your work is flexible

*/

var addOne = function(result) {
    return result + 1;
};

var addThree = function(value) {
    return Promise.resolve(value)        
        .then(addOne)
        .then(addOne)
        .then(addOne);
};

Promise.resolve(0)
    .then(addOne)
    .then(addOne)
    .then(addOne)
    .then(addThree)
    .then(function(result) {
        console.log(result.toString().green);
    });
