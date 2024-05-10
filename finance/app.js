let incomeValue = 0;
let expenseValue = 0;

function addIncome() {
    const amount = parseFloat(document.getElementById("amount").value);
    if (!isNaN(amount) && amount > 0) {
      incomeValue += amount;
        updateSummary();
        clearinput();
    }
}

function addExpense() {
  const amount = parseFloat(document.getElementById("amount").value);
  if (!isNaN(amount) && amount > 0) {
      expenseValue += amount;
      updateSummary();
      clearinput();
  }
}

function updateSummary() {
    const savingsValue = incomeValue - expenseValue;
    const savingsElement = document.getElementById("savingsValue");
    const incomeElement = document.getElementById("incomeValue");
    const expenseElement = document.getElementById("expenseValue");

    incomeElement.textContent = incomeValue.toFixed(2);
    expenseElement.textContent = expenseValue.toFixed(2);
    savingsElement.textContent = savingsValue.toFixed(2);
}

function clearinput() {
    document.getElementById("amount").value = "";
}
