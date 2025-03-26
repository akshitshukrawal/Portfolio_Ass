const geminiBot = async (message) => {
    try {
      const response = await fetch("http://localhost:5000/api/v1/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message })
      });
  
      const data = await response.json();
      return data.response;
    } catch (error) {
      console.error("Error fetching from backend:", error);
      return "Error fetching response.";
    }
  };
  
  export default geminiBot;
  