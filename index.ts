// let username: string = "John";

// const isBirthdayData: boolean = true;
// let ageData: number = 22;
// const userNameData: string = "John";
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

// const electricityUserData = {
// 	readings: 95,
// 	units: "kWt",
// 	mode: "double",
// };

// const waterUserData = {
// 	readings: 3,
// 	units: "m3",
// };

// const elRate: number = 0.45;
// const wRate: number = 2;

// const monthPayments: number[] = [0, 0]; // [electricity, water]

// const calculatePayments = (elData: {readings: number, units: string, mode: string}, wData: {readings: number, units: string}, elRate: number, wRate: number): number[] => {
// 	if (elData.mode === "double" && elData.readings < 50) {
// 		monthPayments[0] = elData.readings * elRate * 0.7;
// 	} else {
// 		monthPayments[0] = elData.readings * elRate;
// 	}

// 	monthPayments[1] = wData.readings * wRate;

//     return monthPayments;
// };

// const calculatedPayments = calculatePayments (electricityUserData, waterUserData, elRate, wRate);
// console.log(calculatedPayments);

// const sendInvoice = (monthPayments: number[], electricityUserData: {readings: number, units: string, mode: string}, waterUserData: {readings: number, units: string}): string => {
// 	const text = `    Hello!
//     This month you used ${electricityUserData.readings} ${electricityUserData.units} of electricity
//     It will cost: ${monthPayments[0]}€
    
//     This month you used ${waterUserData.readings} ${waterUserData.units} of water
//     It will cost: ${monthPayments[1]}€`;

// 	return text;
// };
// const invoiceText = sendInvoice(calculatedPayments, electricityUserData, waterUserData);
// console.log(invoiceText);

//lesson 16 картежи 
// const userDataTuple: [string, number] = ["John", 22];   

// //lesson 25 практика работы с типами и интерфейсами 
// type ValidAmount = "empty" | number;

// interface ClothesWarehouse {
// 	jackets: ValidAmount;
// 	hats: ValidAmount;
// 	socks: ValidAmount;
// 	pants: ValidAmount;
// }

// структура данных склада с канцтоварами

// interface StationeryWarehouse {
// 	scissors: ValidAmount; 
// 	paper: "empty" | boolean;
// }

// // структура данных склада с бытовой техникой

// interface AppliancesWarehouse {
// 	dishwashers: ValidAmount;
// 	cookers: ValidAmount;
// 	mixers: ValidAmount;
// }

// // общая структура данных, наследует все данные из трех выше
// // + добавляет свои

// interface TotalWarehouse extends ClothesWarehouse, StationeryWarehouse, AppliancesWarehouse {
// 	deficit: boolean;
// 	date: Date;
// }

// главный объект со всеми данными, должен подходить под формат TotalWarehouse

// const totalData: TotalWarehouse = {
// 	jackets: 5,
// 	hats: "empty",
// 	socks: "empty",
// 	pants: 15,
// 	scissors: 15,
// 	paper: true,
// 	dishwashers: 3,
// 	cookers: "empty",
// 	mixers: 14,
//     deficit: true,
//     date: new Date()
// };

// Реализуйте функцию, которая принимает в себя главный объект totalData нужного формата
// и возвращает всегда строку
// Функция должна отфильтровать данные из объекта и оставить только те названия товаров, у которых значение "empty"
// и поместить их в эту строку. Если таких товаров нет - возвращается другая строка (см ниже)

// С данным объектом totalData строка будет выглядеть:
// "We need this items: hats, socks, cookers"
// Товары через запятую, в конце её не должно быть. Пробел после двоеточия, в конце строки его нет.

// function printReport(data: TotalWarehouse) : string {
//     const result: string = Object.entries(data)
//                 .filter((item) => item[1] === "empty")
//                 .reduce((res, item) => `${res} ${item[0]}`, "");  
//     if (result.trim().length) {
//         return `We need this items: ${result.slice(0, -1)}`;
//     } else {
// 	    return "Everything fine";
//     }
	
// }

// console.log(printReport(totalData));


