const http = require("http");
const os = require("os");

const PORT = process.env.PORT || 3000;
const APP_ENV = process.env.APP_ENV || "unknown";
const hostname = os.hostname();

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end(`
    <html>
      <head>
        <title>Komodo Demo</title>
        <style>
          body { font-family: sans-serif; max-width: 600px; margin: 100px auto; text-align: center; }
          .env { display: inline-block; padding: 4px 12px; border-radius: 20px;
                 background: ${APP_ENV === "production" ? "#22c55e" : "#3b82f6"}; color: white; }
        </style>
      </head>
      <body>
        <h1>🦎 Komodo Demo App</h1>
        <p>Environment: <span class="env">${APP_ENV}</span></p>
        <p>Running on host: <strong>${hostname}</strong></p>
        <p>Deployed at: <strong>${new Date().toISOString()}</strong></p>
      </body>
    </html>
  `);
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT} in ${APP_ENV} environment`);
});
