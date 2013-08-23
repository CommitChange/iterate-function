
iterate = function(limit, initial_value, fn) {
	var applied = initial_value;
	for (var i = 0; i < limit; i++) applied = fn(applied, i);
	return applied;
};

module.exports = iterate;
