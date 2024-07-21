const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = 8085;

// Use middlewares
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/ITC505/module-7',express.static(path.join(__dirname,'lab-7 online disscussion')));

// Route to handle form submission and set cookies
app.post('/set-cookie', (req, res) => {
    const { name, email } = req.body;

    // Set cookies with user data
    res.cookie('userName', name, { maxAge: 900000, httpOnly: true });
    res.cookie('userEmail', email, { maxAge: 900000, httpOnly: true });
    res.redirect('/ITC505/module-7/index.html');
});
app.get('/ITC505/module-7/script.js', (req, res) => {
  res.sendFile(path.join(__dirname, 'ITC505','module-7', 'script.js'));
});

// Serve CSS files with the appropriate MIME type
app.get('/ITC505/module-7/style.css', (req, res) => {
  res.sendFile(path.join(__dirname, 'ITC505','module-7', 'style.css'));
});

// Route to handle retrieving cookies
app.get('/get-cookie', (req, res) => {
    const userName = req.cookies.userName || 'Guest';
    const userEmail = req.cookies.userEmail || 'Not provided';
    res.send(`User Name: ${userName}<br>User Email: ${userEmail}`);
});

// Serve the main HTML file
app.get('/ITC505/module-7/index.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'ITC505','module-7','index.html'));
});

// Handle other routes
app.get('/home', (req, res) => res.send('Welcome to Home Page'));
app.get('/about', (req, res) => res.send('About Us'));
app.get('/contact', (req, res) => res.send('Contact Us'));

// Handle 404
app.use((req, res) => {
    res.status(404).send('Page Not Found');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
