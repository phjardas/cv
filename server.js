const express = require('express');
const path = require('path');

const dist = path.resolve(__dirname, 'dist');
const index = path.resolve(dist, 'index.html');

const app = express();
app.use(express.static(dist));
app.get('/*', (req, res) => res.sendFile(index));

const port = process.env.PORT || 3000;
app.listen(port, () => console.log('Server runs on port %d', port));
