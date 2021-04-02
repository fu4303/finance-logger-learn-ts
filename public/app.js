// const anchor = document.querySelector('a')!;
// console.log(anchor.href);
import { Invoice } from './modules/invoice.js';
import { Payments } from './modules/payments.js';
import { ListTemplate } from './modules/listTemplate.js';
const form = document.querySelector('.new-item-form');
const type = document.querySelector('#type');
const toFrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(toFrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payments(toFrom.value, details.value, amount.valueAsNumber);
    }
    list.render(doc, type.value, 'end');
    console.log(doc);
});
///generics
const profile = (obj) => {
    let randomID = Math.floor(Math.random() * 100);
    return (Object.assign(Object.assign({}, obj), { randomID }));
};
let personOne = profile({ name: 'tracy', age: 24 });
console.log(personOne.name);
//with interfaces
var ResourceType;
(function (ResourceType) {
    ResourceType[ResourceType["BOOK"] = 0] = "BOOK";
    ResourceType[ResourceType["NAME"] = 1] = "NAME";
    ResourceType[ResourceType["AUTHOUR"] = 2] = "AUTHOUR";
})(ResourceType || (ResourceType = {}));
let academicResources = {
    uid: ResourceType.AUTHOUR,
    resourceName: 'Biology',
    data: ['tracy', 'Jimin', 'Jungkook', 'Yoongi', 'NamJoon']
};
let otherResources = {
    uid: ResourceType.BOOK,
    resourceName: 'Software development',
    data: { name: 'Web development' }
};
console.log(academicResources, otherResources);
