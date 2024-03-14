const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const laptop_inventorySchema = new Schema(
    {
        laptopBrand: {
            type: String,
            require: true,
        },
        quantity: {
            type: Number,
            require: true,
        },
        dateChecked: {
            type: Date,
            require: true,
        },
        dateCreated: {
            type: Date,
            default: Date.now()
        }
    }
)

const laptop_inventory = mongoose.model('laptop_inventory_details', laptop_inventorySchema);
module.exports = laptop_inventory;