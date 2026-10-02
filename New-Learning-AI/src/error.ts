async function main() {
  const errorMessage = process.argv.slice(2).join(" ");

  if (!errorMessage) {
    console.error("Please provide an error message.");
    process.exit(1);
  }

  const response = await fetch("http://localhost:11434/api/chat", {
    method: "POST",

    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify({
      model: "llama3.2",

      messages: [
        {
          role: "system",
          content:
            "You are an expert software debugging assistant. Explain errors clearly. Identify the likely cause, explain the relevant concept, and suggest a practical fix. Do not invent information.",
        },
        {
          role: "user",
          content: `Explain this developer error:

${errorMessage}`,
        },
      ],

      stream: false,
    }),
  });

  if (!response.ok) {
    throw new Error(`Ollama API failed: ${response.status}`);
  }

  const data = await response.json();

  console.log("AI answer:");
  console.log(data.message.content);
}

main();
