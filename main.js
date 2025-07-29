let transcript = [];

function sendMessage() {
  const input = document.getElementById('userInput').value;
  if (input.trim() === '') return;
  const chatBox = document.getElementById('chatBox');
  const userMessage = `You: ${input}\n`;
  chatBox.innerText += userMessage;
  transcript.push(userMessage);
  document.getElementById('userInput').value = '';

  // Simulated AI response
  const aiResponse = `小书童: That's a thoughtful question. Let's reflect on it together.\n`;
  chatBox.innerText += aiResponse;
  transcript.push(aiResponse);
}

function downloadTranscript() {
  const blob = new Blob([transcript.join('\n')], { type: 'text/plain' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'dialogus_transcript.txt';
  a.click();
}
