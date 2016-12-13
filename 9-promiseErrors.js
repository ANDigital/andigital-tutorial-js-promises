var Promise = require('bluebird');
var colors = require('colors');

/* 

The nature of promises

    - You can reference a call to .then with a function reference
        - Creates a declarative syntax
    - Promises reject errors to it's nearest catch function
    - Promises propagate error messages upward
    - If no catch is found, an exception error is thrown
        - This is nice in the node environment
    - Nice for doing things like transactions, and transaction rollbacks
    - In callbacks you have to handle errors where they lie (show other file)

Important points: 
    - .then() always returns a promise
    - Finally always runs 
    - Try to always catch in your chains
        - Lots of implementations silently swallow errors!

*/


var insertUsersProfile = function() {
    console.log('Insert Users Profile'.green);
    // throw new Error('failure in 2!');
}

var insertUsersName = function() {
    console.log('Insert User'.green);

    // throw new Error('failure in 1!');
}

Promise.resolve()

    .then(insertUsersName)

    .then(insertUsersProfile)

    .catch(function() {
        console.log('Something went wrong in the parent'.red);
    })
    
    .finally(function(){    
        console.log('We failed, we passed, let the user know '.blue.underline);
    })





