// 1.  adding new chat documents
// 2. setting up a real-time listener to get new chats
// 3. updating the username
// 4. updating the room

// This class manages the chatroom data 
class Chatroom {
    constructor(room, username) {
        this.room = room;
        this.username = username;
        this.chats = db.collection('chats')
    }
    // ===> (1)
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
    // ===> (2)
    getChats(callback) {
        this.chats
            // listen to documents with certain properties
            .where('room', '==', this.room)
            // order documents
            .orderBy('created_at')
            .onSnapshot((snapshot) => {
                snapshot.docChanges().forEach(change => {
                    if (change.type === 'added') {
                        // update the ui
                        callback(change.doc.data())
                    }
                })
            });
    }
}

const chatroom = new Chatroom('general', 'olivia');

// (2) callback function
chatroom.getChats((data) => {
    console.log(data)
})