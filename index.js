async function generateContent() {
  const input = document.getElementById("userInput").value;
  if (!input) return alert("Please enter instructions.");

  document.getElementById("output").innerText = "Generating...";

  const apiKey = "8oed3366e72ca42et0cf2f4b44f179e7";
  const context =
    "Provide a clear, precise and short answer and tell that you are not updated.";

  const apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${encodeURIComponent(
    input
  )}&context=${encodeURIComponent(context)}&key=${apiKey}`;

  console.log("Requesting:", apiUrl);

  try {
    const response = await fetch(apiUrl);

    console.log("Response status:", response.status);

    if (!response.ok) {
      const errorMessage = await response.text();
      throw new Error(`API error: ${response.status} - ${errorMessage}`);
    }

    const data = await response.json();
    console.log("API response:", data);

    document.getElementById("output").innerText =
      data.answer || "No response received.";
  } catch (error) {
    console.error("Error:", error);
    document.getElementById("output").innerText =
      "Error generating content. Check the console for details.";
  }
}
