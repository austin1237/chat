const validator = require("validator");
const invalidText = new Error("Message must be a string and have at least one character");
const invalidName = new Error("Name must be a string and have at least one character");

const validateMessage = (message) =>{

    if (validator.isEmpty(message.text)){
        throw invalidText
    } 

    if (validator.isEmpty(message.name)){
        throw invalidName;
    } 

}

exports.validateMessage = validateMessage;
exports.invalidText = invalidText;
exports.invaldName = invalidName;

