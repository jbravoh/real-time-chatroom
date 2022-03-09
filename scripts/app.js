// dom queries
const chatList = document.querySelector('.chat-list')


// class instances 
const chatUI = new ChatUI(chatList);
const chatroom = new Chatroom('general', 'olivia');


// get chats and render
chatroom.getChats((data) => chatUI.render(data));
