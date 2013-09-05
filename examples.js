
var iterate = require('./iterate')

iterate(5, function(i) { console.log(i) });

console.log('2 raised to the 4th: ',
	iterate(4, 1, function(i, applied) { return applied * 2; }));
