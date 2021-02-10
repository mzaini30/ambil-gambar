module.exports = function(x){
	const pilih = x.match(/!\[[^\]]*\]\((.*?)\s*("(?:.*[^"])")?\s*\)/)
	let hasil = 'https://i.ibb.co/yYWd5t0/undraw-Waiting-for-you-ldha.png'
	if (pilih != null) {
		hasil = pilih[1]
	}
	return hasil
}