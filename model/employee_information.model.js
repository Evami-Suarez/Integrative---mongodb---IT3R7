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
            required: false,
        },
        lname: {
            type: String,
            required: true,
        },
        age: {
            type: Number,
            min: 18,
            max: 50,
            required: true,
        },
        address: {
            type: String,
            required: true,
        },
        birthday: {
            type: String,
            required: true,
        },
        dateCreated: {
            type: Date,
            default: Date.now()
        }
    }
)

const employee_information = mongoose.model('employee_information_details', employee_informationSchema);
module.exports = employee_information;