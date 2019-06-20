const env = process.env.NODE_ENV
console.log(env)

const serverList = {
    development: {
        listUrl: 'http://10.2.42.124:8020/'
    },
    test: {
        listUrl: 'https://test-api-o-en.speiyou.cn/'
    },
    production: {
        listUrl: 'https://test-api-o-en.speiyou.cn/'
    }
}

export default serverList[env];
