const axios = require ('axios');
const FlowerMongo = require('./FlowerMongo');
const FlowerModel = require('./Model');

const addFav = async (req, res)=> {
    const {instructions, photo, name } = req.body;
    const newObj = new FlowerMongo ({
        instructions: instructions,
        photo: photo,
        name: name
    })
    newObj.save();
    res.send (newObj)
}

const getFavFlower = async (req, res) =>{
    FlowerMongo.find({}, (err, data)=> {
        res.send(data);
    })
}

const deleteFav = async (req , res) =>{
    const {c_id} = req.params;
    FlowerMongo.remove({_id:c_id}, (err, data)=> {FlowerMongo.find({}, (err, data) => {
        res.send(data);
    })})
}
const UpdateFav = async (req, res)=> {
    const {c_id} = req.params;
    const {instructions, photo, name } = req.body;
    FlowerMongo.findByIdAndUpdate({ _id:c_id}, 
        {instructions, photo, name}, {new:true}, (err, data)=> {
        res.send(data)
    })
}

module.exports ={ addFav, getFavFlower, deleteFav, UpdateFav }