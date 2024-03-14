const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const employee_informationSchema = new Schema(
    {
        fname: {
            type: String,
            require: true,
        },
        mname: {
            type: String,
            require: false,
        },
        lname: {
            type: String,
            require: true,
        },
        age: {
            type: Number,
            min: 18,
            max: 50,
            require: true,
        },
        address: {
            type: String,
            require: true,
        },
        birthday: {
            type: String,
            require: true,
        },
        dateCreated: {
            type: Date,
            default: Date.now()
        }
    }
)

const employee_information = mongoose.model('employee_information_details', employee_informationSchema);
module.exports = employee_information;