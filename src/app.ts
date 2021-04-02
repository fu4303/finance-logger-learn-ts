// const anchor = document.querySelector('a')!;

// console.log(anchor.href);


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
  if(type.value === 'invoice'){
    doc = new Invoice(toFrom.value, details.value, amount.valueAsNumber);
  }else{
    doc = new Payments(toFrom.value, details.value, amount.valueAsNumber);
  }
  list.render(doc, type.value, 'end');

  console.log(
    doc
  )
} )



///generics
const profile= <T  extends {name: string}>(obj: T)=>{

  let randomID = Math.floor(Math.random() * 100);
  return ({...obj, randomID})
}

let personOne = profile ({name: 'tracy', age: 24});
console.log(personOne.name);
//with interfaces
enum ResourceType { BOOK, NAME,AUTHOUR}
interface Resource <T> {
  uid: ResourceType,
  resourceName: string,
  data: T
}

let academicResources: Resource<string[]> = {
  uid: ResourceType.AUTHOUR, 
  resourceName:'Biology', 
  data: ['tracy', 'Jimin', 'Jungkook', 'Yoongi', 'NamJoon']
}

let otherResources :Resource<object> ={
  uid: ResourceType.BOOK,
  resourceName: 'Software development',
  data: {name: 'Web development'}
}

console.log(academicResources, otherResources)