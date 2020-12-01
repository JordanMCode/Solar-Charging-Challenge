
// =========================================================================//
// <=========== Variables ===========>
// =========================================================================//

// =========================================================================//
// Table - User Inputs // 
// =========================================================================//
const carRegInput = document.querySelector('.reg-input');
const currentRange = document.querySelector('.current-range');
const rangeNeeded = document.querySelector('.range-needed');
const leavingTime = document.getElementById('end-time');
const submit = document.querySelector('.submit');
const reset1 = document.getElementById("reset-1");
const reset2 = document.getElementById("reset-2");
const reset3 = document.getElementById("reset-3");
const reset4 = document.getElementById("reset-4");
const reset5 = document.getElementById("reset-5");
const reset6 = document.getElementById("reset-6");
const clearBtn = document.getElementById("clear-btn");
var dateValid = /^\d+\.\d{2}$/;
let hourDiff = "";
let formattedEndTime = "";

// =========================================================================//
// Stored Table Values //
// =========================================================================//

let cell1 = "";
let cell2 = "";
let cell3 = "";
let cell4 = "";
let cell5 = "";
let cell6 = "";
let cell7 = "";
let cell8 = "";
let cell9 = "";
let cell10 = "";
let cell11 = "";
let cell12 = "";
let cell13 = "";
let cell14 = "";
let cell15 = "";
let cell16 = "";
let cell17 = "";
let cell18 = "";
let cell19 = "";
let cell20 = "";
let cell21 = "";
let cell22 = "";
let cell23 = "";
let cell24 = "";

// =========================================================================//
// HTML Table Cells //
// =========================================================================//

let tCell1 = document.querySelector('.cell-1');
let tCell2 = document.querySelector('.cell-2');
let tCell3 = document.querySelector('.cell-3');
let tCell4 = document.querySelector('.cell-4');
let tCell5 = document.querySelector('.cell-5');
let tCell6 = document.querySelector('.cell-6');
let tCell7 = document.querySelector('.cell-7');
let tCell8 = document.querySelector('.cell-8');
let tCell9 = document.querySelector('.cell-9');
let tCell10 = document.querySelector('.cell-10');
let tCell11 = document.querySelector('.cell-11');
let tCell12 = document.querySelector('.cell-12');
let tCell13 = document.querySelector('.cell-13');
let tCell14 = document.querySelector('.cell-14');
let tCell15 = document.querySelector('.cell-15');
let tCell16 = document.querySelector('.cell-16');
let tCell17 = document.querySelector('.cell-17');
let tCell18 = document.querySelector('.cell-18');
let tCell19 = document.querySelector('.cell-19');
let tCell20 = document.querySelector('.cell-20');
let tCell21 = document.querySelector('.cell-21');
let tCell22 = document.querySelector('.cell-22');
let tCell23 = document.querySelector('.cell-23');
let tCell24 = document.querySelector('.cell-24');

// =========================================================================//
// User Input Data Arrays //
// =========================================================================//
const carInfo = [
    carInfo1 = [],
    carInfo2 = [],
    carInfo3 = [],
    carInfo4 = [],
    carInfo5 = [],
    carInfo6 = []
];

// =========================================================================//
// Schedule Generator Variables //
// =========================================================================//

const genBtn = document.querySelector('.generate-schedule-btn');
var z = 0;
var y = 1;
var genTable = document.getElementById("genTable");
let regCell = [];
let regNum = [];
let colPower = [40, 50, 60, 70, 80, 70, 70, 60, 50, 40];
let colPowerUsed = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,];
var cellNumber = 1;
let powerLeft = 0;
let colCount = 0;
let exitCell = [document.getElementById("exit-1"), document.getElementById("exit-2"), document.getElementById("exit-3"), document.getElementById("exit-4"), document.getElementById("exit-5"), document.getElementById("exit-6")]

// =========================================================================//
// <=========== Functions ===========>
// =========================================================================//


// =========================================================================//
// User Info Submit Function
// =========================================================================//

// Function for clearing all fields when user input is submitted to the table // 

