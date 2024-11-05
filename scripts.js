let loadingInterval;

function displayBotMessage(messageText) {
    const chatBox = document.getElementById('chat-box');
    const messageContainer = document.createElement('div');
    messageContainer.classList.add('message-container', 'received-container');

    const botImage = document.createElement('img');
    botImage.src = 'https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/google-gemini-icon.png';
    botImage.classList.add('bot-image');

    const botMessage = document.createElement('div');
    botMessage.classList.add('chat-message', 'received');
    botMessage.innerHTML = messageText;

    messageContainer.appendChild(botImage); // Add image first
    messageContainer.appendChild(botMessage); // Then add message
    chatBox.appendChild(messageContainer);

    chatBox.scrollTop = chatBox.scrollHeight;
}


// Show and hide loading animation
function showLoadingAnimation() {
    const chatBox = document.getElementById('chat-box');
    const loadingMessageContainer = document.createElement('div');
    loadingMessageContainer.classList.add('message-container', 'received-container', 'loading-container');

    const loadingMessage = document.createElement('div');
    loadingMessage.classList.add('chat-message', 'received');
    loadingMessage.innerHTML = ".";

    const botImage = document.createElement('img');
    botImage.src = 'https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/google-gemini-icon.png';
    botImage.classList.add('bot-image');

    loadingMessageContainer.appendChild(botImage);
    loadingMessageContainer.appendChild(loadingMessage);
    chatBox.appendChild(loadingMessageContainer);

    let dots = 1;
    loadingInterval = setInterval(() => {
        loadingMessage.innerHTML = '.'.repeat(dots);
        dots = (dots % 3) + 1;
    }, 150);
}

function hideLoadingAnimation() {
    clearInterval(loadingInterval);
    const loadingContainer = document.querySelector('.loading-container');
    if (loadingContainer) {
        loadingContainer.remove();
    }
}

// Handle the Enter keypress to submit the message
function handleKeyPress(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
}

function displayUserMessage(messageText) {
    const chatBox = document.getElementById('chat-box');
    const messageContainer = document.createElement('div');
    messageContainer.classList.add('message-container', 'sent-container');

    const userImage = document.createElement('img');
    userImage.src = 'https://cdn-icons-png.flaticon.com/512/9187/9187532.png';
    userImage.classList.add('user-image');

    const userMessage = document.createElement('div');
    userMessage.classList.add('chat-message', 'sent');
    userMessage.innerHTML = messageText;

    messageContainer.appendChild(userMessage); // Append message first
    messageContainer.appendChild(userImage);   // Then append image
    chatBox.appendChild(messageContainer);

    chatBox.scrollTop = chatBox.scrollHeight;
}