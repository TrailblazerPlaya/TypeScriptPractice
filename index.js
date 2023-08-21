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
var Product = /** @class */ (function () {
    function Product(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
    return Product;
}());
var Delivery = /** @class */ (function () {
    function Delivery(date, address, storeId) {
        this.date = date;
        this.address = address;
        this.storeId = storeId;
    }
    return Delivery;
}());
var Card = /** @class */ (function () {
    function Card() {
        this.product = [];
    }
    Card.prototype.addProduct = function (product) {
        this.product.push(product);
        console.log('Product added');
    };
    Card.prototype.removeProductById = function (id) {
        this.product = this.product.filter(function (product) { return product.id !== id; });
    };
    Card.prototype.calculateTotalPrice = function () {
        return this.product.reduce(function (total, product) { return total + product.price; }, 0);
    };
    Card.prototype.setDelivery = function (delivery) {
        this.delivery = delivery;
        console.log('Delivery set');
    };
    Card.prototype.checkout = function () {
        return this.product.length > 0 && this.delivery !== undefined;
    };
    return Card;
}());
var product1 = new Product(1, "Product 1", 100);
var product2 = new Product(2, "Product 2", 200);
var delivery1 = new Delivery(new Date('2023-08-21'), 'Address 1');
var delivery2 = new Delivery(new Date(), undefined, 1);
var cart = new Card();
cart.addProduct(product1);
cart.addProduct(product2);
cart.setDelivery(delivery1);