function clearFields(field1, field2, field3) {
    document.querySelector(field1).value = '';
    document.querySelector(field2).value = '';
    document.querySelector(field3).value = '';
}

// Function to reset a row in the info table // 

function clearRow(carInfo, tCell1, tCell2, tCell3, tCell4) {
    carInfo.length = 0;
    tCell1.innerHTML = "";
    tCell2.innerHTML = "";
    tCell3.innerHTML = "";
    tCell4.innerHTML = "";
}

// Function to calculate amount of hours on site available to charge // 


function calculateTime() {
    //get values
    var valuestart = document.getElementById('start-time').value;
    var valuestop = document.getElementById('end-time').value;

    //create date format          
    var timeStart = new Date("01/01/2007 " + valuestart).getHours();
    var timeEnd = new Date("01/01/2007 " + valuestop).getHours();

    hourDiff = timeEnd - timeStart;

    let dateFormat = new Date("01/01/2007 " + valuestop);
    formattedEndTime = dateFormat.toLocaleTimeString([], { timeStyle: 'short' });
    console.log(formattedEndTime);

    return formattedEndTime;
}



// This function makes sure all fields are filled, then providing they are, each piece of user data is added to a table to view. // 
// Additional validation is needed - AlphaNumeric for Registration and Numeric (integer for current range and range needed) for the remainder. Will add this after refactor // 

