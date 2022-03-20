
const remain = document.getElementById("balance");
const gain = document.getElementById("money-plus");
const list = document.getElementById("list");
const form = document.getElementById("form");
const text = document.getElementById("text");
const amount = document.getElementById("amount");
const loss = document.getElementById("money-minus");
const localStoragetrans = JSON.parse(localStorage.getItem("transactions"));
let transactions = localStorage.getItem("transactions") !== null ? localStoragetrans : [];
function addTransaction(command) 
{
    command.preventDefault();
    if (text.value.trim() === "" || amount.value.trim() === "") 
    {
        text.placeholder = "Enter text...";
        amount.placeholder = "Enter amount...";
    } 
    else 
    {
        const transaction = {
            id:ID(),
            text: text.value,
            amount: +amount.value,
        };
        transactions.push(transaction);
        addtransactionDOM(transaction);
        updateValues();
        updateLocalStorage();
        text.value = "";
        amount.value = "";
    }
}
function ID() {
  return Math.floor(Math.random() * 1000);
}
function addtransactionDOM(transaction) 
{
    const sign = transaction.amount < 0 ? "-" : "+";
    const item = document.createElement("li");
    item.classList.add(transaction.amount < 0 ? "minus" : "plus");
    item.innerHTML = `${transaction.text} 
    <span>${sign}${Math.abs(transaction.amount)}</span> 
    <button class="delete-btn" onclick="removetransaction(${transaction.id})">x</button>`;
    list.appendChild(item);
}
function updateValues() 
{
  const amounts = transactions.map((transaction) => transaction.amount);
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);
  const expense = (
    amounts.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0) * -1).toFixed(2);
  remain.innerText = `$${total}`;
  gain.innerText = `$${income}`;
  loss.innerText = `$${expense}`;
}
function removetransaction(id) {
  transactions = transactions.filter((transaction) => transaction.id !== id);
  updateLocalStorage();
  init();
}
function updateLocalStorage() {
  localStorage.setItem("transactions", JSON.stringify(transactions));
}
function init() {
  list.innerHTML = "";
  transactions.forEach(addtransactionDOM);
  updateValues();
}
init();
form.addEventListener("submit", addTransaction);