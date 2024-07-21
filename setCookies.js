const http = require('http');
const url = require('url');
const querystring = require('querystring');

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url);
    const path = parsedUrl.pathname;
    const query = querystring.parse(parsedUrl.query);

    if (path === '/set-cookies' && query.name && query.email) {
        const { name, email } = query;
        
        res.writeHead(200, {
            'Set-Cookie': [`name=${name}`, `email=${email}`],
            'Content-Type': 'text/plain'
        });
        res.end('Cookies have been set');
    } else {
        res.writeHead(400, { 'Content-Type': 'text/plain' });
        res.end('Missing name or email in query parameters');
    }
});

server.listen(3000, () => {
    console.log('Server is listening on port 3000');
});
