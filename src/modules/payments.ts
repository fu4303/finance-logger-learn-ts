
import {UserDetails} from '../interfaces/formatter';

export class Payments implements UserDetails {
  constructor(
    readonly recipient: string,
    private details: string,
    public amount: number
  ){}

  getUser(){
    return `Hey ${this.recipient} owes $ ${this.amount} for ${this.details}`;
  }
}