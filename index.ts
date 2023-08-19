interface IPayment {
	sum: number;
	from: number;
	to: number;
}

enum PaymentStatus {
	Success = 'success',
	Failed = 'failed',
}

interface IPaymentRequest extends IPayment { }

interface IDataSuccess extends IPayment {
	databaseId: number;
}

interface IDataFailed {
	errorMessage: string;
	errorCode: number;
}

interface IResponseSuccess {
	status: PaymentStatus.Success;
	data: IDataSuccess;
}

interface IResponseFailed {
	status: PaymentStatus.Failed;
	data: IDataFailed;
}

function isResponseSuccess(response: IResponseSuccess | IResponseFailed): response is IResponseSuccess {
    return response.status === PaymentStatus.Success;
}

function processResponse(response: IResponseSuccess | IResponseFailed) {
    if (isResponseSuccess(response)) {
        console.log('Успешный платеж', PaymentStatus.Success);
    } else {
        console.log(PaymentStatus.Failed);
    }
}

const successResponse: IResponseSuccess = {
    status: PaymentStatus.Success,
    data: {
        sum: 100,
        from: 1,
        to: 2,
        databaseId: 1,
    },
}

const failedResponse: IResponseFailed = {
    status: PaymentStatus.Failed,
    data: {
        errorMessage: 'Error',
        errorCode: 1,
    },
}

processResponse(successResponse);
processResponse(failedResponse);