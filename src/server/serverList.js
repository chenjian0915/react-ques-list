const env = process.env.NODE_ENV;

const serverList = {
	development: {
		listUrl: 'https://test-api-o-en.speiyou.cn/',
	},
	test: {
		listUrl: 'https://test-api-o-en.speiyou.cn/',
	},
	production: {
		listUrl: 'https://test-api-o-en.speiyou.cn/',
	},
};

export default serverList[env];
