let userInput = document.querySelector("#date");
userInput.max = new Date().toISOString().split("T")[0];

function getDaysInMonth (year, month) {
  return new Date(year, month, 0).getDate();
}

