/**
 * Декоратор, который добавляет свойство createdAt в класс, фиксируя дату создания
 * 
 */

interface IUserService  {
    users: number;
    getUserInDatabase(): number;
}
@CreatedAt //experimentalDecorators: true иначе будет ошибка
class UserService implements IUserService  {
    users: number = 1000;
    getUserInDatabase(): number {
        return this.users;
    }
}    

function CreatedAt<T extends { new (...args: any[]): {}}>(constructor: T) {
    return class extends constructor {
        createdAt: Date = new Date();
    }
}

type CreatedAt = {
    createdAt: Date
}

console.log((new UserService() as IUserService & CreatedAt).getUserInDatabase());