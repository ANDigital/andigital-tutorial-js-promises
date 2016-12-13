var Promise = require('bluebird');
var colors = require('colors');

/* 

What is a promise
	- Used for Async actions
	- Is the Promise of a future value
	- Write async as sync
	- Used to allow the thread to move on with tasks, whilst blocking (single threaded)
	- Promises are now natively in most modern browsers: http://caniuse.com/#feat=promises

An example promise 
	- A promise has 3 states: Pending, Rejected, Resolved
	- It is waiting, running or failed
	- Promises work of the notion of return values, return is very important in promises

*/

var anAsyncFunction = function() {
    return new Promise(function(resolve, reject) {

        if ( /* everything went well! */ true) {
            return resolve('An async result!');
        } else {
            return reject('An async failure!');
        }

    })
};

var logOutGreen = function(string) {
    console.log(string.green);
}

anAsyncFunction()
    .then(logOutGreen);
