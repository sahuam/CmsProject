const express = require('express')
const app = express();
const path = require('path')
// It will parse incoming requests with JSON payloads
app.use(express.json())

app.use(express.static("public"))

app.get('/cms', (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"))
} )

// Start Server
const port = 4000;
app.listen(4000, () => console.log('server is listenning at port 4000'))
