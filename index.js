const mongoose = require('mongoose');

// Map global promise - get rid of warning
mongoose.Promise = global.Promise;
// Connect to DB
const db = mongoose.connect('mongodb://localhost:27017/customercli', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

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

// Update customer
const updateCustomer = (_id, customer) => {
  Customer.update({ _id }, customer)
    .then(customer => {
      console.info('Updated customer', customer);
      db.close();
    });
};

// Remove customer
const removeCustomer = (_id) => {
  Customer.update({ _id })
    .then(customer => {
      console.info('Customer removed');
      db.close();
    });
};

// Find all cutomers
const listCustomers = (_id) => {
  Customer.update({ _id })
    .then(customers => {
      console.info(customers);
      console.info(`${customers.length} matches`);
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
  updateCustomer,
  removeCustomer,
  listCustomers,
  findCustomer,
};