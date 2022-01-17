const express = require('express')
const cors = require('cors')
const registerEmployeeRoutes = require('./routes/employees')
const registerClientRoutes = require('./routes/clients')
const registerengagementRoutes = require('./routes/engagements')

const app = express()

app.use(express.json())
app.use(cors())

registerEmployeeRoutes(app)
registerClientRoutes(app)
registerengagementRoutes(app)

const port = process.env.API_PORT || 3000

app.listen((port), () => {
  console.log('app is running on localhost:', port)
})
