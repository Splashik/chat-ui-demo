// chat.js — логіка чату та перемикання теми

let isDark = false;

function toggleTheme() {
  isDark = !isDark;
  document.body.classList.toggle('dark', isDark);
  document.getElementById('theme-btn').textContent =
    isDark ? 'Світла тема' : 'Темна тема';
}

function sendMessage() {
  const input = document.getElementById('user-input');
  const text = input.value.trim();
  if (!text) return;

  const messages = document.getElementById('messages');
  const userMsg = document.createElement('div');
  userMsg.className = 'msg user';
  userMsg.textContent = text;
  messages.appendChild(userMsg);
  input.value = '';
  setTimeout(() => {
    const botMsg = document.createElement('div');
    botMsg.className = 'msg bot';
    botMsg.textContent = 'Дякую за повідомлення! Інформацію збережено.';
    messages.appendChild(botMsg);
    messages.scrollTop = messages.scrollHeight;
  }, 600);

  messages.scrollTop = messages.scrollHeight;
}

document.getElementById('user-input').addEventListener('keydown', function(e) {
  if (e.key === 'Enter') sendMessage();
});