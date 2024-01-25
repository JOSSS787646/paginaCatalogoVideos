module.exports = {
	globDirectory: '.',
	globPatterns: [
		'**/*.{png,html,js,json,css,svg,jpg,less,txt,yml,scss,ttf,woff2}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};