const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const router = require('./routes/router.js');

dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

mongoose
    .connect(process.env.MONGODB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(()=>{
        console.log("Connected to MongoDB");
    })
    .catch((err)=>{
        console.log(err);
    })



const port = process.env.PORT || 3000;

app.get('/', function (req, res) {
    res.send('Hello, World!');
  });


app.use(router);
  

app.listen(port, async () => {
  console.log(`Server is running at port ${port}`);
});
