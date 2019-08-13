const messageRepo = require("../repos/MessageRepo")

const addNewMessage = async (messageConfig) => {
    let {db, name, text} = messageConfig;
    try {
      let idResponse = await messageRepo.getUserId({name: name, db: db});
      if (idResponse.length === 0){
        await messageRepo.addUser({name: name, db: db})
        idResponse = await messageRepo.getUserId({name: name, db: db});
      }
      let id = idResponse[0].ID
      return await messageRepo.addMessage({'authorID': id, text: text, db: db}) 
    } catch (e) {
      throw e;
    }
};

const getMessages = async (queryConfig) => {
    try {
      return await messageRepo.getMessages(queryConfig);
    } catch (e) {
      throw e;
    }
};

exports.addNewMessage = addNewMessage;
exports.getMessages = getMessages;