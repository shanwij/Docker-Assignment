const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Student = new Schema(
    {
        std_name: { type: String, required: true },
        std_coz: { type: String, required: true },
        address: { type: String, required: true },
    },
    { timestamps: true },
)

module.exports = mongoose.model('student', Student)