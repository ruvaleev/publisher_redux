module.exports = {
  apps: [{
    name: 'publisher-app',
    script: './dist/server/server.js',
    env: {
      NODE_ENV: 'production'
    }
  }],
  deploy: {
    production: {
      user: 'ec2-user',
      host: ['18.141.159.219'],
      ref: 'origin/lesson_14',
      repo: 'git@github.com:ruvaleev/publisher_redux.git',
      path: '/home/ec2-user/publisher-app',
      'post-deploy': 'npm run build:client; npm run build:server; pwd; pm2 startOrRestart pm2.config.js'
    }
  }
}
