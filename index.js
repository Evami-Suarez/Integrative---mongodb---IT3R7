const express = require('express');
const mongoose = require('mongoose');
const app = express();
app.use(express.json());

const url = "mongodb://127.0.0.1:27017/admin";
const port = "3000";

mongoose.connect(url, {

}).then(() =>{
    console.log('MongoDB Connected....');
}).catch((err)=>{
    console.log(err);
})


const Employee_informationRoute = require('./Routes/Employee_information.route');
const Laptop_inventoryRoute = require('./Routes/Laptop_inventory.route');


app.use(('/Employee_information'), Employee_informationRoute);
app.use(('/Laptop_inventory'), Laptop_inventoryRoute);

//Error if wrong endpoint
app.use((req, res, next) => {
    const err = new Error("Not Found");
    err.status = 404;
    next(err)
})


//Middleware Express handler
app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.send({
        error: {
            status: err.status || 500,
            message: err.message
        }
    })
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})
