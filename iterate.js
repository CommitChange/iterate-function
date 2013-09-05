
module.exports = function(limit, x, y) {
	if (typeof x === 'function')
		var f = x, applied = 0;
	else
		var f = y, applied = x;

	for (var i = 0; i < limit; i++)
		applied = f(i, applied);

	return applied;
};
