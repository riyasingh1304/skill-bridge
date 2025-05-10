// Toggle Chatbot Popup

const chatbot = document.getElementById('chatbot');
const chatPopup = document.getElementById('chat-popup');

chatbot.addEventListener('click', () => {
  if (chatPopup.style.display === 'block') {
    chatPopup.style.display = 'none';
  } else {
    chatPopup.style.display = 'block';
  }
});