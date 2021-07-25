module.exports = {
  apps: [
    {
      name: 'PiedPiperApi',
      exec_mode: 'cluster',
      instances: 'max', // Or a number of instances
      script: './server.js',
      args: 'start'
    }
  ]
}