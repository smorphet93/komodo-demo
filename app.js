const http = require("http");
const os = require("os");

const PORT = process.env.PORT || 3000;
const APP_ENV = process.env.APP_ENV || "unknown";
const hostname = os.hostname();

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end(`
    &lt;html&gt;
      &lt;head&gt;
        &lt;title&gt;Komodo Demo&lt;/title&gt;
        &lt;style&gt;
          body { font-family: sans-serif; max-width: 600px; margin: 100px auto; text-align: center; }
          .env { display: inline-block; padding: 4px 12px; border-radius: 20px;
                 background: ${APP_ENV === "production" ? "#22c55e" : "#3b82f6"}; color: white; }
        &lt;/style&gt;
      &lt;/head&gt;
      &lt;body&gt;
        &lt;h1&gt;🦎 Komodo Demo App&lt;/h1&gt;
        &lt;p&gt;Environment: &lt;span class="env"&gt;${APP_ENV}&lt;/span&gt;&lt;/p&gt;
        &lt;p&gt;Running on host: &lt;strong&gt;${hostname}&lt;/strong&gt;&lt;/p&gt;
        &lt;p&gt;Deployed at: &lt;strong&gt;${new Date().toISOString()}&lt;/strong&gt;&lt;/p&gt;
      &lt;/body&gt;
    &lt;/html&gt;
  `);
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT} in ${APP_ENV} environment`);
});
