
let preAmount = 0;
document.getElementById("expense-form").addEventListener("submit", function(event){
   event.preventDefault();
   let expenseName = document.getElementById("expenseName");
   let amount = document.getElementById("amount");
   let category = document.getElementById("category");
   let date = document.getElementById("date");
   totalAmount = document.getElementById("totalAmount");
   totalAmount.textContent = parseInt(amount.value) + preAmount;
   preAmount = parseInt(totalAmount.textContent);

   let tbody = document.getElementById("tbody");
   let tr = document.createElement("tr");
   let td1 = document.createElement("td");
   td1.textContent = expenseName.value;
   let td2 = document.createElement("td");
   td2.textContent = amount.value;
   let td3 = document.createElement("td");
   td3.textContent = category.value;
   let td4 = document.createElement("td");
   td4.textContent = date.value;

   let td5 = document.createElement("td");
   td5.setAttribute("id", "actionButtons");
   let deleteButton = document.createElement("button");
   deleteButton.textContent = "Delete";
   deleteButton.setAttribute("id", "deleteButton");
   td5.appendChild(deleteButton);
   deleteButton.addEventListener("click", function(){
      let row = this.parentNode.parentNode;
      let amountToSubtract = parseInt(row.cells[1].textContent);
      preAmount -= amountToSubtract;
      totalAmount.textContent = preAmount;
      row.remove();
   })


   let editButton = document.createElement("button");
   editButton.textContent = "edit";
   editButton.setAttribute("id", "editButton");
   td5.appendChild(editButton);
   editButton.addEventListener("click", function(){
      let row = this.parentNode.parentNode;
      expenseName.value = row.cells[0].textContent;
      amount.value = row.cells[1].textContent;
      category.value = row.cells[2].textContent;
      date.value = row.cells[3].textContent;
      preAmount -= parseInt(row.cells[1].textContent);
      totalAmount.textContent = preAmount;
      row.remove();
   });   

   tr.appendChild(td1);
   tr.appendChild(td2);   
   tr.appendChild(td3);
   tr.appendChild(td4);
   tr.appendChild(td5);
   tbody.insertAdjacentElement("beforeend", tr);
   expenseName.value = "";
   amount.value = "";   
   date.value = "";
   category.value = "";
   expenseName.focus();
});