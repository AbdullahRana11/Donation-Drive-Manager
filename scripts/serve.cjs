const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');

const projectRoot = path.resolve(__dirname, '..');
const publicFolders = ['css', 'js', 'assets'];
const publicFiles = ['index.html', 'drives.html', 'hubs.html', 'reports.html', 'about.html', 'thank-you.html', 'legal.html', '404.html', 'robots.txt', 'sitemap.xml'];
const types = { '.webp': 'image/webp', '.html': 'text/html; charset=utf-8', '.css': 'text/css; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.svg': 'image/svg+xml', '.ttf': 'font/ttf', '.txt': 'text/plain; charset=utf-8', '.xml': 'application/xml; charset=utf-8' };

function sendMissing(response) {
  const html = fs.readFileSync(path.join(projectRoot, '404.html'), 'utf8');
  response.writeHead(404, { 'Content-Type': types['.html'] });
  response.end(html.replace('<head>', '<head><base href="/">'));
}

http.createServer(function (request, response) {
  if (request.method !== 'GET' && request.method !== 'HEAD') {
    response.writeHead(405, { Allow: 'GET, HEAD' });
    response.end();
    return;
  }
  let route;
  try { route = decodeURIComponent(new URL(request.url, 'http://localhost:8000').pathname).slice(1) || 'index.html'; }
  catch (error) { sendMissing(response); return; }
  const filename = path.resolve(projectRoot, route);
  const inPublicFolder = publicFolders.some(function (folder) {
    const folderRoot = path.join(projectRoot, folder) + path.sep;
    return route.startsWith(folder + '/') && filename.startsWith(folderRoot);
  });
  const allowed = publicFiles.includes(route) || inPublicFolder;
  if (!allowed || !fs.existsSync(filename) || !fs.statSync(filename).isFile()) { sendMissing(response); return; }
  response.writeHead(200, { 'Content-Type': types[path.extname(filename)] || 'application/octet-stream', 'Cache-Control': 'no-cache' });
  response.end(request.method === 'HEAD' ? undefined : fs.readFileSync(filename));
}).listen(8000, '127.0.0.1', function () {
  console.log('AMANAT preview: http://localhost:8000');
  console.log('Press Ctrl+C to stop. Only application files and assets are served.');
});
