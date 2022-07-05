const express = require('express');
const server = express();

const randomData = require('./dummyData.json');

server.get('/',(req,res)=>{
    try {
        res.status(200).json(randomData);
      } catch (error) {
        res.status(500).json({
          error,
          message: 'Coś poszło nie tak na serwerze',
        });
      }
})

server.listen(3001,()=>console.log("Server is running"));