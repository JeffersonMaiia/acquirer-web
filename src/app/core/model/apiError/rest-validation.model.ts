import {ApiError} from "./api-error.model";

export class Validation {
    apierror: ApiError;


    constructor() {
        this.apierror = new ApiError();
    }
}
