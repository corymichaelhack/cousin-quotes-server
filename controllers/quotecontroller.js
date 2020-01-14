const express = require('express');
const router = express.Router();
const sequelize = require('../db');
const QuoteModel = sequelize.import('../models/quote');

//get all quotes
router.get('/quotes', (req, res) => {
res.send("this is the quote get route");
});

router.post('/addquote', (req, res)=>{
    let quote = req.body.addedQuote.quote

    QuoteModel.create({
        quote: quote
    }).then(
        response => {
            res.json({
                quote: quote
            })
        },
        error => {
            res.send("Something sent")
        }
        );
});


module.exports = router;