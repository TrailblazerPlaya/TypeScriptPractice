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
// enum AnimalEnum {
// 	Cat = 'cat',
// 	Dog = 'dog',
// 	Bird = 'bird',
// }

// enum Status {
// 	Available = 'available',
// 	NotAvailable = 'not available',
// }


// interface Animal {
//     animal: AnimalEnum,
//     breed: string,
//     sterilized?: string
// }

// // Response #1

// interface AnimalData { //можно было прописать extends для Animal чтобы не дублировать код
//     status: Status.Available,
//     data: {
//         animal: AnimalEnum,
//         breed: string,
//         sterilized?: string,
//         location: string,
//         age?: number
//     }
// }

// // Response #2

// interface AnimalData2 {
//     status: Status.NotAvailable,
//     data: {
//         message: string,
//         nextUpdateIn: Date
//     }
// }

// //следовало создать еще один тип, который объединял бы оба интерфейса

// function checkAnimalData(animal: AnimalData | AnimalData2): string  {
// 	if (Status.Available === animal.status) {
// 		// Заменить условие!
// 		// const one = console.log(animal.data);
// 		return `${animal.data}, you can try in ${animal.data}`;
// 		// return one;
// 	} else {
// 		return `${animal.data}, you can try in ${animal.data.nextUpdateIn}`;
// 		// const two = console.log(animal.data);
// 		// return two;
// 	}
// }

// checkAnimalData({
// 	status: Status.NotAvailable,
// 	data: {
// 		message: "Not available",
// 		nextUpdateIn: new Date()
// 	}
// })
//задачу решил, но нужно использовать больше интерфейсов и типов данных для более ясной структуры кода


///lesson42
// const forms = document.querySelectorAll("form");
// const emailInput = document.querySelector("#email") as HTMLInputElement;
// const titleInput = document.querySelector("#title") as HTMLInputElement;
// const textInput = document.querySelector("#text") as HTMLInputElement;
// const checkInput = document.querySelector("#check") as HTMLInputElement;
// // const submitButton = document.querySelector(".btn") as HTMLButtonElement;
// //для начала нужно создать interface для этого объекта, буква I в начале обозначает интерфейс
// interface IFormData {
// 	email: string;
// 	title: string;
// 	text: string;
// 	checkbox: boolean;
// }


// const formData: IFormData = {
// 	email: "",
// 	title: "",
// 	text: "",
// 	checkbox: false,
// };

// //методом перебора каждой формы происходит событие submit
// forms.forEach((form) => {
// 	form.addEventListener("submit", (e) => {
// 		e.preventDefault();

// 	// Можно и создавать другой объект для соблюдения иммутабельности, но пока не обязательно
// 	formData.email = emailInput?.value ?? "";
// 	formData.title = titleInput?.value ?? "";
// 	formData.text = textInput?.value ?? "";
// 	formData.checkbox = checkInput?.checked ?? false;

// 	if (validateFormData(formData)) {
// 		checkFormData(formData);
// 	}
// })



// // Последовательность действий:
// // 1) Происходит submit любой из форм
// // 2) Все данные из 4х полей со страницы переходят в свойства объекта formData
// // 3) Запускается функция validateFormData с этим объектом, возвращает true/false
// // 4) Если на предыдущем этапе true, то запускается функция checkFormData с этим объектом

// function validateFormData(data: IFormData): boolean  {
// 	// Если каждое из свойств объекта data заполнено
// 	if (Object.values(data).every((value) => value!== "")) {
// 		return true;
// 	} else {
// 		console.log("Please, complete all fields");
// 		return false;
// 	}
// }

// function checkFormData(data: IFormData) {
// 	const { email } = data;
// 	const emails = ["example@gmail.com", "example@ex.com", "admin@gmail.com"];

// 	// Если email совпадает хотя бы с одним из массива
// 	if (emails.some((e) => e === email)) {
// 		console.log("This email is already exist");
// 	} else {
// 		console.log("Posting data...");
// 	}
// }
//с задачей не справился, не знал как записывать данные в объект formData
//submit кнопку не нужно было получать, так как её тип уже submit 
//нужно побольше узнать о методах взаимодействия с объектом и как их использовать
//ну в общем я запомнил как пушить данные в объект с инпута
//не справился, ну бывает 0.о











