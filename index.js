// let username: string = "John";
var isBirthdayData = true;
var ageData = 22;
var userNameData = "John";
// function logBrtMsg (isBirthday: boolean, age: number, userName: string) {
//     if (isBirthday) {
//         console.log(`Happy Birthday ${userName}, you are ${age + 1} years old!`);
//     } 
// }
// logBrtMsg(isBirthdayData, ageData, userNameData);
// //lesson 7
// const logBrtMsg = (isBirthday: boolean, age: number, userName: string): string  => {
//     if (isBirthday) {
//         return`Happy Birthday ${userName}, you are ${age + 1} years old!`;
//     } else {
//         return "Error";
//     }
// }
// logBrtMsg(isBirthdayData, ageData, userNameData);
//lesson 9 практика типизация кода
// const currRate: string = "1.05";
// const fetchCurr = (response: string) : number => {
//     const data = JSON.parse(response);
//     return data;
// }
// function transferEurToUsd (available: boolean, amounth: number, commission: number): void {
//     if (available) {
//         let res = fetchCurr(currRate) * amounth * commission;
//         console.log(res);
//     } else {
//         console.log("Обмен недоступен");
//     }
// }
// transferEurToUsd(true, 500, 1.05);
//lesson 15 
var electricityUserData = {
    readings: 95,
    units: "kWt",
    mode: "double",
};
var waterUserData = {
    readings: 3,
    units: "m3",
};
var elRate = 0.45;
var wRate = 2;
var monthPayments = [0, 0]; // [electricity, water]
var calculatePayments = function (elData, wData, elRate, wRate) {
    if (elData.mode === "double" && elData.readings < 50) {
        monthPayments[0] = elData.readings * elRate * 0.7;
    }
    else {
        monthPayments[0] = elData.readings * elRate;
    }
    monthPayments[1] = wData.readings * wRate;
};
console.log(calculatePayments(electricityUserData, waterUserData, elRate, wRate));
var sendInvoice = function (monthPayments, electricityUserData, waterUserData) {
    var text = "    Hello!\n    This month you used ".concat(electricityUserData.readings, " ").concat(electricityUserData.units, " of electricity\n    It will cost: ").concat(monthPayments[0], "\u20AC\n    \n    This month you used ").concat(waterUserData.readings, " ").concat(waterUserData.units, " of water\n    It will cost: ").concat(monthPayments[1], "\u20AC");
    return text;
};
