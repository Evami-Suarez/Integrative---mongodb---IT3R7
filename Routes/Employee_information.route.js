const express = require('express');
const router = express.Router();

const employee_informationSchema = require('../model/employee_information.model');
const employee_information = require('../model/employee_information.model');

router.get('/', async (req, res, next) => {
    try{
        const result = await employee_informationSchema.find({}, {__v: 0})
        res.send(result);
    } catch(e){
        res.send(e.message);
    }
})

router.post('/', async (req, res, next) => {
    try{
        const employee_information = new employee_informationSchema(req.body);
        const result = await employee_information.save();
        res.send(result);
    } catch(e){
        res.send(e.message);
    }
});

router.get('/:id', async(req, res, next) => {
    try{
        const id = req.params.id;
        const result = await employee_informationSchema.findById(id , {__v: 0});
        res.send(result);
    } catch (e) {
        res.send(e.message);
    }
});

router.patch('/:id', async (req, res, next) => {
    try{
        const id = req.params.id;
        const update = req.body;
        const result = await  employee_informationSchema.findByIdAndUpdate(id , update);
        res.send(result);
    } catch (e) {
        res.send(e.message);
    }
})

router.delete('/:id', async (req, res, next) => {
    try{
        const id = req.params.id;
        const result = await employee_informationSchema.findByIdAndDelete(id);
        res.send(result);
    } catch (e) {
        res.send(e.message);
    }
})



module.exports = router;