/////////////////////////////////////////////////Generics 
/////////lesson44
// function processingData <T, A>(data: T[], options: A): string {
// 	data.length;
// 	switch(typeof data) {
// 		case "string": 
// 			return `${data}, ${options}`;
// 			break;
// 		case "number":
// 			return `${data.toFixed()}, speed: ${options} `;	
// 			break;
// 		default:
// 			return "Unknown type";		
// 	}		

// }

// let res1 = processingData(['sss'], 1);
// let res2 = processingData([5], 'sss');

// let res3 = processingData<number, string>([22], 's2qq');



//////////////lesson47
// Создать Generic-интерфейс PlayerData, который подходил бы для создания таких объектов:
// interface PlayerData<T> {
// 	game: T;
// 	hours: number | string | {total: number, inMenu: number};
// 	server: string;
// }

// const player1: PlayerData<string> = {
// 	game: "CS:GO",
// 	hours: 300,
// 	server: "basic",
// };

// const player2: PlayerData<number> = {
// 	game: 2048,
// 	hours: "300 h.",
// 	server: "arcade",
// };

// const player3: PlayerData<string> = {
// 	game: "Chess",
// 	hours: {
// 		total: 500,
// 		inMenu: 50,
// 	},
// 	server: "chess",
// };

// // Массив данных с фигурами содержит объекты, у каждого из которых обязательно есть свойство name
// // Каждый объект может еще содержать дополнительные свойства в случайном виде
// // Свойство name может иметь только 4 варианта
// // Функция calculateAmountOfFigures должна принимать массив с объектами, у которых обязательно должно быть свойство name
// // Возвращает она объект-экземпляр AmountOfFigures
// // Внутри себя подсчитывает сколько каких фигур было в массиве и записывает результаты в AmountOfFigures
// // С текущими данными в консоль должно попадать:
// // { squares: 3, circles: 2, triangles: 2, others: 1 }

// enum FigurName {
// 	Rect = "rect",
// 	Circle = "circle",
// 	Triangle = "triangle",
// 	Line = "line",
// }

// interface Figur {
// 	name: FigurName;
// }

// interface AmountOfFigures {
// 	squares: number;
// 	circles: number;
// 	triangles: number;
// 	others: number;
// }

// function calculateAmountOfFigures<T extends Figur>(figure: T[]): AmountOfFigures {
// 	const amounth: AmountOfFigures = {
// 		squares: 0,
// 		circles: 0,
// 		triangles: 0,
// 		others: 0,
// 	}

// 	figure.forEach((figure) => {
// 		switch (figure.name) {
// 			case FigurName.Rect: amounth.squares++; break;
// 			case FigurName.Circle: amounth.circles++; break;
// 			case FigurName.Triangle: amounth.triangles++; break;
// 			default: amounth.others++;
// 		}
// 	})

// 	return amounth;
// }

// const data = [
// 	{
// 		name: FigurName.Rect,
// 		data: { a: 5, b: 10 },
// 	},
// 	{
// 		name: FigurName.Rect,
// 		data: { a: 6, b: 11 },
// 	},
// 	{
// 		name: FigurName.Triangle,
// 		data: { a: 5, b: 10, c: 14 },
// 	},
// 	{
// 		name: FigurName.Line,
// 		data: { l: 15 },
// 	},
// 	{
// 		name: FigurName.Circle,
// 		data: { r: 10 },
// 	},
// 	{
// 		name: FigurName.Circle,
// 		data: { r: 5 },
// 	},
// 	{
// 		name: FigurName.Rect,
// 		data: { a: 15, b: 7 },
// 	},
// 	{
// 		name: FigurName.Triangle,
// 	},
// ];

// console.log(calculateAmountOfFigures(data));


///////lesson 53
// interface IPhone {
// 	company: string;
// 	number: number;
// }

// // IMobilePhone должен наследоваться от IPhone,
// // тип свойства companyPartner зависит от свойства company

// interface IMobilePhone extends IPhone {
// 	size: string;
// 	companyPartner: IPhone["company"];
// 	manufactured: Date;
// }

// // Типизировать объект phones

