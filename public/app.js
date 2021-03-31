// const anchor = document.querySelector('a')!;
// console.log(anchor.href);
import { PremiumUser } from './modules/premium.js';
const form = document.querySelector('.new-item-form');
const type = document.querySelector('#type');
const toFrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value, toFrom.value, details.value, amount.valueAsNumber);
});
class Invoice {
    constructor(client, detail, amount) {
        this.client = client,
            this.detail = detail,
            this.amount = amount;
    }
    getDetails() {
        return `${this.client} owes $ ${this.amount} for ${this.amount}`;
    }
}
let invoiceOne = new Invoice('Tracy', 'work on Jane\'s website', 200);
let invoiceTwo = new Invoice('Jiminshie', 'work on App design', 300);
console.log(invoiceOne, invoiceTwo);
const invoices = [];
invoices.push(invoiceOne);
invoices.push(invoiceTwo);
console.log(invoices);
invoiceTwo.client = 'Amy';
invoiceOne.amount = 1000;
console.log(invoiceOne, invoiceTwo);
let userOne = new PremiumUser('Tracy', true, 20000);
let userTwo = new PremiumUser('Hobi', true, 60000);
let premiumUsers = [];
premiumUsers.push(userOne, userTwo);
premiumUsers.forEach(user => {
    console.log(user.name, user.premium);
});
console.log(premiumUsers);
