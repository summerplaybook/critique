const express = require('express')
const app = express()
const port = 80

app.use(express.static('critique'))

// app.get('/', (req, res) => res.sendFile('../findfriendflights/index.html', { root: __dirname }));

app.listen(port, () => console.log(`Example app listening on port ${port}!`))



// const express = require('express')
// const fs = require('fs')
// const http = require('http')
// const app = express()

// app.get('/', (req, res) => res.send('hello world'))

// http.createServer({
// //   key: fs.readFileSync('./server.key'),
// //   cert: fs.readFileSync('./server.cert')
// }, app)
// .listen(80, function () {
//   console.log('Example app listening on port 80! Go to https://localhost:3000/')
// })