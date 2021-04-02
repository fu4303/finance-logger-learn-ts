
import {Invoice} from './modules/invoice.js'
import {Payments} from './modules/payments.js';
import {UserDetails} from './interfaces/formatter.js';
import { ListTemplate } from './modules/listTemplate.js';

const form = document.querySelector('.new-item-form') as HTMLFormElement;


const type = document.querySelector('#type') as HTMLSelectElement;
const toFrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

const ul = document.querySelector('ul')!;
const  list = new ListTemplate(ul);

form.addEventListener('submit', (e: Event)=>{
  e.preventDefault();
  
  let doc: UserDetails;
  let values:[string,string,number] = [toFrom.value, details.value, amount.valueAsNumber];
  if(type.value === 'invoice'){
    doc = new Invoice(...values);
  }else{
    doc = new Payments(...values);
  }
  list.render(doc, type.value, 'end');

  console.log(
    doc
  )
} )
