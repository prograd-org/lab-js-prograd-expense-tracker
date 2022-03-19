window.onload = () => renderTranscationList();

let addtranscation = document.querySelector(".btn");
addtranscation.addEventListener("click", transcationlist);

function transcationlist() {
    let transcationname = document.querySelector("#text").value;
    let transcationamount = Number.parseFloat(
        document.querySelector("#amount").value
    );

    if (transcationname.length === 0 || isNaN(transcationamount))
        return alert("Name/Amount is empty");

    if (transcationname.length >= 20)
        return alert("Name is longer than excepted");

    let incometag = document.querySelector("#money-plus");
    let expensetag = document.querySelector("#money-minus");

    if (transcationamount < 0) {
        renderAmount(expensetag, transcationamount);
    } else {
        renderAmount(incometag, transcationamount);
    }

    let transctiondetails = {
        amount: transcationamount,
        id: getRandomNumber(1111111, 99999999),
        text: transcationname,
    };

    localStorage.setItem(localStorage.length, JSON.stringify(transctiondetails));
    let positive = transcationamount > 0 ? true : false;

    createlist(transcationname, transcationamount, positive);

    return false;
}

let renderAmount = (tag, amount) => {
    let balancetag = document.querySelector("#balance");
    let balance = extractdigit(balancetag.innerHTML, 1);

    let temp = tag.innerHTML;
    temp = extractdigit(temp, 2);

    temp += Math.abs(amount);
    tag.innerHTML = "-$" + temp.toFixed(2);
    balance += amount;
    balancetag.innerHTML = "$" + balance.toFixed(2);
};

let extractdigit = (temp, index) => Number.parseFloat(temp.substr(index));

let getRandomNumber = (min, max) =>
    Math.floor(Math.random() * (max - min) + min);

let renderTranscationList = () => {
    let balance = 0,
        income = 0,
        expense = 0;
    for (let i = 0; i < localStorage.length; ++i) {
        let tempobj = JSON.parse(localStorage[i]);
        let positive = tempobj.amount > 0 ? true : false;
        if (positive) income += tempobj.amount;
        else expense += tempobj.amount;

        balance += tempobj.amount;
        createlist(tempobj.text, tempobj.amount, positive);
    }
    let balancetag = document.querySelector("#balance");
    balancetag.innerHTML = "$" + balance.toFixed(2);

    let incometag = document.querySelector("#money-plus");
    incometag.innerHTML = "-$" + income.toFixed(2);

    let expensetag = document.querySelector("#money-minus");
    expensetag.innerHTML = "-$" + expense.toFixed(2);
};

let createlist = (transcationname, transcationamount, positive) => {
    let liclass = positive ? "plus" : "minus";
    let symbol = positive ? "+ " : "";

    //label tag
    let label = document.createElement("label");
    label.innerHTML = transcationname;

    //spantag

    let span = document.createElement("span");
    span.setAttribute("class", "money " + liclass);
    span.innerHTML = symbol + transcationamount;

    // li tag
    let li = document.createElement("li");
    li.setAttribute("class", liclass);
    li.appendChild(label);
    li.append(span);

    document.querySelector(".list").appendChild(li);
};