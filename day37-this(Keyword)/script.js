console.log(this);
var a=10; 
function sayHi(){
    console.log("HIi")
}
var balanceAmount=120000;

let userDetails={
    name:'Dileep', 
    age:22, 
    balanceAmount:230000,
    fetchBalance(){
       
        console.log(`${this.balanceAmount}`)
    }
}
userDetails.fetchBalance();
// const balance=userDetails.fetchBalance;
// balance();