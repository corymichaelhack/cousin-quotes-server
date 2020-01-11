const express = require('express');
const router = express.Router();
const sequelize = require('../db');
const QuoteModel = sequelize.import('../models/quote');

//get all quotes
router.get('/quotes', (req, res) => {
res.send("this is the quote get route");
});

router.post('/addquote', (req, res)=>{
    let addedQuote = "New quote added";

    QuoteModel.create({
        quote: addedQuote
    }).then( reposnse => {
        res.send("Sent through")
    })
    
});


module.exports = router;