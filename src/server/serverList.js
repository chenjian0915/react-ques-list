const env = process.env.NODE_ENV
console.log(env)

const serverList = {
    development: {
        listUrl: 'http://test.getList.com/'
    },
    production: {
        listUrl: 'http://getList.com/'
    }
}

export default serverList[env];
