const express = require('express');
const cors = require('cors');
const port = process.env.PORT || 5000;
const app = express();
app.use(cors());

app.get('/', (req, res) => {
    res.send('learnVerse Server is running')
})


app.listen(port => {
    console.log(`learnVerse server is running ${port}`);
})