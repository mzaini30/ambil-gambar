module.exports = function(x){
	return x.match(/!\[[^\]]*\]\((.*?)\s*("(?:.*[^"])")?\s*\)/)[1]
}