const { object, string, number, date } = require('yup');

// validtion schema


let validate;

exports.validate = object({
    name: string().required(),
    age: number().required().positive().integer(),
    email: string().email().required("must be a valid email address")
});