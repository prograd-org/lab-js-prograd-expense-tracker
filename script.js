let addTransaction = document.querySelector(".btn")

addTransaction.addEventListener("click", (e) => {
  const text = document.getElementById("text").value
  const amount = Number(document.getElementById("amount").value)
  const balance = Number(
    document.getElementById("balance").textContent.substring(1)
  )
  if (amount < 0 && balance + amount < 0) {
    alert("Not enough balance for this transaction.")
  } else if (!text || !amount) {
    alert("Text and Amount are required fields!")
  } else {
    const id = Math.random().toString(36).substring(2, 9)
    localStorage.setItem(id, JSON.stringify({ text, amount }))
  }
})

function history() {
  let income = 0,
    expense = 0

  Object.keys(localStorage).forEach((key) => {
    const transaction = JSON.parse(localStorage.getItem(key))
    const amount = Number(transaction.amount)
    const transName = transaction.text
    amount < 0 ? (expense += amount) : (income += amount)

    const item = document.createElement("li")
    item.classList.add(`${amount < 0 ? `minus` : `plus`}`)
    const itemText = document.createElement("p"),
      itemAmount = document.createElement("p")
    itemText.textContent = transName
    itemAmount.textContent = `${amount}`

    item.appendChild(itemText)
    item.appendChild(itemAmount)

    document.getElementById("list").appendChild(item)
  })

  document.getElementById("money-plus").textContent = `+$${income}`
  document.getElementById("money-minus").textContent = `-$${expense}`
  document.getElementById("balance").textContent = `$${income + expense}`
}

window.onload = () => {
  history()
}
