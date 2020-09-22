
// =========================================================================//
// <=========== Variables ===========>
// =========================================================================//

// =========================================================================//
// Table - User Inputs // 
// =========================================================================//
const carRegInput = document.querySelector('.reg-input');
const currentRange = document.querySelector('.current-range');
const rangeNeeded = document.querySelector('.range-needed');
const leavingTime = document.querySelector('.leaving-time');
const submit = document.querySelector('.submit');

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

const carInfo1 = [];
const carInfo2 = [];
const carInfo3 = [];
const carInfo4 = [];
const carInfo5 = [];
const carInfo6 = [];

// =========================================================================//
// Schedule Generator Variables //
// =========================================================================//

const genBtn = document.querySelector('.generate-schedule-btn');

// =========================================================================//
// <=========== Functions ===========>
// =========================================================================//


// =========================================================================//
// User Info Submit Function
// =========================================================================//

submit.addEventListener("click", () => {
    if (tCell1.innerHTML === "") {
        if (carRegInput.value === "" || currentRange.value === "" || rangeNeeded.value === "" || leavingTime.value === "") {
            alert("All fields are required");
        } else {
            cell1 = carRegInput.value;
            cell2 = currentRange.value;
            cell3 = rangeNeeded.value;
            cell4 = leavingTime.value;
            cell4 = Math.floor(cell4);
            carInfo1.push(cell1);
            carInfo1.push(cell2);
            carInfo1.push(cell3);
            carInfo1.push(cell4);
            tCell1.innerHTML = carInfo1[0];
            tCell2.innerHTML = carInfo1[1];
            tCell3.innerHTML = carInfo1[2];
            tCell4.innerHTML = carInfo1[3];
        };
    } else if (tCell5.innerHTML === "") {
        if (carRegInput.value === "" || currentRange.value === "" || rangeNeeded.value === "" || leavingTime.value === "") {
            alert("All fields are required");
        } else {
            cell5 = carRegInput.value;
            cell6 = currentRange.value;
            cell7 = rangeNeeded.value;
            cell8 = leavingTime.value;
            cell8 = Math.floor(cell8);
            carInfo2.push(cell5);
            carInfo2.push(cell6);
            carInfo2.push(cell7);
            carInfo2.push(cell8);
            tCell5.innerHTML = carInfo2[0];
            tCell6.innerHTML = carInfo2[1];
            tCell7.innerHTML = carInfo2[2];
            tCell8.innerHTML = carInfo2[3];
        };
    } else if (tCell9.innerHTML === "") {
        if (carRegInput.value === "" || currentRange.value === "" || rangeNeeded.value === "" || leavingTime.value === "") {
            alert("All fields are required");
        } else {
            cell9 = carRegInput.value;
            cell10 = currentRange.value;
            cell11 = rangeNeeded.value;
            cell12 = leavingTime.value;
            cell12 = Math.floor(cell12);
            carInfo3.push(cell9);
            carInfo3.push(cell10);
            carInfo3.push(cell11);
            carInfo3.push(cell12);
            tCell9.innerHTML = carInfo3[0];
            tCell10.innerHTML = carInfo3[1];
            tCell11.innerHTML = carInfo3[2];
            tCell12.innerHTML = carInfo3[3];
        };
    } else if (tCell13.innerHTML === "") {
        if (carRegInput.value === "" || currentRange.value === "" || rangeNeeded.value === "" || leavingTime.value === "") {
            alert("All fields are required");
        } else {
            cell13 = carRegInput.value;
            cell14 = currentRange.value;
            cell15 = rangeNeeded.value;
            cell16 = leavingTime.value;
            cell16 = Math.floor(cell16);
            carInfo4.push(cell13);
            carInfo4.push(cell14);
            carInfo4.push(cell15);
            carInfo4.push(cell16);
            tCell13.innerHTML = carInfo4[0];
            tCell14.innerHTML = carInfo4[1];
            tCell15.innerHTML = carInfo4[2];
            tCell16.innerHTML = carInfo4[3];
        };
    } else if (tCell17.innerHTML === "") {
        if (carRegInput.value === "" || currentRange.value === "" || rangeNeeded.value === "" || leavingTime.value === "") {
            alert("All fields are required");
        } else {
            cell17 = carRegInput.value;
            cell18 = currentRange.value;
            cell19 = rangeNeeded.value;
            cell20 = leavingTime.value;
            cell20 = Math.floor(cell20);
            carInfo5.push(cell17);
            carInfo5.push(cell18);
            carInfo5.push(cell19);
            carInfo5.push(cell20);
            tCell17.innerHTML = carInfo5[0];
            tCell18.innerHTML = carInfo5[1];
            tCell19.innerHTML = carInfo5[2];
            tCell20.innerHTML = carInfo5[3];
        };
    } else if (tCell21.innerHTML === "") {
        if (carRegInput.value === "" || currentRange.value === "" || rangeNeeded.value === "" || leavingTime.value === "") {
            alert("All fields are required");
        } else {
            cell21 = carRegInput.value;
            cell22 = currentRange.value;
            cell23 = rangeNeeded.value;
            cell24 = leavingTime.value;
            cell24 = Math.floor(cell24);
            carInfo6.push(cell21);
            carInfo6.push(cell22);
            carInfo6.push(cell23);
            carInfo6.push(cell24);
            tCell21.innerHTML = carInfo6[0];
            tCell22.innerHTML = carInfo6[1];
            tCell23.innerHTML = carInfo6[2];
            tCell24.innerHTML = carInfo6[3];
        };
    }
})

// =========================================================================//
// Schedule Generator Functions //
// =========================================================================//

// let genTable = document.getElementById("genTable");
// let regCell = [];
// let regNum = [];

// genBtn.addEventListener("click", () => {
//     regCell.push(carInfo1[0], carInfo2[0], carInfo3[0], carInfo4[0], carInfo5[0], carInfo6[0])
//     for (let i = 0; i < 6; i++) {
//         regNum[i] = (document.getElementById("genTable").rows[i + 1].cells[0]);
//         regNum[i].innerHTML = regCell[i];
//     }

//     if (carInfo[1] != carInfo1[2]) {
//         let chargeNeeded = Math.ceil((carInfo1[2] - carInfo1[1]) * 1.10);
//         let chargeTime = Math.ceil((chargeNeeded / 44));
//         console.log(chargeTime);
//         for (let i = chargeTime; i > 0; i--) {
//             genTable.rows[1].cells[i].classList.add('charge');
//         }
//     }
// })


let genTable = document.getElementById("genTable");
let regCell = [];
let regNum = [];

genBtn.addEventListener("click", () => {
    regCell.push(carInfo1[0], carInfo2[0], carInfo3[0], carInfo4[0], carInfo5[0], carInfo6[0])
    for (let i = 0; i < 6; i++) {
        regNum[i] = (document.getElementById("genTable").rows[i + 1].cells[0]);
        regNum[i].innerHTML = regCell[i];
    }
    for (let x = 1; x < 7; x++) {
        if (carInfo1[1] != carInfo1[2]) {
            let chargeNeeded = Math.ceil((carInfo1[2] - carInfo1[1]) * 1.10);
            let chargeTime = Math.ceil((chargeNeeded / 44));
            console.log(chargeTime);
            for (let i = chargeTime, y = 1; i > 0 && y < 7; i--, y++) {
                genTable.rows[y].cells[i].classList.add('charge');
            }
        }
    }
})