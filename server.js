const http = require("http");
const fs = require("fs");
const path = require("path");

const root = __dirname;
const port = Number(process.env.PORT || 4173);

const types = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".ico": "image/x-icon"
};

function send(res, status, body, type = "text/plain; charset=utf-8") {
  res.writeHead(status, { "Content-Type": type });
  res.end(body);
}

const server = http.createServer((req, res) => {
  const url = new URL(req.url, `http://localhost:${port}`);
  let filePath = decodeURIComponent(url.pathname);

  if (filePath === "/") filePath = "/index.html";
  const resolved = path.normalize(path.join(root, filePath));

  if (!resolved.startsWith(root)) {
    send(res, 403, "Forbidden");
    return;
  }

  fs.readFile(resolved, (err, data) => {
    if (err) {
      fs.readFile(path.join(root, "index.html"), (fallbackErr, fallback) => {
        if (fallbackErr) send(res, 404, "Not found");
        else send(res, 200, fallback, types[".html"]);
      });
      return;
    }

    send(res, 200, data, types[path.extname(resolved)] || "application/octet-stream");
  });
});

server.listen(port, () => {
  console.log(`Notum running at http://localhost:${port}`);
});
