
const validator = require("validator");


function validateUser(data) {
const mandatoryField = ["firstName","emailId","age"]

        const IsAllowed = mandatoryField.every((k) => Object.keys(data).includes(k));
        if(!IsAllowed)
             throw new Error("Fields Missing");

        if(!validator.isEmail(data.emailId))
            throw new Error("Invalid Email");

        if(!validator.isStrongPassword(data.password))
            throw new Error("Password is not strong");

        const nameLength = data.firstName.length;
        if(!(nameLength>=3 && nameLength<=20))
            throw new Error ("Name length should be between 3 to 20 charector");
    };

module.exports = validateUser;