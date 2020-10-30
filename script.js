const addTransaction = document.querySelector("#form .btn");
const text = document.getElementById("text");
const amount = document.getElementById("amount");
const totalBalance = document.getElementById("balance");
const income = document.getElementById("money-plus");
const expense = document.getElementById("money-minus");
const list = document.getElementById("list");

let inc = 0;
let exp = 0;
let id = 0;

//progression2 adding to localstorage
addTransaction.addEventListener("click", (event) => {
    event.preventDefault();
    let name, money, transaction;
    name = text.value;
    money = parseInt(amount.value);
  
    if (name !== "" &&  money !== 0) {
      if(money > 0)
      {
           inc = inc + money;
      }
      else
      {
          exp = exp + money;
      }
      transaction = {
        id: id++,
        text: name,
        amount: money,
        inc: inc,
        exp: exp,
      };
      localStorage.setItem(id - 1, JSON.stringify(transaction));
      income.textContent = inc;
      expense.textContent = exp;
      calculateTotal(inc, exp);
      render(transaction);
    } 
  });

  function storage() {
    var values = [],
      keys = Object.keys(localStorage),
      i = keys.length;
    let temp = 0;
  
    while (temp < i) {
      values.push(localStorage.getItem(keys[temp++]));
    }
  
    return values;
  }
  
  
  const calculateTotal = (income, expenses) => {
    if(income > expenses)
    {
       totalBalance.textContent = `$${(income + expenses).toFixed(2)}`;
    }
    else
    {
        totalBalance.textContent = `$${expenses}`;
    }
  };

  const render = (obj) => {
    let Html;
    obj.amount > 0
      ? (Html = `<li class="plus"><span>${obj.text}</span> +${obj.amount}</li>`)
      : (Html = `<li class="minus"><span>${obj.text}</span> -${Math.abs(
          obj.amount
        )}</li>`);
    list.insertAdjacentHTML("beforeEnd", Html);
  };
  
  renderOnload = (allValues) => {
    list.innerHTML = "";
    if (allValues.length > 0) {
      allValues.forEach((obj) => {
        let Html;
        let parsedObj = JSON.parse(obj);
        parsedObj.amount > 0
          ? (Html = `<li class="plus"><span>${
              parsedObj.text
            }</span>+${parsedObj.amount.toFixed(2)}</li>`)
          : (Html = `<li class="minus"><span>${parsedObj.text}</span>-${Math.abs(
              parsedObj.amount
            )}</li>`);
        list.insertAdjacentHTML("beforeEnd", Html);
      });
    }
  };
  
  window.onload = () => {
    allValues = storage();
  
    if (allValues.length > 0) 
    {
      id = JSON.parse(allValues[allValues.length - 1]).id;
      let parsedObj = JSON.parse(localStorage.getItem(allValues.length - 1));
      console.log(parsedObj);
      calculateTotal(parsedObj.inc, parsedObj.exp);
      income.textContent = `+$${parsedObj.inc.toFixed(2)}`;
      expense.textContent = `-$${Math.abs(parsedObj.exp).toFixed(2)}`;
      console.log(allValues);
      renderOnload(allValues);
    }
  };
  