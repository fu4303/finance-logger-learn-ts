export class PremiumUser {
    constructor(name, premium, amount) {
        this.name = name;
        this.premium = premium;
        this.amount = amount;
    }
    getUser() {
        return `Hey ${this.name} are you a premium user? ${this.premium}. How much $ ${this.amount}`;
    }
}
