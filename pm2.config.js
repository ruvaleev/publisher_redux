module.exports = {
  apps: [{
    name: 'publisher-app',
    script: './dist/server/server.js',
    env: {
      NODE_ENV: 'production'
    }
  }]
}
