const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const carSchema = new Schema({
    make: String,
    model: String,
    year:  Number,
    seller: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    }
})
module.exports = mongoose.model('car', carSchema);