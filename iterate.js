
iterate = function(limit, initial_value, f) {
	var applied = initial_value;
	for (var i = 0; i < limit; i++) applied = f(applied, i);
	return applied;
};

module.exports = iterate;
