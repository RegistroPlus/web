function padZero(value) {
	return ('0' + value.toString()).slice(-2);
}

module.exports.padZero = padZero;
