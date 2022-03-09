// 1. render chat templates to the DOM
// 2. clear the list of chats (when the room changes)

class ChatUI {
    constructor(list) {
        this.list = list;
    }
    // ===> (1)
    render(data) {
        const html = `
            <li class="list-group-item">
                <span class="username">${data.username}:</span>
                <span class="message">${data.message}</span>
                <div class="timet">${data.created_at.toDate()}</div>
            </li>
        `;
        this.list.innerHTML += html;
    }
}

