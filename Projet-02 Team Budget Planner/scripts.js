// Function to add Expenses  with REST 

function addExpense(...expenses){
  let sum = 0;
  for (let expense of expenses){
    sum += expense;
  }
  return sum;
}

// Get Total og Exepenses

const getTotalValue = () => {
  let newspaper_inputvalue = document.getElementById("newspaper").value;
  let Water_inputvalue = document.getElementById("Water").value;
  let showinggum_inputvalue = document.getElementById("showinggum").value;

  let total = addExpense( parseFloat(newspaper_inputvalue), parseFloat(Water_inputvalue), parseFloat(showinggum_inputvalue));
  document.querySelector("#Order_Total").innerHTML = `:      ${total}`;


// Add All Expenses as Table

  expenses = [
    {
      item: "newspaper",
      price: document.getElementById("newspaper").value
    },
    {
      item: "Water",
      price: document.getElementById("Water").value
    },
    {
      item: "showinggum",
      price: document.getElementById("showinggum").value
    },
  ]

 

  const expenseTable = document.getElementById('expenseTable');

    expenseTable.innerHTML = '';

    for(let i = 0; i < 3; i++){
        expenseTable.innerHTML += `
            <tr>
                <td>${expenses[i].item}</td>
                <td>$${expenses[i].price}</td>
            </tr>
        `;
    }

};
