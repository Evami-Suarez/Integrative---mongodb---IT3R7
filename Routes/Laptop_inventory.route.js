const express = require('express');
const router = express.Router();

const laptop_inventorySchema = require('../model/laptop_inventory.model');
const laptop_inventory = require('../model/laptop_inventory.model');
router.get('/', async (req, res, next) => {
    try{
        const result = await laptop_inventorySchema.find({}, {__v: 0})
        res.send(result);
    } catch(e){
        res.send(e.message);
    }
})

router.post('/', async (req, res, next) => {
    try{
        const laptop_inventory = new laptop_inventorySchema(req.body);
        const result = await laptop_inventory.save();
        res.send(result);
    } catch(e){
        res.send(e.message);
    }
});

router.get('/:id', async(req, res,next) => {
    try{
        const id = req.params.id;
        const result = await laptop_inventorySchema.findById(id , {__v: 0});
        res.send(result);
    } catch (e) {
        res.send(e.message);
    }
});

router.patch('/:id', async (req, res,next) => {
    try{
        const id = req.params.id;
        const update = req.body;
        const result = await  laptop_inventorySchema.findByIdAndUpdate(id , update);
        res.send(result);
    } catch (e) {
        res.send(e.message);
    }
})

router.delete('/:id', async (req, res,next) => {
    try{
        const id = req.params.id;
        const result = await laptop_inventorySchema.findByIdAndDelete(id);
        res.send(result);
    } catch (e) {
        res.send(e.message);
    }
})




module.exports = router;