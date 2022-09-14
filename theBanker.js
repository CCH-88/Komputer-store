const getLoanBtElement = document.getElementById("get-loan");
const showLoanElement = document.getElementById("loan-tanken");
const showBankBalance = document.getElementById("balance");
const showLoaneBalance = document.getElementById("loanes");
const getRepayBtElement = document.getElementById("repay");



let bankBalance = 0;
let totalLoaneAmount = 0.0;
let numberOfLoanes = 0;
let loanAmount = 0.0;
showBankBalance.innerText = "NOK "+ bankBalance;
getRepayBtElement.style.display = "none";


function isLoanPayedBack(){

    if(totalLoaneAmount === 0){
        console.log("The total loane amount is: " + totalLoaneAmount);
        numberOfLoanes = 0;
        return true;
    }
    else
        return false; 
};

function repayButton(){
    if(salaryBalance != 0){

        if(salaryBalance <= totalLoaneAmount){
                        
            totalLoaneAmount = totalLoaneAmount - salaryBalance;        
            showLoaneBalance.innerText = "NOK "+ totalLoaneAmount;

            salaryBalance = 0;
            showPay.innerText = "NOK "+ salaryBalance;
            numberOfLoanes = 0;
        }
        else{
                      
            salaryBalance = salaryBalance - totalLoaneAmount;
            showPay.innerText = "NOK "+ salaryBalance;

            totalLoaneAmount = 0;
            showLoaneBalance.innerText = "NOK "+ totalLoaneAmount;
            numberOfLoanes = 0;
            getRepayBtElement.style.display = "none";
        }
        
    }
    else{
        alert("You don't have any money to pay the loan...");
    }
   
};

getRepayBtElement.addEventListener("click", repayButton);

function loanChecker(loanAmount) {


        if(numberOfLoanes >= 1 || isLoanPayedBack() === false){
            alert("Loan not granted. Please repay your first one of " + totalLoaneAmount +" before applying for a new one...")
        }

        else{     
            
            if(parseFloat(bankBalance)*2 >= loanAmount){
            
                
                bankBalance = parseFloat(bankBalance) + parseFloat(loanAmount);
                totalLoaneAmount = loanAmount;
                showLoaneBalance.innerText = "NOK " + totalLoaneAmount;
                getRepayBtElement.style.display = 'block';
                numberOfLoanes++;                   
                return 1;
            }
            else if(parseFloat(bankBalance)*2 < loanAmount){           
                return 2;
            }   
        }
    
   
            
};



const handleLoanReq = () =>{
    const loanRequest = prompt("Please enter the amount of money you wish to loan")

    if(loanChecker(loanRequest) == 1){
        showBankBalance.innerText = "NOK " + bankBalance;
        alert("Loan granted. Bankbalance is now: " + bankBalance);        
        console.log("Loan granted. Bankbalance is now: " + bankBalance);
    }
    else if(loanChecker(loanRequest) == 2){
        alert("Loan NOT granted. Bankbalance is now: " + bankBalance)
        console.log("Loan NOT granted. Bankbalance is now: " + bankBalance);
    }

};

getLoanBtElement.addEventListener("click", handleLoanReq);


