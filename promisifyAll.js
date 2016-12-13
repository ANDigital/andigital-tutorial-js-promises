var Promise = require('bluebird');
var fs = Promise.promisifyAll(require('fs'));

/* 
	As a callback!

*/
fs.readFile('./readme.md', 'utf-8', function(err, readme_content){
	console.log('as a callback: ')
	console.log(readme_content)
});

/* 
	As a promise!

*/
fs.readFileAsync('./readme.md', 'utf-8').then(function(readme_content){
	console.log('as a promise: ');
	console.log(readme_content)
});














/* 

	For more information: 

	- http://bluebirdjs.com/docs/api/promise.promisifyall.html

*/