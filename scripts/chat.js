// adding new chat documents
// setting up a real-time listener to get new chats
// updating the username
// updating the room


class Chatroom {
    constructor(room, username) {
        this.room = room;
        this.username = username;
        this.chats = db.collection('chats')
    }
    async addChat(message) {
        // format a chat object 
        const now = new Date();
        const chat = {
            message,
            username: this.username,
            room: this.room,
            created_at: firebase.firestore.Timestamp.fromDate(now)
        };
        // save the chat document
        const response = await this.chats.add(chat);
        return response;
    }
}

const chatroom = new Chatroom('gaming', 'olivia');

chatroom.addChat('hello everyone')
    .then(() => console.log('chat added'))
    .catch(error => console.log(error))
