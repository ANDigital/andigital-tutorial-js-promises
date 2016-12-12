var Promise = require('bluebird');
var colors = require('colors');

/* 

The nature of promises

	- Used for Async actions
	- Used to allow the thread to move on with tasks, whilst being non blocking

*/

/* 

	An example promise 

	- A promise has 3 states: Pending, Rejected, Resolved
	- It is waiting, running or failed
	
*/

Promise.resolve()
    .then(function(){
        console.log('Still alive!'.green);

        throw new Error('failure in 1!');
    })
    .then(function(){
        console.log('Still alive!'.green);

        //throw new Error('failure in 2!');
    })
    .catch(function(){
        console.log('Something went wrong'.red);
    });