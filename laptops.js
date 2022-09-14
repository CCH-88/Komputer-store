const laptoplistElement = document.getElementById("laptoplist");
const featuresElement = document.getElementById("features");

//Image element...
const imageElement = document.getElementById("laptopImg");

//Title and description elements....
const laptopTitleElement = document.getElementById("laptopName");
const laptopDescritpionElement = document.getElementById("descriptionLaptop");

//Price element
const laptopPriceElement = document.getElementById("priceH2");

//The buy button
const payButtonElement = document.getElementById("buyNow");


let selectedLaptop = [];
let laptops = [];
let laptopPrice = 0;
let initialLaptopPrice = 0;
let initialLaptopTitle = "";

fetch("https://noroff-komputer-store-api.herokuapp.com/computers")
    .then(response => response.json())
    .then(data => laptops = data)
    .then(laptops => addLaptopsToList(laptops));

    const addLaptopsToList = (laptops) => {
        laptops.forEach(laptop => addLaptopToList(laptop));
        
        //Default values...
        featuresElement.innerText = laptops[0].specs.join('\n');
        laptopTitleElement.innerText = laptops[0].title;
        imageElement.src =  "https://noroff-komputer-store-api.herokuapp.com/" + laptops[0].image;
        laptopDescritpionElement.innerText = laptops[0].description;
        laptopPriceElement.innerText = "NOK "+ laptops[0].price;
        initialLaptopPrice = parseInt(laptops[0].price);
        initialLaptopTitle = selectedLaptop.title;
        console.log(initialLaptopPrice);               
    }

    const addLaptopToList = (laptop) => {
        
        //Handles the name of the laptop and inserts into list....
        const laptopElement = document.createElement("option");
        laptopElement.value = laptop.id;
        laptopElement.appendChild(document.createTextNode(laptop.title));
        laptoplistElement.appendChild(laptopElement);
        
    }

    const handleLaptopListChange = e => {
    
    //Handles the specs
    selectedLaptop = laptops[e.target.selectedIndex];
    featuresElement.innerText = selectedLaptop.specs.join('\n');
    
    //Handles the image...
    const path = "https://noroff-komputer-store-api.herokuapp.com/";
    imageElement.src = path.concat(selectedLaptop.image);

    //Handles the name and description...    
    laptopTitleElement.innerText = selectedLaptop.title;
    laptopDescritpionElement.innerText = selectedLaptop.description;

    //Handles the price
    laptopPriceElement.innerText = "NOK "+ selectedLaptop.price;
    
    }

    const handlePay = () => {
        
        laptopPrice = Number(selectedLaptop.price);
        let change = Number(0);
        
        //Checks if the laptop price and initial laptop price is more or less than the bank balance. If 1 or 0 the bankbalance is more or equal to the laptopprice then proceed
        if (Math.sign(bankBalance - laptopPrice) === 1 || Math.sign(bankBalance - laptopPrice) === 0 || 
        Math.sign(bankBalance - initialLaptopPrice) === 1 || Math.sign(bankBalance - initialLaptopPrice) === 0){
            

            if(selectedLaptop.title != undefined || initialLaptopTitle != ""){
                alert("Congratulations! You are now the owner of the " + laptopTitleElement.innerText);
                
                change = bankBalance - laptopPrice;
                bankBalance = change;
                showBankBalance.innerText = "NOK "+ bankBalance;
            }
            else
            {
                console.log("the selected laptop is undefined...");
            }
        
        }
        else{
            alert("You don't have enought money at you disposal to buy the " + laptopTitleElement.innerText);
        }
    
    }

laptoplistElement.addEventListener("change", handleLaptopListChange);
payButtonElement.addEventListener("click", handlePay);
