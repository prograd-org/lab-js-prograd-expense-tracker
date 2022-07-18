let stgVal = JSON.parse(JSON.stringify(localStorage));
const listCont = document.querySelector("#list");
var income = 0, expense = 0;
for(const item in stgVal){
    if(stgVal[item] < 0){
        listCont.innerHTML += `<li class="minus">${item}<span>${stgVal[item]}</span></li>`;
        expense += Number(stgVal[item]);
    }else{
        listCont.innerHTML += `<li class="plus">${item}<span>+${stgVal[item]}</span></li>`;
        income += Number(stgVal[item]);
    }
}

document.querySelector("#money-plus").innerHTML = `+$${income.toFixed(2)}`;
document.querySelector("#money-minus").innerHTML = `-$${Math.abs(expense).toFixed(2)}`;
if(income-expense > 0)
    document.querySelector("#balance").innerHTML = `$${(income+expense).toFixed(2)}`;
else
document.querySelector("#balance").innerHTML = `-$${Math.abs(income+expense).toFixed(2)}`;


var addTransactionBtn = document.querySelector("#addTransactionButton");
let des = document.querySelector("#text");
let amt = document.querySelector("#amount");
addTransactionBtn.onclick = () => {
    localStorage.setItem(des.value, amt.value);
}