var charge=0;
var expense=0;
function func(){
    event.preventDefault();

    var text=document.getElementById('text').value;
    var amount=document.getElementById('amount').value;
    console.log(amount)

    if(amount>0){
           charge=charge+Number(amount);
        console.log(typeof(amount))
        document.getElementById("money-plus").innerHTML=charge;         

    }
    if(amount<0){
expense=expense+Number(amount);
console.log(typeof(amount))
document.getElementById("money-minus").innerHTML=expense;         

    }

 document.getElementById("balance").innerHTML=charge+expense;  


    localStorage.setItem(text,amount);
    var newElement=  document.createElement('li');


  console.log(newElement);
  newElement.innerHTML=text     +" \t     "  + amount;
    document.getElementById('list').appendChild(newElement)
}