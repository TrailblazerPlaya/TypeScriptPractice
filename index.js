var PaymentStatus;
(function (PaymentStatus) {
    PaymentStatus["Success"] = "success";
    PaymentStatus["Failed"] = "failed";
})(PaymentStatus || (PaymentStatus = {}));
function isResponseSuccess(response) {
    return response.status === PaymentStatus.Success;
}
function processResponse(response) {
    if (isResponseSuccess(response)) {
        console.log('Успешный платеж', PaymentStatus.Success);
    }
    else {
        console.log(PaymentStatus.Failed);
    }
}
var successResponse = {
    status: PaymentStatus.Success,
    data: {
        sum: 100,
        from: 1,
        to: 2,
        databaseId: 1,
    },
};
var failedResponse = {
    status: PaymentStatus.Failed,
    data: {
        errorMessage: 'Error',
        errorCode: 1,
    },
};
processResponse(successResponse);
processResponse(failedResponse);
