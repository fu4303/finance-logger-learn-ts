export class Payments {
    constructor(recipient, details, amount) {
        this.recipient = recipient;
        this.details = details;
        this.amount = amount;
    }
    getUser() {
        return `Hey ${this.recipient} owes $ ${this.amount} for ${this.details}`;
    }
}
