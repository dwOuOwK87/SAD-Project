function showPage(pageId) {
    // Hide all pages
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.style.display = 'none');

    // Show the selected page
    document.getElementById(pageId).style.display = 'block';
}

// Show the home page by default
document.addEventListener('DOMContentLoaded', () => {
    showPage('home');
});

document.addEventListener('DOMContentLoaded', () => {
    showPage('home');

    // Add event listener for the send button
    document.getElementById('send-button').addEventListener('click', sendMessage);
});

function sendMessage() {
    const chatText = document.getElementById('chat-text');
    const messageText = chatText.value.trim();

    if (messageText) {
        const messages = document.getElementById('messages');

        // Add user message
        const userMessage = document.createElement('div');
        userMessage.classList.add('message', 'user-message');
        userMessage.textContent = messageText;
        messages.appendChild(userMessage);

        // Clear input
        chatText.value = '';

        // Simulate bot response
        setTimeout(() => {
            const botMessage = document.createElement('div');
            botMessage.classList.add('message', 'bot-message');
            botMessage.textContent = 'This is a bot response.';
            messages.appendChild(botMessage);

            // Scroll to the bottom
            messages.scrollTop = messages.scrollHeight;
        }, 1000);
    }
}