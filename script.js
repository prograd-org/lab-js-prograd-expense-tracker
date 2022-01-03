if(localStorage.getItem("Income")==null)
        {
            document.getElementById("money-plus").innerHTML="+$0.00";
        }
        else{
            document.getElementById("money-plus").innerHTML="+$"+localStorage.getItem("Income");

        }
        if(localStorage.getItem("Expense")==null)
        {
            document.getElementById("money-minus").innerHTML="-$0.00";
        }
        else{
            document.getElementById("money-minus").innerHTML="-$"+localStorage.getItem("Expense");
        }
        if(localStorage.getItem("Income")!=null && localStorage.getItem("Expense")!=null)
        {
            let balance = parseInt(localStorage.getItem("Income"))-parseInt(localStorage.getItem("Expense"));
            document.getElementById("balance").innerHTML="$"+balance; 
        }
        else{
            let balance=0;
            if(localStorage.getItem("Income")==null && localStorage.getItem("Expense")!=null)
           { balance=parseInt(localStorage.getItem("Expense"));
           document.getElementById("balance").innerHTML="-$"+balance; 
        }
            else if(localStorage.getItem("Expense")==null && localStorage.getItem("Income")!=null)
           { balance=parseInt(localStorage.getItem("Income"));

            document.getElementById("balance").innerHTML="$"+balance; 
        }
        else
        {
            document.getElementById("balance").innerHTML="$"+balance; 
        }
        }
        let addItem = () =>{
            for(let i=0;i<localStorage.length;i++)
            {
                let key=localStorage.key(i);
                if(key!="Income" && key!="Expense")
                {let value=parseInt(localStorage.getItem(key));

                let li=document.createElement("li");
                if(value<0)
               {

                li.setAttribute("class","plus");
               }
                else{
                    li.setAttribute("class","minus");
                }
                li.innerHTML="<p>"+key+"</p><p> "+value+"</p>";
                document.getElementById("list").appendChild(li);
            }
        }

        }
        addItem();
let addTransaction = () =>{
    let key = document.querySelector("#text").value;
    let value = document.querySelector("#amount").value;
    localStorage.setItem(key , value);
    expenseAndIncome(key,value);

}

let expenseAndIncome = (key,value) => {
    if(value>0)
    {  
        let income=0;
        if(localStorage.getItem("Income")==null)
        {
                income = 0;
                localStorage.setItem("Income",parseInt(value)+income);
        } 
        else
        {
           income=parseInt(localStorage.getItem("Income"));

    localStorage.removeItem("Income");
        localStorage.setItem("Income",parseInt(value)+income);
        }

}
else{
    value=(-1)* parseInt(value);
    let expense = 0;
    if(localStorage.getItem("Expense")==null)
        {
            expense =0;
    localStorage.setItem("Expense",value+expense);
        }
        else{
           expense = parseInt(localStorage.getItem("Expense"));
            localStorage.removeItem("Expense");
            localStorage.setItem("Expense",value+expense);
        }


}

}
