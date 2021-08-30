const express = require('express');

const cors = require('cors');

const axios = require('axios');

require('dotenv').config();
var mongoose = require("mongoose");

const server = express();

server.use(cors());

server.use(express.json()); 

const PORT= process.env.PORT || 8000;

mongoose.connect("mongodb://alaa:QfKl8cTwCs8wzZHV@cluster0-shard-00-00.h79mm.mongodb.net:27017,cluster0-shard-00-01.h79mm.mongodb.net:27017,cluster0-shard-00-02.h79mm.mongodb.net:27017/Flower?ssl=true&replicaSet=atlas-azef1p-shard-0&authSource=admin&retryWrites=true&w=majority", { useNewUrlParser: true });

const getData = require('./FlowerController')
const {addFav, getFavFlower, deleteFav, UpdateFav } = require ('./crud')
////test////
server.get("/", (req, res)=> {
    res.send ('hello')
})
////////////

server.get ("/Flower",getData );
server.post ('/Flower/fav', addFav);
server.get ('/Flower/fav', getFavFlower);
server.delete ('/Flower/fav/:c_id', deleteFav)
server.put ('/Flower/fav/:c_id', UpdateFav)

/////////////////////////

server.listen(PORT ,()=> {
    console.log( `server listening to ${PORT}`);
})

