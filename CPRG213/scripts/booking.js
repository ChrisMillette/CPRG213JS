/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?

var calculatedCost = 0;
var costPerDay = 35;
var dayCounter = 0;
var clearClicked = false;
var monClicked = false;
var tueClicked = false;
var wedClicked = false;
var thurClicked = false;
var friClicked = false;
var fullClicked = false;
var halfClicked = false;
const clearDays = document.getElementById('clear-button');
const mon = document.getElementById('monday');
const tue = document.getElementById('tuesday');
const wed = document.getElementById('wednesday');
const thur = document.getElementById('thursday');
const fri = document.getElementById('friday');

/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

mon.addEventListener("click", clickCheckMon () {
    monClicked = true;
});?

tue.addEventListener("click", clickCheckTue() {
    tueClicked = true;
});?

wed.addEventListener("click", clickCheckWed() {
    wedClicked = true;
});?

thurs.addEventListener("click", clickCheckThurs() {
    thursClicked = true;
});?

fri.addEventListener("click", clickCheckFri() {
    friClicked = true;
});?

if (monClicked == true) {
    mon.classList.add("clicked");
    dayCounter = dayCounter + 1;
}

if (tueClicked == true) {
    tue.classList.add("clicked");
    dayCounter = dayCounter + 1;
}

if (wedClicked == true) {
    wed.classList.add("clicked");
    dayCounter = dayCounter + 1;
}

if (thursClicked == true) {
    thurs.classList.add("clicked");
    dayCounter = dayCounter + 1;
}

if (friClicked == true) {
    fri.classList.add("clicked");
    dayCounter = dayCounter + 1;
}



/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.



if (clearClicked == true) {
    mon.classList.remove("clicked");
    tue.classList.remove("clicked");
    wed.classList.remove("clicked");
    thur.classList.remove("clicked");
    fri.classList.remove("clicked");
    dayCounter = 0;
}




/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

function clickCheckHalf() {
    halfClicked = true;
    fullClicked = false;
    costPerDay = 20;
}

half.addEventListener("click", clickCheckHalf() {
    halfClicked = true;
    fullClicked = false;
    costPerDay = 20;
});?

if (halfClicked == true) {
    half.classList.add("clicked");
    full.classList.remove("clicked");
}


// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

full.addEventListener("click", clickCheckFull() {
    fullClicked = true;
    halfClicked = false;
    costPerDay = 35;
});

if (fullClicked == true) {
    full.classList.add("clicked");
    half.classList.remove("clicked");
}



/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

calculatedCost = costPerDay * dayCounter;
document.getElementById("calculated-cost").innerHTML = calculatedCost;
