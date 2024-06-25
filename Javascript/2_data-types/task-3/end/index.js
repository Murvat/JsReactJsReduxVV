let goodNumber = 17;
let anotherNumber = goodNumber;
anotherNumber = 77;

console.log(goodNumber); // 17
console.log(anotherNumber); // 77

let customer = {
    name: 'John',
    age: 17
};
let anotherCustomer = customer;
anotherCustomer.age = 20

console.log(customer.age); // 20
console.log(anotherCustomer.age); // 20