// const phones: IMobilePhone[] = [
// 	{
// 		company: "Nokia",
// 		number: 1285637,
// 		size: "5.5",
// 		companyPartner: "MobileNokia",
// 		manufactured: new Date("2022-09-01"),
// 	},
// 	{
// 		company: "Samsung",
// 		number: 4356637,
// 		size: "5.0",
// 		companyPartner: "SamMobile",
// 		manufactured: new Date("2021-11-05"),
// 	},
// 	{
// 		company: "Apple",
// 		number: 4552833,
// 		size: "5.7",
// 		companyPartner: "no data",
// 		manufactured: new Date("2022-05-24T12:00:00"),
// 	},
// ];

// interface IPhonesManufacturedAfterDate extends IMobilePhone {
// 	InitialDate: string;
// }

// // Функция должна отфильтровать массив данных и вернуть новый массив
// // с телефонами, выпущенными после даты в третьем аргументе

// function filterPhonesByDate(
// 	phones: IMobilePhone[],
// 	key: keyof IMobilePhone,
// 	initial: string
// ): IPhonesManufacturedAfterDate[] {
// 	return phones.filter((phone) => {
// 		const manufactured = phone[key];
// 		if(manufactured instanceof Date && manufactured.getTime() > new Date(initial).getTime()) {
// 			return phone;
// 		}
// 	}).map((phone) => {
// 		const newObject = { ...phone, InitialDate: initial }; 
// 		return newObject;
// 	})
// }

// // Второй аргумент при вызове функции должен быть связан с первым,
// // а значит мы получим подсказки - свойства этого объекта

// console.log(filterPhonesByDate(phones, "manufactured", "2022-01-01"));

///lesson 59
// Необходимо типизировать этот большой объект
// Свойство futureClasses должно быть в зависимости от classes по типу
// Свойства exClients и futureClients тоже должны быть в зависимости от currClients
// ИЛИ все три зависят от общего родителя

// Простыми словами: при добавлении свойства в целевой объект они должны быть
// автоматически добавлены в зависимые (сразу подсказка от TS)
// interface IFitnessClass {
// 	name: string;
// 	startsAt: string;
// 	duration: number;
// }

// interface IFutureClass extends Omit<IFitnessClass, "startsAt">{
// 	willStartsAt: string;
// }


// interface IClient {
// 	name: string;
// 	age?: "-" | number;
// 	gender?: "male" | "female";
// 	timeLeft?: string;
// }

// interface ExClient extends IClient {
// 	makeCallFor: Date;
// }

// interface FutureClient extends IClient {
// 	makeCallFor: Date;
// }

// interface FitnessClub {
// 	clubName: string;
// 	location: string;
// 	classes: IFitnessClass[];
// 	futureClasses: IFutureClass[];
// 	currClients: IClient[];
// 	exClients: ExClient[];
// 	futureClients: FutureClient[];
// }


// const fitnessClubCenter: FitnessClub = {
// 	clubName: "Fitness club Center",
// 	location: "central ave. 45, 5th floor",
// 	classes: [
// 		{
// 			name: "yoga",
// 			startsAt: "8:00 AM",
// 			duration: 60,
// 		},
// 		{
// 			name: "trx",
// 			startsAt: "11:00 AM",
// 			duration: 45,
// 		},
// 		{
// 			name: "swimming",
// 			startsAt: "3:00 PM",
// 			duration: 70,
// 		},
// 	],
// 	futureClasses: [
// 		{
// 			name: "boxing",
// 			willStartsAt: "6:00 PM",
// 			duration: 40,
// 		},
// 		{
// 			name: "breath training",
// 			willStartsAt: "8:00 PM",
// 			duration: 30,
// 		},
// 	],
// 	currClients: [
// 		{
// 			name: "John Smith",
// 			age: "-",
// 			gender: "male",
// 			timeLeft: "1 month",
// 		},
// 		{
// 			name: "Alise Smith",
// 			age: 35,
// 			gender: "female",
// 			timeLeft: "3 month",
// 		},
// 		{
// 			name: "Ann Sonne",
// 			age: 24,
// 			gender: "female",
// 			timeLeft: "5 month",
// 		},
// 	],
// 	exClients: [
// 		{
// 			name: "Tom Smooth",
// 			age: 50,
// 			gender: "male",
// 			makeCallFor: new Date("2023-08-12"),
// 		},
// 	],
// 	futureClients: [
// 		{
// 			name: "Maria",
// 			makeCallFor: new Date("2023-07-10"),
// 		},
// 	],
// };
// //задачу решил, но нужно было использовать больше типов вместо оператора ? 
// //переделывать лень, но суть я знаю 

