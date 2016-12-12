var Promise = require('bluebird');

/* 

What is a promise

	- Used for Async actions
	- Used to allow the thread to move on with tasks, whilst being non blocking

*/

/* 

	An example promise 

	- A promise has 3 states: Pending, Rejected, Resolved
	- It is waiting, running or failed
	- Promises work of the notion of return values, return is very important in promises

*/

var anAsyncFunction = function() {
    return new Promise(function(resolve, reject) {    	

    	if(/* everything went well! */ true) {
    		return resolve('Something its resolved with');	
    	} else {
    		return reject('Something its resolved with');
    	}
        
    })
};

anAsyncFunction()
    .then(function(string) {
        console.log(string);
    });