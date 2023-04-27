const mongoose = require('mongoose')
const connectDatabase = () => {
  mongoose.connect(process.env.DB_LOCAL_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
    // useCreateIndex: true
  }).then(con => {
    console.log(`mongodb connected ${con.connection.host}`)
  })
}

module.exports = connectDatabase