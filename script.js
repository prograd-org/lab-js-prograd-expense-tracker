var listEle = document.querySelector('#list');
var button = document.querySelector('.btn');
var income = 0;
var expense = 0;
function display() {
    for (var i = 0; i < localStorage.length; i++) {
        var transactionList = document.createElement('li');
        var amount = localStorage.getItem(localStorage.key(i));
        var input = localStorage.key(i);
        if (amount > 0) {
            income = income + parseInt(amount);
            transactionList.setAttribute('class', 'plus');
            //   transactionList.appendChild(document.createTextNode(input + '     ' + amount));
            transactionList.textContent = input + '     ' + amount;
        } else {
            expense -= amount;
            transactionList.setAttribute('class', 'minus');
            transactionList.textContent = input + '     ' + amount;
        }
        listEle.appendChild(transactionList);
    }
    document.querySelector('#money-plus').textContent = '$' + income;
    document.querySelector('#money-minus').textContent = '$' + expense;
    document.querySelector('#balance').textContent = '$' + (income - expense);
}

//add transaction to the localStorage on click of "Add transaction" button
button.addEventListener('click', addItems);

function addItems() {
    var input = document.querySelector('#text').value;
    var amount = document.querySelector('#amount').value;
    window.localStorage.setItem(input, amount);
}

window.onload = () => {
    display();
}
