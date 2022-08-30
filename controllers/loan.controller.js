const express = require('express');
const router = express.Router();
const { loanValidation } = require('../config/validations.config');
const rate = 5;

router.post('/create', async (req, res) => {
    const { error } = loanValidation(req.body);
    if (error) {
        return res.status(400).send({
            message: error.details[0].message
        });
    }
    try {
        const total = (req.body.amount * (rate * 0.01)) + req.body.amount;
        const valueInstallments = total / req.body.installments;
        const loan = {
            name: req.body.name,
            installments: req.body.installments,
            valueInstallments: valueInstallments,
            total: total
        };
        console.log(loan);
        res.status(200).send(loan);
    } catch (error) {
        res.status(500).send({
            message: error.message || 'An error occurred while simulating the loan'
        });
    }
});

module.exports = router;