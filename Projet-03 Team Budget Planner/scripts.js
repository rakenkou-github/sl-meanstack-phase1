// Get List of Thongs to Order

var selectInputs = document.getElementById('list');
console.log(selectInputs.length)

let res = [];

// Initiate Orders Table

const orderTable = document.getElementById('order_Table');

orderTable.innerHTML = '';

// Add Orders Details in the previous Table

const addToOrder = () => {


      res.push(
        {
        item: selectInputs.options[selectInputs.selectedIndex].text,
        qty: document.getElementById("qty").value,
        price: (selectInputs.options[selectInputs.selectedIndex].value * document.getElementById("qty").value)
      })
      
      orderTable.innerHTML += `
                  <tr>
                      <td>${selectInputs.options[selectInputs.selectedIndex].text}</td>
                      <td>${document.getElementById("qty").value}</td>
                      <td>$${(selectInputs.options[selectInputs.selectedIndex].value * document.getElementById("qty").value)}</td>
                  </tr>
              `;
      
} 

console.log(res);

// Get the Total of the Orders

const getTotalValue = () => {

  let total = 0;

  for(let i = 0; i < res.length;i++){

    total = total + res[i].price;
  
  }

  document.querySelector("#Order_Total").innerHTML = `:      $${total}`;  
  
}
