const messageProvider = require("../data/providers/messageProvider");
const validator = require('../validator');

const setUp =  (io, db) =>{

    io.on('connection', (socket) =>{
        socket.on('sendMessage', async (message) =>{
            message.db = db
            try{
                validator.validateMessage(message)
            } catch (e){
                console.error(e)
                if (e !== validator.invaldName){
                    errMessage = {
                        name: 'server',
                        text: `error occured during validation ${e}`
                    }
                    return io.emit('receiveMessage', errMessage);
                }
                message.name = 'anonymous';
                
            }

            try{
                await messageProvider.addNewMessage(message)
                console.log('message added', "emitting now")
            } catch (e) {
                console.error(e)
                errMessage = {
                    name: "server",
                    text: `error occured trying to save the message to the db`
                }
                return io.emit('receiveMessage', errMessage);
            }

            io.emit('receiveMessage', message);
            });
    });

}

exports.setUp = setUp