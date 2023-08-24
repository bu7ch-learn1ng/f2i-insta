const express = require('express')
const app = express()

const port = process.env.PORT || 5000


app.use('/', (req, res) => {
  console.log('🐲')
})

app.listen(port, () => console.log(` ⚡️ [SERVER] is running on : ${port}`))