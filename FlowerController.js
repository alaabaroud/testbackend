const axios = require('axios');
const FlowerModel = require('./Model');


const getData = async (req, res) =>{
await axios
.get ("https://flowers-api-13.herokuapp.com/getFlowers")
.then(result => {
    const response = result.data.flowerslist.map(i=> {
        return new FlowerModel(i)
    })
    res.send(response)
}).catch(err=> {
    console.log(err);
})
}
module.exports= getData