submit.addEventListener("click", () => {
    calculateTime();
    if (tCell1.innerHTML === "") {
        if (carRegInput.value === "" || currentRange.value === "" || rangeNeeded.value === "" || hourDiff.value === "") {
            alert("All fields are required");
            return;
        } if (hourDiff > 0) {
            cell1 = carRegInput.value;
            cell2 = currentRange.value;
            cell3 = rangeNeeded.value;
            cell4 = formattedEndTime;
            carInfo[0].push(cell1);
            carInfo[0].push(cell2);
            carInfo[0].push(cell3);
            carInfo[0].push(cell4);
            carInfo[0].push(hourDiff);
            tCell1.innerHTML = carInfo1[0];
            tCell2.innerHTML = carInfo1[1];
            tCell3.innerHTML = carInfo1[2];
            tCell4.innerHTML = carInfo1[3];
        } else {
            alert("Please ensure the car is on site for a minumum of 1 hour.");
            return;
        }
    } else if (tCell5.innerHTML === "") {
        if (carRegInput.value === "" || currentRange.value === "" || rangeNeeded.value === "" || hourDiff.value === "") {
            alert("All fields are required");
            return;
        } if (dateValid.test(leavingTime.value)) {
            cell5 = carRegInput.value;
            cell6 = currentRange.value;
            cell7 = rangeNeeded.value;
            cell8 = formattedEndTime;
            carInfo[1].push(cell5);
            carInfo[1].push(cell6);
            carInfo[1].push(cell7);
            carInfo[1].push(cell8);
            carInfo[1].push(hourDiff);
            tCell5.innerHTML = carInfo2[0];
            tCell6.innerHTML = carInfo2[1];
            tCell7.innerHTML = carInfo2[2];
            tCell8.innerHTML = carInfo2[3];
        } else {
            alert("Please use the indicated time format");
            return;
        }
    } else if (tCell9.innerHTML === "") {
        if (carRegInput.value === "" || currentRange.value === "" || rangeNeeded.value === "" || hourDiff.value === "") {
            alert("All fields are required");
            return;
        } if (dateValid.test(leavingTime.value)) {
            cell9 = carRegInput.value;
            cell10 = currentRange.value;
            cell11 = rangeNeeded.value;
            cell12 = formattedEndTime;
            carInfo[2].push(cell9);
            carInfo[2].push(cell10);
            carInfo[2].push(cell11);
            carInfo[2].push(cell12);
            carInfo[2].push(hourDiff);
            tCell9.innerHTML = carInfo3[0];
            tCell10.innerHTML = carInfo3[1];
            tCell11.innerHTML = carInfo3[2];
            tCell12.innerHTML = carInfo3[3];
        } else {
            alert("Please ensure the car is on site for a minumum of 1 hour.");
            return;
        }
    } else if (tCell13.innerHTML === "") {
        if (carRegInput.value === "" || currentRange.value === "" || rangeNeeded.value === "" || hourDiff.value === "") {
            alert("All fields are required");
            return;
        } if (dateValid.test(leavingTime.value)) {
            cell13 = carRegInput.value;
            cell14 = currentRange.value;
            cell15 = rangeNeeded.value;
            cell16 = formattedEndTime;
            carInfo[3].push(cell13);
            carInfo[3].push(cell14);
            carInfo[3].push(cell15);
            carInfo[3].push(cell16);
            carInfo[3].push(hourDiff);
            tCell13.innerHTML = carInfo4[0];
            tCell14.innerHTML = carInfo4[1];
            tCell15.innerHTML = carInfo4[2];
            tCell16.innerHTML = carInfo4[3];
        } else {
            alert("Please ensure the car is on site for a minumum of 1 hour.");
            return;
        }
    } else if (tCell17.innerHTML === "") {
        if (carRegInput.value === "" || currentRange.value === "" || rangeNeeded.value === "" || hourDiff.value === "") {
            alert("All fields are required");
            return;
        } if (dateValid.test(leavingTime.value)) {
            cell17 = carRegInput.value;
            cell18 = currentRange.value;
            cell19 = rangeNeeded.value;
            cell20 = formattedEndTime;
            carInfo[4].push(cell17);
            carInfo[4].push(cell18);
            carInfo[4].push(cell19);
            carInfo[4].push(cell20);
            carInfo[4].push(hourDiff);
            tCell17.innerHTML = carInfo5[0];
            tCell18.innerHTML = carInfo5[1];
            tCell19.innerHTML = carInfo5[2];
            tCell20.innerHTML = carInfo5[3];
        } else {
            alert("Please ensure the car is on site for a minumum of 1 hour.");
            return;
        }
    } else if (tCell21.innerHTML === "") {
        if (carRegInput.value === "" || currentRange.value === "" || rangeNeeded.value === "" || hourDiff.value === "") {
            alert("All fields are required");
            return;
        } if (dateValid.test(leavingTime.value)) {
            cell21 = carRegInput.value;
            cell22 = currentRange.value;
            cell23 = rangeNeeded.value;
            cell24 = formattedEndTime;
            carInfo[5].push(cell21);
            carInfo[5].push(cell22);
            carInfo[5].push(cell23);
            carInfo[5].push(cell24);
            carInfo[5].push(hourDiff);
            tCell21.innerHTML = carInfo6[0];
            tCell22.innerHTML = carInfo6[1];
            tCell23.innerHTML = carInfo6[2];
            tCell24.innerHTML = carInfo6[3];
            document.querySelector(".submit").style.display = "none";
        } else {
            alert("Please ensure the car is on site for a minumum of 1 hour.");
            return;
        }
    }
    clearFields('.reg-input', '.current-range', '.range-needed');
    hourDiff = "";
})



// Function to handle the reset buttons on the car info table. Clears the table and the Car info array to make way for new data //

reset1.addEventListener("click", () => {
    clearRow(carInfo1, tCell1, tCell2, tCell3, tCell4);
})

reset2.addEventListener("click", () => {
    clearRow(carInfo2, tCell5, tCell6, tCell7, tCell8);
})
reset3.addEventListener("click", () => {
    clearRow(carInfo3, tCell9, tCell10, tCell11, tCell12);
})
reset4.addEventListener("click", () => {
    clearRow(carInfo4, tCell13, tCell14, tCell15, tCell16);
})
reset5.addEventListener("click", () => {
    clearRow(carInfo5, tCell17, tCell18, tCell19, tCell20);
})
reset6.addEventListener("click", () => {
    clearRow(carInfo6, tCell21, tCell22, tCell23, tCell24);
})

// =========================================================================//
// Schedule Generator Functions //
// =========================================================================//




