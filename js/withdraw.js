// step-1:
document.getElementById('btn-withdraw').addEventListener('click', function(){
//   step-2: 
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);

     // step-7  clear
     withdrawField.value = '';

    if(isNaN(newWithdrawAmount)){
        alert('Please provide Valid a number')
        return;
    }

    // step-3:
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdawTotal = parseFloat(previousWithdrawTotalString);

    

    // step-5 set total withdraw amount 
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

   


    if(newWithdrawAmount > previousBalanceTotal){
        alert('Dear Customer, Your available balance is insufficient')
        return;
    }

    
    // step-4 ------ calculate
    const currentWithdrawTotal = previousWithdawTotal + newWithdrawAmount;
    withdrawTotalElement.innerText = currentWithdrawTotal;

    // step-6 ----
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceTotalElement.innerText = newBalanceTotal;

    

})