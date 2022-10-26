const express = require('express');
const cors = require('cors');
const port = process.env.PORT || 5000;
const app = express();

app.use(cors());

const courses = require('./data/courses.json');
const category = require('./data/category.json')
const blogs = require('./data/blogs.json');

app.get('/', (req, res) => {
	res.send('learnVerse Server is running');
});

// app.get('/courses', (req, res) => {
// 	res.send(courses);
// });
app.get('/courses/:id', (req, res) => {
    const id = req.params.id;
    if (id === 'all') {
        res.send(courses);
    }
    else {
        const selectedCategory = courses.filter(
			(course) => course.category_id === id
		);
        res.send(selectedCategory);
    }
    
})

app.get('/course/:id', (req, res) => {
    const id = req.params.id;
    const course = courses.find(course => course.id === id);
    res.send(course)
})
app.get('/category', (req, res) => {
    res.send(category)
})

app.get('/blogs', (req, res) => {
    res.send(blogs)
})

app.listen(port, () => {
    console.log(`server is running on ${port}`);
})
