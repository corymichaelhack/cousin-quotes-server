require('dotenv').config();
const express = require('express');
const app = express();
const quote = require('./controllers/quotecontroller');
const user = require('./controllers/usercontroller');

const sequelize = require('./db');

sequelize.sync(); // pass in {force: true} for resetting tables\

app.use(express.json())

//quote routes
app.use('/quote', quote);
app.use('/user', user);

//home routes
app.use('/', (req, res)=>{
    res.send("Home page");
});

app.listen(3000, () => {
    console.log('App is listening on port 3000')
})