const express = require('express')
const path = require('path')

const app = express()

app.use(express.static(path.join(__dirname, '.dist')))
app.use((req, res) => {
  res.status(200).sendFile(path.join(__dirname, '.dist', 'index.html'))
})

app.listen(80)
console.log('App is listening on port 80')
