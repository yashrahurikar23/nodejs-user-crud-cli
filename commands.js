const program = require('commander');
const { addCustomer, findCustomer } = require('./index');

program
  .version('1.0.0')
  .description('Client management CLI')

// Add customer
program
  .command('add <firstname> <lastname> <email> <phone>')
  .alias('a')
  .description('Add a customer')
  .action((firstname, lastname, phone, email) => {
    addCustomer({ firstname, lastname, phone, email });
  })

// Add customer
program
  .command('find <name>')
  .alias('f')
  .description('Find a customer')
  .action((name) => {
    findCustomer(name);
  });


program.parse(process.argv);