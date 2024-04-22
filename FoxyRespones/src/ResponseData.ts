export class ResponseData {

    constructor(
        public readonly statusCode: string,
        public readonly statusMessage: string,
        public readonly documentCount: number,
        public readonly data?: any,
    ){}
}
