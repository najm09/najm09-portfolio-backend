require('dotenv').config()
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const routes = require('./Routes/routes')


const app = express()
const port = process.env.PORT || 5000

// Middlewares
app.use(cors());
app.use(express.json());
app.use("/", routes);

const MONGODB_URL = process.env.mongodbUrl

mongoose
  .connect(MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log(`DB CONNECTED SUCCESSFULLY`))
  .catch((error) => {
    console.log(`DB CONNECTION FAILED`)
    console.log(error)
    process.exit(1)
  })

app.listen(port, () => {
  console.log(`server is running on port : ${port}`)
})
