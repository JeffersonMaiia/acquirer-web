import {SubError} from "./sub-error.model";

export class ApiError {
    status: string;
    timestamp: string;
    message: string;
    debugMessage: any;
    subErrors: SubError[];


    constructor() {
        this.subErrors = new Array();
    }
}
