const chatForm = document.getElementById('chat-form');

chatForm.addEventListener('submit', (e) => {
  e.preventDefault();
  sendMessage();
});

const chatBox = document.getElementById('chat-box');
const userInput = document.getElementById('user-input');
userInput.focus();

let currentNode = null;
let history = []; // stack to track where we’ve been

// Start conversation
function startConversation() {
  history = [];
  goToNode('root');
}

function sendMessage() {
  const text = userInput.value.trim();
  if (text === '') return;

  appendMessage(text, 'user');
  userInput.value = '';

  setTimeout(() => {
    handleUserChoice(text);
  }, 600);
}

function handleUserChoice(choice) {
  const options = getOptionsWithNavigation(currentNode);
  const selected = options.find((opt) => opt.text.startsWith(choice + '.'));

  if (!selected) {
    appendMessage('Please choose a valid option number.', 'bot');
    return;
  }

  if (selected.next === 'back') {
    history.pop(); // remove current
    const prev = history.pop(); // step back one more
    if (prev) {
      goToNode(prev);
    } else {
      goToNode('root');
    }
  } else if (selected.next === 'reset') {
    startConversation();
  } else {
    goToNode(selected.next);
  }
}

function goToNode(nodeKey) {
  currentNode = conversation[nodeKey];
  history.push(nodeKey);

  // Append the main message
  appendMessage(currentNode.message, 'bot');

  const options = getOptionsWithNavigation(currentNode);
  if (options.length > 0) {
    appendOptions(options);
  }
}

// Render options as a single "bubble" with clickable buttons
function appendOptions(options) {
  const msgDiv = document.createElement('div');
  msgDiv.classList.add('message', 'options');

  const bubble = document.createElement('div');
  bubble.classList.add('bubble');

  options.forEach((opt) => {
    const btn = document.createElement('button');
    btn.textContent = opt.text;
    btn.style.display = 'block';
    btn.style.margin = '4px 0';
    btn.style.fontSize = '12px';
    btn.style.cursor = 'pointer';

    btn.addEventListener('click', () => {
      appendMessage(opt.text, 'user'); // show user choice
      handleOptionSelection(opt);
    });

    bubble.appendChild(btn);
  });

  msgDiv.appendChild(bubble);
  chatBox.appendChild(msgDiv);
  chatBox.scrollTop = chatBox.scrollHeight;
}

// Handles both click buttons and typed numbers
function handleOptionSelection(selectedOption) {
  if (!selectedOption) return;

  if (selectedOption.next === 'back') {
    history.pop(); // remove current
    const prev = history.pop(); // step back one more
    if (prev) goToNode(prev);
    else goToNode('root');
  } else if (selectedOption.next === 'reset') {
    startConversation();
  } else {
    goToNode(selectedOption.next);
  }
}

// Keep the typed number logic
function handleUserChoice(choice) {
  const options = getOptionsWithNavigation(currentNode);
  const selected = options.find((opt) => opt.text.startsWith(choice + '.'));
  if (!selected) {
    appendMessage('Please choose a valid option number.', 'bot');
    return;
  }
  handleOptionSelection(selected);
}

function getOptionsWithNavigation(node) {
  const opts = [...node.options];

  return opts;
}

function appendMessage(message, sender) {
  const msgDiv = document.createElement('div');
  msgDiv.classList.add('message', sender);

  const bubble = document.createElement('div');
  bubble.classList.add('bubble');
  bubble.textContent = message;

  msgDiv.appendChild(bubble);
  chatBox.appendChild(msgDiv);
  chatBox.scrollTop = chatBox.scrollHeight;
}
