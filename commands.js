const program = require('commander');
const { prompt } = require('inquirer');

// Customer questions
const questions = [
  {
    type: 'input',
    name: 'firstname',
    message: 'Customer first name'
  },
  {
    type: 'input',
    name: 'lastname',
    message: 'Customer last name'
  },
  {
    type: 'input',
    name: 'phone',
    message: 'Customer phone'
  },
  {
    type: 'input',
    name: 'email',
    message: 'Customer email address'
  },
];

const { addCustomer, findCustomer, updateCustomer, removeCustomer, listCustomers } = require('./index');

program
  .version('1.0.0')
  .description('Client management CLI')

// Add customer
// Without commander
// program
//   .command('add <firstname> <lastname> <email> <phone>')
//   .alias('a')
//   .description('Add a customer')
//   .action((firstname, lastname, phone, email) => {
//     addCustomer({ firstname, lastname, phone, email });
//   })

// With Inquirer
program
  .command('add')
  .alias('a')
  .description('Add a customer')
  .action(() => {
    prompt(questions)
      .then(answers => addCustomer(answers));
  })

// Find customer
program
  .command('find <name>')
  .alias('f')
  .description('Find a customer')
  .action((name) => {
    findCustomer(name);
  });

// Udpate customer
program
  .command('update <_id>')
  .alias('u')
  .description('Update a customer')
  .action((_id) => {
    prompt(questions)
      .then(answers => updateCustomer(_id, answers))
  })

// Remove customer
program
  .command('remove <id>')
  .alias('r')
  .description('Remove a customer')
  .action((id) => {
    removeCustomer(id);
  });

// List customer
program
  .command('list')
  .alias('l')
  .description('List all customers')
  .action(() => {
    listCustomers();
  });

program.parse(process.argv);