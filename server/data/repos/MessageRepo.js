const getMessages = async (searchOptions) => {
    let {db} = searchOptions;
    let messageQuery = db
    .select('users.name', "messages.text")
    .from("messages")
    .join('users', 'users.ID', '=', 'messages.authorID')
    .orderBy('messages.ID', 'desc')
    
    return messageQuery
}

const addMessage = async (searchOptions) => {
    let {authorID, text, db} = searchOptions;
    let messageQuery = db('messages')
    .insert({authorID: authorID, text: text})  
    
    return messageQuery
}

const getUserId = async (searchOptions) => {
    let {name, db} = searchOptions;
    let userQuery = db
    .select("ID")
    .from("users")
    .where("name", name)
    return userQuery
}

const addUser = async (searchOptions) => {
    let {name, db} = searchOptions;
    let messageQuery = db('users')
    .insert({name: name})  

    return messageQuery
}


exports.addUser = addUser;
exports.getUserId = getUserId;
exports.addMessage = addMessage;
exports.getMessages = getMessages;

