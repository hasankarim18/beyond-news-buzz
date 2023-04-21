const express = require('express')

const app = express()
const port = process.env.port ||  5000; 

app.get('/', (req, res)=> {
    res.send('Beyond News Buzz running')
})


app.listen(port, ()=> {
    console.log('Buzz api is running ');
})
