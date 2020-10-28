var total = 0;
var inc = 0;
var ex = 0;
document.getElementById("add").addEventListener("click", function () {
  var text = document.getElementById("text").value;
  var amount = document.getElementById("amount").value;
  var balance = document.getElementById("balance");

 
  localStorage.setItem(text, amount);

  total = parseInt(total);
  amount = parseInt(amount);
  total = total + amount;

  balance.innerHTML = total;
  var transaction = document.createElement("li");
  transaction.innerHTML = text + "      " + amount;
  document.getElementById("list").appendChild(transaction);

  var income = document.getElementById("money");
  var expense = document.getElementById("money-minus");
  
  inc = parseInt(inc);
  ex = parseInt(ex);
  if (amount > 0) {
    inc = inc + amount;
    income.innerHTML = inc;
    transaction.className = "plus";
  } else {
    ex = ex + amount;
    transaction.className = "minus";
    expense.innerHTML = ex;
  }
});
