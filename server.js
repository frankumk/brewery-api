const express = require('express');
const app = express();
const path = require('path');
const axios = require('axios');
app.use(express.json())

app.get('/',(req,res,next) => res.sendFile(path.join(__dirname,'index.html')))
app.use('/dist', express.static(path.join(__dirname, 'dist')));
app.use('/assets',express.static(path.join(__dirname,'./assets')));

const BreweryDb = require('brewerydb-node');
const brewdb = new BreweryDb('513cbbb6b212de0c532077e16ac448da');
// const brewkey = require('./brewerydb.js')
require("dotenv").config()
// process.env.BREWERY_KEY = BREWERY_KEY

//`https://sandbox-api.brewerydb.com/v2/breweries/?key=${process.env.BREWERY_KEY}`

app.get('/api/breweries',async(req,res,next)=>{
    try{
        const breweries = (await axios.get(`https://sandbox-api.brewerydb.com/v2/breweries/?key=${process.env.BREWERY_KEY}`)).data
        // console.log(breweries)
        res.status(201).send(breweries);
    }catch(ex){
        console.log(ex);
    }
})

app.get('/api/beer/random',async(req,res,next)=>{
    try{
        const beer = (await axios.get(`https://sandbox-api.brewerydb.com/v2/beer/random/?key=${process.env.BREWERY_KEY}`)).data
        res.status(201).send(beer);
    }catch(ex){
        console.log(ex);
    }
})

const init = () => {    
    const port = process.env.PORT || 3000;
    app.listen(port,()=>console.log(`listening on port: ${port}`))
}
init();