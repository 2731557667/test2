module.exports = {
  apps: [{
    name: 'api-polytechnic',
    script: 'npm',
    args: 'start',
    watch: false,
    autorestart: true,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'production'
    }
  }]
} 