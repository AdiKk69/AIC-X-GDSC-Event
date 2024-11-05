const express = require('express');
const path = require('path');

const app = express();
app.use(express.json()); 


// Serve the HTML file from the server folder
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'geminibot.html'));
});

// Serve CSS and JS files
app.get('/styles.css', (req, res) => {
    res.sendFile(path.join(__dirname, 'styles.css'));
});

app.get('/scripts.js', (req, res) => {
    res.sendFile(path.join(__dirname, 'scripts.js'));
});

// Start the server on port 3000
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