// /////////////////////////////////////////Задача со слайдером
// interface ISlider {
// 	container?: string;
// 	numberOfSlides?: number;
// 	speed?: 300 | 500 | 700;
// 	direction?: "horizontal" | "vertical";
// 	dots?: boolean;
// 	arrows?: boolean;
// 	animationName?: string;
// }

// function createSlider({
// 	container = "",
// 	numberOfSlides = 1,
// 	speed = 300,
// 	direction = "horizontal",
// 	dots = true,
// 	arrows = true,
// }: ISlider = {}): void {
// 	console.log(container, numberOfSlides, speed, direction, dots, arrows);
// }

// createSlider();

// // Необходимо типизировать объект настроек, который будет зависим
// // от интерфейса ISlider
// // Все поля в нем обязательны для заполнения

// type TCustomSliderBase = Required<Omit<ISlider, "animationName" | "speed">>;
// //Required делает все свойства обязательными, Omit убирает некоторые
// interface ICustomSlider extends TCustomSliderBase {
// 	speed: number;
// }

// const customSliderOptions: ICustomSlider = {
// 	container: "id",
// 	numberOfSlides: 4,
// 	speed: 1100,
// 	direction: "horizontal",
// 	dots: true,
// 	arrows: true,
// };

// function createCustomSlider(options: ICustomSlider): void {
// 	if ("container" in options) {
// 		console.log(options);
// 	}
// }


// //////////////////////////////////////
// ////////Задача с формами
// interface IForm {
// 	login: string;
// 	password: string;
// }

// // Необходимо типизировать объект валидации
// // Учтите, что данные в форме могут расширяться и эти поля
// // должны появиться и в объекте валидации

// // type TValidationData = {
// // 	[key in keyof IForm]: {
// // 		isValid: boolean;
// // 		errorMsg?: string;
// // 	}
// // }

// const validationData: TValidation<IForm> = {
// 	login: { isValid: false, errorMsg: "At least 3 characters" },
// 	password: { isValid: true },
// };

// type TValidation<T> = {
// 	[P in keyof T] : {
// 		// isValid: boolean;
// 		// errorMsg?: string;

// 		isValid : true
// 	} | {
// 		isValid: false;
// 		errorMsg: string;
// 	}
// }

// class User {
// 	login: string;
// 	password: number;

// 	constructor(login: string, password: number) {
// 		this.login = login;
// 		this.password = password;
// 	}

	
// }

// class AdminUser extends User {
// 	role: string;
// 	height: number = 1.8;
// 	constructor(role: string, login: string) {
// 		super(login, 123);
// 		this.role = role;
// 	}
// }

// new AdminUser("admin", "admin");

// enum TransferStatus {
// 	Pending = "pending",
// 	Rejected = "rejected",
// 	Completed = "completed",
// }

// enum ErrorMessages {
// 	NotFound = "Not found: 404",
// 	NotEnoughSpace = "Not enough space: 507",
// 	Forbidden = "Forbidden: 403",
// }

// interface ITransfer {
// 	path: string;
// 	data: string[];
// 	date?: Date;
// 	start: (p: string, d: string[]) => string;
// 	stop: (reason: string) => string;
// }

// interface TransferError {
// 	message: ErrorMessages;
// }

// // Класс должен имплементировать ITransfer и TransferError
// class SingleFileTransfer implements ITransfer, TransferError {
// 	path!: string;
// 	data!: string[];
// 	date?: Date | undefined;
// 	message!: ErrorMessages;
//     // Место для реализаций
// 	start (p: string, d: string[]): string {
// 		this.path = p;
// 		this.data = d;
// 		this.date = new Date();
// 		return `Started transfer for path ${this.path}`;
// 	}

