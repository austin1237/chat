const messageProvider = require("../data/providers/messageProvider");

const setUp =  (io, db) =>{

    io.on('connection', (socket) =>{
        socket.on('sendMessage', async (message) =>{
        try{
            message.db = db
            await messageProvider.addNewMessage(message)
            console.log('message added', "emitting now")
            io.emit('receiveMessage', message);
        } catch (e) {
           console.error(e)
        }
        });
    });

}

exports.setUp = setUp