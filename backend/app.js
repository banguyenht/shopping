const express = require("express");
const app = express();
const errorMiddleware = require('./middlewares/errors')
app.use(express.json())

const products = require('./routes/product')
app.use('/api/v1', products)

const users = require('./routes/auth')
app.use('/api/v1', users)

app.use(errorMiddleware)

module.exports = app