function powerUsed(power1, power2) {  // Simple subtraction to calculate each hours power used in order to decide if a car can solar charge or not. //
    powerLeft = power1 - power2;
}

function addPower(power1, power2) {    // Simple addition for power total to add to each column //
    result = power1 + power2;
}

function exitRange(a, b) {
    exitRangeTotal = (parseInt(a) + parseInt(b));   // Simple addition for calculating exit range after charging, needed interger identifier otherwise totals were concatonating as strings //
}


function clearReg(i, RegNumber) {
    carInfo[i][0].push("");
    document.getElementsByClassName("car-reg-" + RegNumber).innerHTML = "N/A";
}


clearBtn.addEventListener("click", () => {
    y = 1;
    cellNumber = 0;
    for (y = 1; y <= 6; y++) {
        for (cellNumber = 0; cellNumber < 12; cellNumber++) {
            genTable.rows[y].cells[cellNumber].innerHTML = "";
            genTable.rows[y].cells[cellNumber].classList.remove('charge');
        }
    }
    y = 1;
    cellNumber = 0;
    powerused = 0;
    colPowerUsed = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,]
})


// Main function for creating the charging schedule. Lots of extra functionality can be added to this, which I will do when I refactor / rebuild. So far the function grabs the registration names in order of user input, and adds them to the schedule table one by one. As each reg is added, the charge time needed is calculated, then the amount of solar energy is calculated. If the hour selected cannot facilitate full charging for the car (11kwh) then the next cell is checked. The schedule so far will ensure cars are charged the amount needed for their next journey + 10%, and display this exit range in the schedule also. // 

// To be added - Factor in end time to ensure charging before leaving. Force charging even if no solar energy is available if end time doesn't allow only solar usage. Indicate this on the schedule with a different cell colour.

genBtn.addEventListener("click", () => {
    y = 1;
    cellNumber = 0;
    for (y = 1; y <= 6; y++) {
        for (cellNumber = 0; cellNumber < 12; cellNumber++) {
            genTable.rows[y].cells[cellNumber].innerHTML = "";
            genTable.rows[y].cells[cellNumber].classList.remove('charge');
        }
    }
    y = 1;
    cellNumber = 0;
    powerused = 0;
    colPowerUsed = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,];
    regCell.length = 0;
    for (i = 0; i < 6; i++) {
        if (carInfo[i][0] != undefined) {
            regCell.push(carInfo[i][0]);
        } else {
            regCell.push("N/A")
        }
    }
    for (let i = 0; i < 6; i++) {
        regNum[i] = (document.getElementById("genTable").rows[i + 1].cells[0]);
        regNum[i].innerHTML = regCell[i];
    }
    for (var x = 0; x < 6; x++) {
        let chargeNeeded = Math.ceil((carInfo[x][2] - carInfo[x][1]) * 1.10);
        let chargeTime = Math.ceil((chargeNeeded / 44));
        exitRange(chargeNeeded, carInfo[x][1]);
        if (isNaN(exitRangeTotal)) {
            exitCell[x].innerHTML = "N/A";
        } else {
            exitCell[x].innerHTML = exitRangeTotal;
        }
        for (var x = 0; i > 10; i++) {
            colCount = 0;
            cellNumber = 1;
            for (let cellsNeeded = chargeTime; cellsNeeded > 0; cellsNeeded--) {
                powerUsed(colPower[colCount], colPowerUsed[colCount]);
                if (powerLeft > 11) {
                    console.log(y)
                    genTable.rows[y].cells[cellNumber].classList.add('charge');
                    addPower(colPowerUsed[colCount], 11);
                    colPowerUsed[colCount] = result;
                    cellNumber++;
                    colCount++;
                } else {
                    cellsNeeded++;
                    cellNumber++;
                    colCount++;
                }
            }
        }
    }

})



        // Function to clear all cells in the Generated schedule table //  This functionality is now also built in to the generate schedule function to allow edits to be made without clearing the whole schedule. I left the clear schedule button in to allow it to be cleared entirely is wanted, however. 








