const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());
const categories = require('./data/category.json');
const courses = require('./data/course.json')

app.get('/', (req, res)=>{
    res.send('Api is running')
})

app.get('/course-category', (req, res)=>{
    res.send(categories)
})

app.get('/course', (req, res)=>{
    res.send(courses)
})

app.get('/category/:id', (req, res)=>{
    const id = req.params.id;
    const categoriesCourse = courses.filter(course => course.category_id === id)
    res.send(categoriesCourse)
})

app.get('/course/:id', (req, res)=>{
    const id = req.params.id;
    const detailsCourse = courses.find(course => course._id === id)
    res.send(detailsCourse)
})

app.listen(port, ()=>{
    console.log('learning platform server is running port', port)
})