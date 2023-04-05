const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());
const categories = require('./data/category.json')

app.get('/', (req, res)=>{
    res.send('Api is running')
})

app.get('/course-category', (req, res)=>{
    res.send(categories)
})

app.listen(port, ()=>{
    console.log('learning platform server is running port', port)
})