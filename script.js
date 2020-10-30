
var count=0;
var count1=0;
function func(){
    event.preventDefault();
    
    var text=document.getElementById('text').value;
    var amount=document.getElementById('amount').value;
    console.log(amount)
  

 
   
    if(amount>0){
           count=count+Number(amount);
        console.log(typeof(amount))
        document.getElementById("money-plus").innerHTML=count;         
          
    }
    if(amount<0){
count1=count1+Number(amount);
console.log(typeof(amount))
document.getElementById("money-minus").innerHTML=count1;         
  
    }

 document.getElementById("balance").innerHTML=count+count1;  


  
    console.log("stored")
    localStorage.setItem(text,amount);
    var newElement=  document.createElement('li');
 
  
  console.log(newElement);
  newElement.innerHTML=text+" \t\t"+amount;
    document.getElementById('list').appendChild(newElement)
}


