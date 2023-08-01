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

const electricityUserData = {
	readings: 95,
	units: "kWt",
	mode: "double",
};

const waterUserData = {
	readings: 3,
	units: "m3",
};

const elRate: number = 0.45;
const wRate: number = 2;

const monthPayments: number[] = [0, 0]; // [electricity, water]

const calculatePayments = (elData: {readings: number, units: string, mode: string}, wData: {readings: number, units: string}, elRate: number, wRate: number): number[] => {
	if (elData.mode === "double" && elData.readings < 50) {
		monthPayments[0] = elData.readings * elRate * 0.7;
	} else {
		monthPayments[0] = elData.readings * elRate;
	}

	monthPayments[1] = wData.readings * wRate;

    return monthPayments;
};

const calculatedPayments = calculatePayments (electricityUserData, waterUserData, elRate, wRate);
console.log(calculatedPayments);

const sendInvoice = (monthPayments: number[], electricityUserData: {readings: number, units: string, mode: string}, waterUserData: {readings: number, units: string}): string => {
	const text = `    Hello!
    This month you used ${electricityUserData.readings} ${electricityUserData.units} of electricity
    It will cost: ${monthPayments[0]}€
    
    This month you used ${waterUserData.readings} ${waterUserData.units} of water
    It will cost: ${monthPayments[1]}€`;

	return text;
};
const invoiceText = sendInvoice(calculatedPayments, electricityUserData, waterUserData);
console.log(invoiceText);