'use strict';
// Creat a constructor function that receive product details (productName,prise,inventory) thin build a method to display this data in clear outputted form
// build two product using your constructor function
// i.e : (Pepsi,2.33,2232) -> Form item Pepsi selling prise 2.33€. we have 2232 in our store

function Article(productName, price, inventory) {
  this.productName = productName;
  this.price = price;
  this.inventory = inventory;
  this.display = function () {
    console.log(`
      Name: ${ this.productName },
      Price: ${ this.price } €,
      ID: ${ this.inventory }
    `);
  };
}

let spikes = new Article('Spikes', '12.00', '0001');
let shoeLaces = new Article('Laces', '6.00', '0002');

spikes.display();
shoeLaces.display();

// get & set, create a car object that uses getter and setter method to get and set the following (modelName,modelNumber,enginCapacity)
// first get the data
// then set the data

let car = {
  modelname: '',
  modelnumber: 0,
  engineCapacity: 0,
  get name() {
    return this.modelname;
  },
  set name(modelname) {
    this.modelname = modelname;
  },
  get engine() {
    return `${ this.engineCapacity } PS`;
  },
  set engine(ps) {
    this.engineCapacity = ps;
  },
};

car.name = 'BMW Isetta';
console.log(car.name);

car.engine = Infinity + 1;
console.log(car.engine);
