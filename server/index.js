import express from 'express'
import router from './routes/routes.js'
import cors from 'cors'

const app = express()

app.use(cors())
app.use(router)
app.listen(3000, ()=>{console.log('run on port 3000')})

