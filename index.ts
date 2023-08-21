/*Необходимо сделать корзину (Cart) на сайте,
которая имееет список продуктов (Product), добавленных в корзину
и переметры доставки (Delivery). Для Cart реализовать методы:
- Добавить продукт в корзину
- Удалить продукт из корзины по ID
- Посчитать стоимость товаров в корзине
- Задать доставку
- Checkout - вернуть что всё ок, если есть продукты и параметры доставки
Product: id, название и цена
Delivery: может быть как до дома (дата и адрес) или до пункта выдачи (дата = Сегодня и Id магазина)*/

class Product {
    id: number;
    name: string;
    price: number;
    constructor(id: number, name: string, price: number) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
}       

class Delivery {
    date: Date;
    address?: string;
    storeId?: number;
    constructor(date: Date, address?: string, storeId?: number) {
        this.date = date;
        this.address = address;
        this.storeId = storeId;
      }
}

class Card {
    product: Product[] = [];
    delivery?: Delivery;
    
    addProduct(product: Product) : void {
        this.product.push(product);
        console.log('Product added');
    }

    removeProductById(id: number) : void {
        this.product = this.product.filter(product => product.id !== id);
    }

    calculateTotalPrice() : number {
        return this.product.reduce((total, product) => total + product.price, 0);
    }

    setDelivery(delivery: Delivery) : void {
        this.delivery = delivery;
        console.log('Delivery set');
    }

    checkout() : boolean {
        return this.product.length > 0 && this.delivery !== undefined;
    }
}

const product1 = new Product(1, "Product 1", 100);
const product2 = new Product(2, "Product 2", 200);

const delivery1 = new Delivery(new Date('2023-08-21'), 'Address 1');
const delivery2 = new Delivery(new Date(), undefined, 1);

const cart = new Card();

cart.addProduct(product1);
cart.addProduct(product2);
cart.setDelivery(delivery1);