
const dayInput = document.getElementById("day");
const monthInput = document.getElementById("month");
const yearInput = document.getElementById("year");

const dayFlex = document.querySelector(".day-flex");
const monthFlex = document.querySelector(".month-flex");
const yearFlex = document.querySelector(".year-flex");

const dayResult = document.getElementById("days-result");
const monthResult = document.getElementById("months-result");
const yearResult = document.getElementById("years-result");

const calculateButton = document.querySelector(".calculate-button");

const date = new Date();

const currentDay = date.getDate();
const currentMonth = date.getMonth();
const currentYear = date.getFullYear();

calculateButton.addEventListener("click", calculate);

dayInput.addEventListener("input", checkDay);
monthInput.addEventListener("input", checkMonth);
yearInput.addEventListener("input", checkYear);

function findDaysInMonth (m, y) {
    switch (m) {
        case 1 :
            return (y % 4 == 0 && y % 100) || y % 400 == 0 ? 29 : 28;
        case 8 : case 3 : case 5 : case 10 :
            return 30;
        default :
            return 31
    }
};

function checkDay(){


    const warningElement = document.createElement("span");


    let yourBirthDay = dayInput.value;
    let yourBirthMonth = monthInput.value - 1;
    let yourBirthYear = yearInput.value;

    if(dayInput.value == "" || dayInput.value == null){


        if(!dayFlex.children[2]){
            warningElement.textContent = "This field is required!";
            warningElement.classList.add("warning");
            dayFlex.children[0].style.color = "red";
            dayInput.style.border = "1px solid red";
            dayFlex.append(warningElement);
        }
        

        
        
        return false;

    }
    
    else if(yourBirthDay > findDaysInMonth(yourBirthMonth, yourBirthYear) || yourBirthDay <= 0){
        
        if(!dayFlex.children[2]){
            warningElement.textContent = "Must be valid day!";
            warningElement.classList.add("warning");
            dayFlex.children[0].style.color = "red";
            dayInput.style.border = "1px solid red";
            dayFlex.append(warningElement);
        }
        


        return false;
    } 

    else {

        if(dayFlex.children[2]){
            dayFlex.children[2].remove();
        }
        dayFlex.children[0].style.color = "var(--smokey-grey)";
        dayInput.style.border = "1px solid var(--light-grey)";


        return true;
    }
    

}

function checkMonth(){

    const warningElement = document.createElement("span");

    if(monthInput.value == "" || monthInput.value == null){


        if(!monthFlex.children[2]){
            warningElement.textContent = "This field is required";
            warningElement.classList.add("warning");
            monthFlex.children[0].style.color = "red";
            monthInput.style.border = "1px solid red";
            monthFlex.append(warningElement);
        }
        


        return false;

    }
    
    else if(monthInput.value > 12 || monthInput.value <= 0){

        if(!monthFlex.children[2]){
            warningElement.textContent = "Must be valid month!";
            warningElement.classList.add("warning");
            monthFlex.children[0].style.color = "red";
            monthInput.style.border = "1px solid red";
            monthFlex.append(warningElement);
        }
        


        return false;

    }

    else{

        if(monthFlex.children[2]){
            monthFlex.children[2].remove();
        }
        monthFlex.children[0].style.color = "var(--smokey-grey)";
        monthInput.style.border = "1px solid var(--light-grey)";


        return true;

    }

}

function checkYear(){

    const warningElement = document.createElement("span");

    if(yearInput.value == "" || yearInput.value == null){


         if(!yearFlex.children[2]){
            warningElement.textContent = "This field is required";
            warningElement.classList.add("warning");
            yearFlex.children[0].style.color = "red";
            yearInput.style.border = "1px solid red";
            yearFlex.append(warningElement);
         }
        



        return false;
    }

    else if(yearInput.value > currentYear){

        if(!yearFlex.children[2]){
            warningElement.textContent = "Must be in the past!";
            warningElement.classList.add("warning");
            yearFlex.children[0].style.color = "red";
            yearInput.style.border = "1px solid red";
            yearFlex.append(warningElement);
        }



        return false;

    }

    else{

        if(yearFlex.children[2]){
            yearFlex.children[2].remove();
        }
        yearFlex.children[0].style.color = "var(--smokey-grey)";
        yearInput.style.border = "1px solid var(--light-grey)";



        return true;

    }

}

function calculate(){

    let stateDay = checkDay();
    let stateMonth = checkMonth();
    let stateYear = checkYear();

    

    if(stateDay == false || stateMonth == false || stateYear == false){
        return;
    }

    else{

        let date = new Date();
        let d2 = date.getDate();
        let m2 = 1 + date.getMonth();
        let y2 = date.getFullYear();
        let month = findDaysInMonth(monthInput.value, yearInput.value);
        
        if(dayInput.value > d2){
            d2 = d2 + month;
            m2 = m2 - 1;
        }
        if(monthInput.value > m2){
            m2 = m2 + 12;
            y2 = y2 - 1;
        }
        

        let d = d2 - dayInput.value;
        let m = m2 - monthInput.value;
        let y = y2 - yearInput.value;
        
        dayResult.innerText = d;
        monthResult.innerText = m;
        yearResult.innerText = y;


    }

}