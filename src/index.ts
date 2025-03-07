import "./style.scss";

document.addEventListener("DOMContentLoaded", () => {
    const num1 = document.getElementById("num1") as HTMLInputElement;
    const num2 = document.getElementById("num2") as HTMLInputElement;
    const addButton = document.getElementById("addButton");
    const result = document.getElementById("result");
  
    addButton?.addEventListener("click", async () => {
      const value1 = parseFloat(num1.value);
      const value2 = parseFloat(num2.value);
      
      const response = await fetch("http://localhost:3000/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ num1: value1, num2: value2 })
      });
      
      const data = await response.json();
      if (result) result.textContent = `Result: ${data.sum}`;
    });
  });