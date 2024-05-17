export class AppError {
    errorMessage;
    statusCode;

    constructor(errorMessage: string, statusCode: number) {
        this.errorMessage = errorMessage;
        this.statusCode = statusCode;
    }
}