const mongoose = require('mongoose')

const connectionString = 'mongodb://mongo:27017/student_infodb';

//use when starting application pod k8s
const mongodbUrl = `mongodb://${process.env.DBURL}mongo:27017/student_infodb`

mongoose.connect(mongodbUrl, { useNewUrlParser: true }).catch((e) => {
    console.error('Connection error', e.message);
});

const db = mongoose.connection

module.exports = db