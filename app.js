const express = require('express');
const app = express();
const quote = require('./controllers/quotecontroller');

const sequelize = require('./db');

sequelize.sync(); // pass in {force: true} for resetting tables

//quote routes
app.use('/quote', quote);

//home routes
app.use('/', (req, res)=>{
    res.send("Home page");
});

app.listen(3000, () => {
    console.log('App is listening on port 3000')
})