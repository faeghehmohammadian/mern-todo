const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const router = require('./router')
const morgan = require('morgan')
const cors = require('cors')

dotenv.config();
app.use(express.json())
app.use(cors());
app.use(morgan('tiny'));
app.use(router);
app.get("/", (req, res) => {
    res.send('Hello');
});
console.log(process.env.MONGO_URL)
mongoose.connect(process.env.MONGO_URL).then(() => {
    app.listen(8080, () => {
        console.log(`Mongoose Connect and Server running on PORT: 8080/`);
    });
})