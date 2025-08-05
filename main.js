async function askDialogus() {
  const userInput = document.getElementById("userInput").value;
  const responseDiv = document.getElementById("response");

  responseDiv.textContent = "Thinking...";

  try {
    const res = await fetch("http://localhost:3000/ask", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ prompt: userInput })
    });

    const data = await res.json();
    responseDiv.textContent = data.reply || "No response received.";
  } catch (err) {
    responseDiv.textContent = "Error talking to Dialogus.";
    console.error(err);
  }
}
