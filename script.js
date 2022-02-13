//for button
function AddTransaction(){
    var item = document.getElementById("text").value;
    var money = document.getElementById("amount").value;
    var values = [];
    var value = {
        name:item,
        price:money
    }
    if(JSON.parse(localStorage.getItem("items"))=== null){
        values.push(value);
        localStorage.setItem("items",JSON.stringify(values));
    }else{
        var localitem = JSON.parse(localStorage.getItem("items"))
        localitem.map(data=>{
            values.push(data)
        });
        values.push(value)
    }
    localStorage.setItem("items",JSON.stringify(values));
    
}

//for displaying
var trans = JSON.parse(localStorage.getItem("items"))
  trans.map(data=>{
      var show = `<li><span>${data.name}</span><span class="plus">${data.price}</span></li>`
      document.getElementById("list").innerHTML+=show;
  });
  
//for calculating and displaying negative amount
var Mminus = trans.filter(data=>{
    if(data.price < 0)
    return data;
});
var count1 = 0;
for(var i=0;i<Mminus.length;i++){
    count1+=(-Mminus[i].price);
}

//for calculating and displaying possitive amount
var Mplus = trans.filter(data=>{
    if(data.price >0)
    return data;
});
var count2=0;
for(var i=0;i<Mplus.length;i++){
    count2 +=(+Mplus[i].price)
}
document.getElementById("money-plus").innerHTML = '+$'+count2;
document.getElementById("money-minus").innerHTML = '-$'+count1;

//for calculating and displaying total
var total = count2 - count1;
document.getElementById("balance").innerHTML = '$'+total;