//lesson 27 
// interface User {
// 	login: string;
// 	password: string;
// 	age: number;
// 	// adress?: string;//этот параметр не обязателен
// 	adress: string | undefined;
// 	parents? : {
// 		mother?: string;
// 		father?: string;
// 	}
// }

// const user: User = {
// 	login: "John",
// 	password: "123",
// 	age: 22,
// 	adress: "Moscow"
// }

// const dbName = '123123';

// function sendUserData(obj: User, db: string): void {
// 	console.log(obj.parents?.father?.toLowerCase(), db?.toLowerCase())
// }

//lesson 33
// Перечисление с названием TypesOfMedia, которое включает строчные типы video, audio

// Перечисление с названием FormatsOfMedia, которое включает строчные видео-форматы: .mp4, .mov, .mkv, .flv, .webM

// Описание интерфейса, в котором:
// name - строка
// type - один из перечисления выше
// format = один из перечисления выше
// subtitles - необязательное поле типа строка
// marks - необязательное поле неизвестного типа
// enum TypesOfMedia {
// 	video = "video",
// 	audio = "audio",
// };
// enum FormatsOfMedia {
// 	mp4 = ".mp4",
// 	mov = ".mov",
// 	mkv = ".mkv",
// 	flv = ".flv",
// 	webM = ".webM",
// }


// interface Media {
// 	name: string;
// 	type: TypesOfMedia;
// 	format: FormatsOfMedia;
// 	subtitles?: string;
// 	marks?: unknown;//изначально указал string[], это не правильно
// }


// function playMedia(
// 	{ name, type, format, subtitles, marks }: Media = {
// 		name: "",
// 		type: TypesOfMedia.video,
// 		format: FormatsOfMedia.mp4,
// 		subtitles: "",
// 		marks: [],
// 	}
// ): string {
// 	let marksLog: string;

//     // Создать функционал, что если marks - это массив, то "сложить" все эелементы в одну строку и поместить в marksLog
//     // Если это строка, то просто поместить её в marksLog
//     // Если что-то другое - то marksLog = "Unsupported type of marks"
//     // Не допускайте any!

// 	if (marks instanceof Array) {
// 		console.log(`Media ${name}${format} is ${type}`);
// 	} else if (marks === 'string') {
// 		marksLog = marks;
// 	} else {
// 		marksLog = "Unsupported type of marks";
// 	}
// 	// console.log(`Media ${name}${format} is ${type}
//     // Subtitles: ${subtitles ?? "none"}`);
//     // помните что это за оператор ??

// 	return "Media started";
// }

// playMedia({
// 	name: "WoW",
// 	format: FormatsOfMedia.mp4,
// 	type: TypesOfMedia.video,
// 	subtitles: "hmhmhm hmhmhm doh",
// 	marks: ["4:30", "5:40"],
// });


//lesson 40
// Request
enum AnimalEnum {
	Cat = 'cat',
	Dog = 'dog',
	Bird = 'bird',
}

enum Status {
	Available = 'available',
	NotAvailable = 'not available',
}


interface Animal {
    animal: AnimalEnum,
    breed: string,
    sterilized?: string
}

// Response #1

interface AnimalData { //можно было прописать extends для Animal чтобы не дублировать код
    status: Status.Available,
    data: {
        animal: AnimalEnum,
        breed: string,
        sterilized?: string,
        location: string,
        age?: number
    }
}

// Response #2

interface AnimalData2 {
    status: Status.NotAvailable,
    data: {
        message: string,
        nextUpdateIn: Date
    }
}

//следовало создать еще один тип, который объединял бы оба интерфейса

function checkAnimalData(animal: AnimalData | AnimalData2): string  {
	if (Status.Available === animal.status) {
		// Заменить условие!
		// const one = console.log(animal.data);
		return `${animal.data}, you can try in ${animal.data}`;
		// return one;
	} else {
		return `${animal.data}, you can try in ${animal.data.nextUpdateIn}`;
		// const two = console.log(animal.data);
		// return two;
	}
}

checkAnimalData({
	status: Status.NotAvailable,
	data: {
		message: "Not available",
		nextUpdateIn: new Date()
	}
})
//задачу решил, но нужно использовать больше интерфейсов и типов данных для более ясной структуры кода