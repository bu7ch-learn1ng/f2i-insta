const express = require('express')
const app = express()

const port = process.env.PORT || 5000


const mongoose = require('mongoose')

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/f2i-insta-flex');
  console.log(`📚[Database] is connected to MongoDB`)
}
app.use('/', (req, res) => {
  console.log('🐲')
})

app.listen(port, () => console.log(` ⚡️ [SERVER] is running on : ${port}`))