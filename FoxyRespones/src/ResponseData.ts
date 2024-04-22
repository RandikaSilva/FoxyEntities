import { HttpStatus, StatusMessage } from "foxyenums";

export class ResponseData {

    constructor(
        public readonly statusCode: HttpStatus,
        public readonly statusMessage: StatusMessage,
        public readonly documentCount: number,
        public readonly data?: any,
    ){}
}
