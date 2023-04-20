const app = require("./app");
const connectDatabase = require('./config/database')
const dotenv = require('dotenv');
dotenv.config({path: 'backend/config/config.env'})


connectDatabase()

const server = app.listen(process.env.PORT, () => {
  console.log(`server on ${process.env.PORT} in ${process.env.NODE_ENV}`)
})

process.on('uncaughtException', err => {
  console.log(`ERROR: ${err.stack}`);
  console.log('Shutting down due to uncaught exception');
  server.close(() => {
    process.exit(1)
  })
})
