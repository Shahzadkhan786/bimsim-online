module.exports = {
  apps: [
    {
      name: 'construction-site',        // Name of your application
      script: 'index.js',    // Path to your entry script
      cwd: '../construction-site',
      instances: 1,          // Number of instances to run (adjust as needed)
      autorestart: true,     // Enable auto-restart on failure
      watch: false,          // Enable file watching for changes
      max_memory_restart: '100M', // Maximum memory usage for auto-restart
      env: {
        NODE_ENV: 'production', // Set the environment to production
      },
      env_production: {
        NODE_ENV: 'production', // Environment settings for production
      },
    },
  ],
};
