const db = require('./config/keys').mongoURI
const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const app = express();

const questions = require('./routes/api/question')
//additional routes import here

app.use(express.json(), cors());

mongoose 
    .connect(db, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=> console.log("backend on"))
    .catch(err => console.log(err))

app.use('/api/questions', questions)
app.get('/', (req, res) =>  res.send("this works!"))
//additional routes import here

const port = process.env.PORT || 5000
app.listen(port, () => console.log(`listening on ${port}`))