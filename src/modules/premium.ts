export class PremiumUser {

  constructor(
    public name: string, 
    readonly premium: boolean, 
    private amount: number
  ){}
  
  getUser(){
    return `Hey ${this.name} are you a premium user? ${this.premium}. How much $ ${this.amount}`;
  }

}
