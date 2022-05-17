const express = require('express')
const cors = require('cors')
const app = express()
const port = 8000


// config your mongoose
require('./config/mongoose.config')

// configure express server
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

// attach routes to your express server


const ProductRoutes = require('./routes/product.routes')
ProductRoutes(app)










// RUN YOUR EXPRESS SERVER

app.listen(port, () => console.log(`listening on port ${port}`))