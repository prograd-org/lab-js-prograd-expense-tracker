function addTransaction(){
    var myvar = {
        id: localStorage.length,
        name: document.getElementById("text").value,
        amount: document.getElementById("amount").value
    };
    console.log(myvar.id)
    if(myvar.name && myvar.amount)
        localStorage.setItem(myvar.id, JSON.stringify(myvar))
}
var totpos = 0.00, totneg = 0.00, balance = 0.00
len = localStorage.length 
for (let i = len; i>0; i--) {
    var item = JSON.parse(localStorage.getItem(i-1))
    var li = document.createElement("li")
    if(item.amount<0){
        li.classList.add("minus")
        totneg = totneg + parseFloat(item.amount)
        totneg.toFixed(2)
    }
    else {
        li.classList.add("plus")
        totpos = totpos + parseFloat(item.amount)
    }
    var ul = document.getElementById("list")
    ul.appendChild(li)
    li.innerHTML = "<div>"+item.name+"</div> <div>"+item.amount+"</div>" 
}
balance = totneg + totpos
totneg = totneg.toFixed(2)
totpos = totpos.toFixed(2)
balance = balance.toFixed(2)
document.getElementById("balance").innerHTML = "$"+balance
document.getElementById("money-plus").innerHTML = "+$"+totpos
document.getElementById("money-minus").innerHTML = "-$"+totneg