var mongoose = require("mongoose");



/// schema///
const FlowerSchema = new mongoose.Schema ({
    instructions: String,
    photo: String,
    name: String
});
const FlowerMongo = mongoose.model('flower', FlowerSchema);
////////////////

module.exports =FlowerMongo;