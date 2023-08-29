/**
 * Декоратор, который отлавливает ошибки
 * 
 */

interface IUserService  {
    users: number;
    getUserInDatabase(): number;
}

class UserService implements IUserService  {
    users: number = 1000;

    @errorHandling(false)
    getUserInDatabase(): number {
        throw new Error("Method not implemented.");
    }
}   


function errorHandling(rethrow : boolean = false) {
    return (
        target: Object,
        _: string,
        descriptor: TypedPropertyDescriptor<(...args: any[]) => any>
    ) : TypedPropertyDescriptor<(...args: any[]) => any> | void => {
        const originalMethod = descriptor.value;
        descriptor.value = async (...args: any[]) => {
            try {
                return await originalMethod?.apply(target, args);
            } catch (error) {
                if(error instanceof Error) {
                    console.log(error.message);
                    if (rethrow) {
                        throw error;
                    }
                }
            }
        }
    }
}

console.log(new UserService().getUserInDatabase());