// let username: string = "John";

const isBirthdayData: boolean = true;
let ageData: number = 22;
const userNameData: string = "John";
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
const currRate: string = "1.05";

const fetchCurr = (response: string) : number => {
    const data = JSON.parse(response);
    return data;
}

function transferEurToUsd (available: boolean, amounth: number, commission: number): void {
    if (available) {
        let res = fetchCurr(currRate) * amounth * commission;
        console.log(res);
    } else {
        console.log("Обмен недоступен");
    }
}

transferEurToUsd(true, 500, 1.05);