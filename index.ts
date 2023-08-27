/** 
 * Необходимо сделать тип для результатов валидации формы, основываясь на типе формы 
 */

interface IForm {
    name: string;
    password: string;
}

type FormValidationResult<T extends Record<string, any>> = {
    // [K in keyof T]: {
    //     isValue: boolean;
    //     errorMassage?: string;
    // };
    [K in keyof T] : {
        isValue: true;
    } | {
        isValue: false;
        errorMassage: string;
    }
}
const form: IForm = {
    name: 'Kolya',
    password: 'asdasd'
}

const formValidation: FormValidationResult<IForm> = {
    name: { isValue: true },
    password : { isValue: false, errorMassage: 'должен быть больше 5 символов' }
}
/**Здесь мы определяем тип  FormValidationResult<T> , который использует Mapped Types для создания объекта с ключами из типа  T  (в данном случае  IForm ). Каждому ключу соответствует объект с двумя свойствами:  isValue  типа  boolean  и, при необходимости,  errorMessage  типа  string . Таким образом, вы можете использовать тип  FormValidationResult<IForm>  для представления результатов валидации формы с указанием, заполнено ли поле ( isValue ) и, при необходимости, сообщения об ошибке ( errorMessage ). */