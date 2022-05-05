export class Message {
    id: string
    message: string;
    date: Date;
    isSeen: boolean;

    constructor(id: string, message: string, date: Date, isSeen: boolean) {
        this.id = id;
        this.message = message;
        this.date = date;
        this.isSeen = isSeen;
    }
}