// 	stop (reason: string): string {
// 		this.date = new Date();
// 		return `Transfer stopped. Reason: ${reason}. Date: ${this.date}`;
// 	}
//     // Необходимо создать метод checkTransferStatus, проверяющий состояние передачи данных
//     // Можно вывести в консоль данные, можно вернуть строку
// 	checkTransferStatus(): string {
// 		if (this.date) {
// 			return `Transfer is running. Date: ${this.date}`;
// 		}
// 		return `Transfer is still pending.`;
// 	}
//     // Необходимо создать метод, который будет останавливать передачу данных
//     // И возвращать строку с причиной и датой остановки (Дата в любом формате)

// 	getStatusWithErrorMessage(errorMessage: ErrorMessages): string {
// 		this.message = errorMessage;
// 		return `Transfer status: ${this.getStatus()} - ${this.message}`;
// 	}

// 	private getStatus(): TransferStatus {
// 		if (this.date) {
// 			return TransferStatus.Completed;
// 		} else {
// 			return TransferStatus.Pending;
// 		}
// 	}
//     // Необходимо создать метод, который будет возвращать строку, содержащую
//     // Статус передачи и любое сообщение об ошибке. На ваш выбор или отталкиваться от приходящего аргумента
//     // Метод может показаться странным, но может использоваться для тестов, например

// }
//нихуя не понял, в курсе нет объяснения этой задачи



////////////////////////////////////////////////////////////////////////////////////
//////////////////////lesson 71
// class Player {
// 	private static game: string = "COD";


// 	#login: string; //синтаксис приватного свойства из обычного js
// 	private _password: string;
// 	public server: string;
// 	protected consent: boolean;

// 	constructor(login: string) {
// 		this.#login = login;
// 	}

// 	//private constructor (){//это позволяет запретить создание экземпляров класса
// 		//это нужно если в классе одни статичные свойства
// 	//}

// 	get password () {
// 		return this._password;
// 	}

// 	set password (value: string) {
// 		//ну вообще тут не просто помещение нового пароля, тут должна быть валидация(проверка на соответсвие)
// 		this._password = value;
// 	}

// 	logIn = (/*this: Player*/) => {
// 		return `Player ${this.#login} logged in`;
// 	}

// 	static getGameName() {
// 		return Player.game;
// 	}


// 	connect () {
// 		//Do smth
// 		return this;
// 	}


// 	isPro(): this is CompetitivePlayer {
// 		return this instanceof CompetitivePlayer;
// 	}
// }

// const player = new Player("test");
// // console.log(player.logIn());
// console.log(player.connect().logIn());//вот таким образом свойство connect возвращает контекст, то есть возвратитс просто player и мы можем использовать повторно его методы |chaining

// // const test = player.logIn.bind(player);//привязываем жестко контекст к экземпляру
// const test = player.logIn;//это вариант с использованием стрелочной функции в методе logIn
// test();

// // console.log(Player.getGameName());

// class CompetitivePlayer extends Player {
// 	rank: number;

// 	checkLogin() {
// 		// return super.logIn();//когда мы использовали стрелочную функцию, то мы не можем использовать super
// 		//она не записывается в prototype


// 		return this.logIn();
// 	}

// 	isConsented() {
// 		this.consent ? "yes" : "No";
// 	}
// }


// const player2 = new CompetitivePlayer('test2');
// console.log(player2.checkLogin());

// const somePlayer: Player | CompetitivePlayer = new CompetitivePlayer('test3');
// somePlayer.isPro() ? console.log(somePlayer) : console.log(somePlayer);

// const player = new CompetitivePlayer();
// player.password = "123";
// class User {
// 	email: string;
// 	password: string;
// 	constructor(email: string, password: string) {
// 		this.email = email;
// 		this.password = password;
// 	}
// }

// class User {//такая запись заменяет длинную запись как выше
// 	constructor(public email: string, public password: string) {}
// }


////lesson 75
interface IEngine {
	model: string;
	capacity: number;
	startEngine: (time: Date) => string;
}

abstract class AbstractVehicle {
	model: string;
	capacity: number;
	abstract startEngine: (time: Date) => string;
	stopEngine(time: Date): string	{
		return "Stop";
	}
}

class Vehicle extends AbstractVehicle {
	startEngine = (time: Date) => {
		return "Start";
	};
}

new Vehicle();