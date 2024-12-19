import cors from 'cors'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import express from 'express'
import routes from './Routes/routes.js'

const app = express()
app.use(cors())
app.use(express.urlencoded({limit:"50mb"}))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

mongoose
  .connect(
    "mongodb+srv://helenowel6:rzEvm67gzOSMle6t@cluster0.5lgmo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(()=>{console.log('DB Connected')})
  .catch((error)=>{console.log(error)})

  app.use('/api', routes)

  const port = 3000;
  app.listen(port, ()=>{
    console.log('Server is running on port 3000')
  })