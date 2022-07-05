const express = require('express');
const cors = require('cors');
const server = express();
server.use(cors());
const dummyData = require('./dummyData.json');

server.get('/all',(req,res)=>{
    try {
        res.status(200).json(dummyData);
      } catch (error) {
        res.status(500).json({
          error,
          message: 'Coś poszło nie tak na serwerze',
        });
      }
})

server.listen(3001,()=>console.log("Server is running"));