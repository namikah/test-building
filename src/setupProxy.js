const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api', // Change '/api' to the base URL of your backend API
    createProxyMiddleware({
      target: 'http://localhost:3001', // Change this to your backend server URL
      changeOrigin: true,
    })
  );

  // Handle HTTPS requests during development
  if (process.env.HTTPS === 'true') {
    const fs = require('fs');
    const https = require('https');
    const certOptions = {
      key: fs.readFileSync(process.env.SSL_KEY_FILE),
      cert: fs.readFileSync(process.env.SSL_CRT_FILE),
    };

    const httpsServer = https.createServer(certOptions, app);
    httpsServer.listen(3001, () => {
      console.log('HTTPS Server running on port 3001');
    });
  }
};
