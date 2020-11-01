const mongoose = require('mongoose');

// Map global promise - get rid of warning
mongoose.Promise = global.Promise;
// Connect to DB
const db = mongoose.connect('mongodb://localhost:27017/customercli');

// Import model 
const Customer = require('./models/customer');

// Add customer 
const addCustomer = (customer) => {
  Customer.create(customer)
    .then(customer => {
      console.info('New customer created');
      db.close();
    });
};

// Find customer 
const findCustomer = (name) => {
  // Make name case insensitive
  const search = new RegExp(name, 'i');
  
  Customer.find({$or: [{firstname: search}, {lastname: search}]})
    .then(customers => {
      console.info(customers);
      console.info(`${customer.length} macthes found`);
      db.close();
    })
};

module.exports = {
  addCustomer,
  findCustomer,
}