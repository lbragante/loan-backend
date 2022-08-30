const Joi = require('@hapi/joi');

const loanValidation = (data) => {
    const schema = Joi.object({
        name: Joi.string().min(3).required(),
        amount: Joi.number().min(1).required(),
        installments: Joi.number().min(1).required()
    });
    return schema.validate(data);
}

module.exports.loanValidation = loanValidation;
