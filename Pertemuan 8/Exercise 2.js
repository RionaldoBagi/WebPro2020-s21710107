let total = 0;
let account = {
    name:"John",
    expenses: []
}
function addExpenses(description, amount){
    account.expenses.push({description: description, amount: amount})
}
function getAccountSummary(){
    account.expenses.forEach(function(element){
        total = total + element.amount;
    })
    console.log("Total Pengeluaran " + account.name + " Sebesar Rp. "+ total);
}

addExpenses("Beli Baju", 100000);
addExpenses("Beli Sepatu", 500000);
addExpenses("Beli makanan", 50000)
addExpenses("Ongkos", 25000);
getAccountSummary();