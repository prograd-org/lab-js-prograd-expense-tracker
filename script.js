let balance = 0.00;
let income =0.00;
let expense =0.00;

function transactionButton(){
    let spentAmt = document.getElementById("text").value;
    let amt = document.getElementById("amount").value;
    localStorage.setItem(spentAmt, amt);

    if(Number(localStorage.getItem(spentAmt))>0){
        document.getElementById("list").innerHTML+=`<li class="plus">${spentAmt}__________${amt}</li>`;
        income +=Number(localStorage.getItem(spentAmt));
        document.getElementById("money-plus").textContent = `$${income}.00`;
    }

    else if(Number(localStorage.getItem(spentAmt))<0){
        document.getElementById("list").innerHTML+=`<li class="minus">${spentAmt}__________${amt}</li>`;
        expense += (Number(localStorage.getItem(spentAmt)))*(-1);
        document.getElementById("money-minus").textContent = `$${expense}.00`;
    }

    balance +=Number(localStorage.getItem(spentAmt));
    document.getElementById("balance").textContent = `$${balance}.00`;
    event.preventDefault();
}
