// const anchor = document.querySelector('a')!;

// console.log(anchor.href);

import {PremiumUser} from './modules/premium.js'

const form = document.querySelector('.new-item-form') as HTMLFormElement;


const type = document.querySelector('#type') as HTMLSelectElement;
const toFrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;



form.addEventListener('submit', (e: Event)=>{
  e.preventDefault();
  console.log(
    type.value,
    toFrom.value,
    details.value,
    amount.valueAsNumber
  )
} )

class Invoice {
  client: string;
  detail: string;
  amount: number;

  constructor(client: string, detail: string, amount: number){
    this.client = client,
    this.detail = detail,
    this.amount = amount;
  }

  getDetails(){
    return `${this.client} owes $ ${this.amount} for ${this.amount}` ;
  }

}

let invoiceOne = new Invoice ('Tracy','work on Jane\'s website', 200);
let invoiceTwo = new Invoice ('Jiminshie','work on App design', 300);

console.log(invoiceOne, invoiceTwo);

const invoices: Invoice[] = [];
invoices.push(invoiceOne);
invoices.push(invoiceTwo);

console.log(invoices)

invoiceTwo.client = 'Amy';
invoiceOne.amount = 1000;
console.log(invoiceOne, invoiceTwo);



let userOne = new PremiumUser ('Tracy', true, 20000);
let userTwo = new PremiumUser ('Hobi', true, 60000);

let premiumUsers :PremiumUser [] = [];

premiumUsers.push(userOne, userTwo);

premiumUsers.forEach(user =>{
  console.log(user.name, user.premium);
})

console.log(premiumUsers);


