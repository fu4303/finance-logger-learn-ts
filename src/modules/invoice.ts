import {UserDetails} from '../interfaces/formatter';

export class Invoice implements UserDetails {
  constructor(
    readonly client: string,
    private details: string,
    public amount: number
  ){}

  getUser(){
    return `Hey ${this.client} owes $ ${this.amount} for ${this.details}`;
  }
}