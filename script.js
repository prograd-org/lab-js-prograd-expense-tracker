var number = 0
var expense=[]
localStorage.clear()
function createStorage()
{
    number=number+1
    var key = document.getElementById('text').value;
    var value = document.getElementById('amount').value;

    //Checking fields are empty or not
    if(key=='' ||  value == '')
    {
        alert ("Field cant be empty")
    }
    //Checking entered amount is zero or not
    else if(value==0)
    {
        alert("Amount cant be 0")
    }
    //Adding items in localstorage
    else
    {
        localStorage.setItem(key,value)

    //pushing values to array
    expense.push({
            id : number,
            amount : value,
            text : key
        })

         console.log(expense)

        //Calling the function storeMyValues
        storeMyValues(value)

        //Calling the function createList()
        createList(key,value);

        document.getElementById('form').reset();
    }
}

function storeMyValues(money)
{
    var total = document.getElementById('balance').innerText
    total = parseInt(total)

    money = parseInt(money);

    //checking the type, income or expense
    if(money > 0)
    {
        var income = document.getElementById('money-plus').innerText
        updatedTotal = document.getElementById('balance').innerHTML = money + total
        updatedIncome = document.getElementById('money-plus').innerHTML=(parseInt(income))+money
    }
    else  
    {
        var expense = document.getElementById('money-minus').innerText
        updatedTotal = document.getElementById('balance').innerHTML = total + money
        updatedExpense = document.getElementById('money-minus').innerHTML = Math.abs((parseInt(expense)) - money)
    }
  
}
function createList(text,value)
{
    //creating list 

    var li = document.createElement("li")
    var t =document.createTextNode(text)
    li.appendChild(t)
    document.getElementById('list').appendChild(li)
    var span = document.createElement("SPAN");
    var txt = document.createTextNode(value);
    span.className = "value";
    span.appendChild(txt);
    li.appendChild(span);

    //adding class to list
    
    if(value>0)
    {
        li.className="plus"
    }
    else
    {
        li.classList="minus"
    }
}



