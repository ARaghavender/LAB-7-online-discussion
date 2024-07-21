const http = require('http');
const cookie = require('cookie');

const server = http.createServer((req, res) => {
    const cookies = cookie.parse(req.headers.cookie || '');
    const { name, email } = cookies;

    if (req.url === '/authenticate') {
        if (name && email) {
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end(`Authenticated: Name = ${name}, Email = ${email}`);
        } else {
            res.writeHead(401, { 'Content-Type': 'text/plain' });
            res.end('Authentication failed: No cookies found');
        }
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not Found');
    }
});

server.listen(3000, () => {
    console.log('Server is listening on port 3000');
});
