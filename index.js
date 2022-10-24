const express = require('express');
const cors = require('cors');
const port = process.env.PORT || 5000;
const app = express();
app.use(cors());

const courses = require('./data/courses.json') 
    
app.get('/', (req, res) => {
    res.send('learnVerse Server is running')
})

app.get('/courses', (req, res) => {
    res.send(courses)
})

app.listen(port => {
    console.log(`learnVerse server is running ${port}`);
})