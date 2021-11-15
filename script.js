let balance = 0.00;
let income = 0.00;
let expense =0.00;
function btnClick()
{
    let spentEl = document.getElementById("text").value;
    let amountEl = document.getElementById("amount").value;
    localStorage.setItem(spentEl, amountEl);
    
    if(Number(localStorage.getItem(spentEl))>0){
        document.getElementById("list").innerHTML+=`<li class="plus">${spentEl}_______________${amountEl}</li>`;
        income += Number(localStorage.getItem(spentEl));
        document.getElementById("money-plus").textContent = `$${income}.00`;
    }
    else if(Number(localStorage.getItem(spentEl))<0){
        document.getElementById("list").innerHTML+=`<li class="minus">${spentEl}_______________${amountEl}</li>`;
        expense += (Number(localStorage.getItem(spentEl)))*(-1);
        document.getElementById("money-minus").textContent = `$${expense}.00`;
    }
    balance += Number(localStorage.getItem(spentEl));
    document.getElementById("balance").textContent = `$${balance}.00`;
    event.preventDefault();
}