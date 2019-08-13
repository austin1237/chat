const messageProvider = require("../data/providers/messageProvider");

const getMessage = async (req, res, next) => {
    let messages = [];
    try {
        messages = await messageProvider.getMessages(req)
    } catch (e){
        next(e)
    }
    return res.status(200).json(messages);
}


exports.getMessage = getMessage;