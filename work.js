const showPay = document.getElementById("pay");
const getWorkBtElement = document.getElementById("work");
const getBankBtElement = document.getElementById("bank");



let salaryBalance = 0.0;

const handleWorkClick = () =>{
    
    salaryBalance = salaryBalance+100;
    showPay.innerText = "NOK " + salaryBalance;
    
};

getWorkBtElement.addEventListener("click", handleWorkClick);


const handleBankClick = () =>{
    
    if(salaryBalance != 0){
        
        if(totalLoaneAmount != 0){
            //Check op på, om det her regnestykke er OK. Derudover er den eneste funktionalitet du mangler, at få indsat repay knappen...
            //og sørge for, at balance ikke kan gå i minus, når man trykker på bank-knappen.
           
            totalLoaneAmount = totalLoaneAmount - (salaryBalance * 0.10);
            console.log("Total loane amount is now: " + totalLoaneAmount);
            salaryBalance = salaryBalance - (salaryBalance * 0.10);
            
            showLoaneBalance.innerText = "NOK " + totalLoaneAmount;
            


        }

        bankBalance = parseFloat(bankBalance) + parseFloat(salaryBalance);
        showBankBalance.innerText = "NOK " + bankBalance;
        
        salaryBalance = 0;
        showPay.innerText = "NOK " + salaryBalance;
    }    
};

getBankBtElement.addEventListener("click", handleBankClick);

