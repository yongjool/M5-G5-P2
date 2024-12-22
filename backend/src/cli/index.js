#! /usr/bin/env node

require('dotenv').config();
const { Command } = require('commander');
const program = new Command();

const list = require('./commands/list');
const add = require('./commands/add');
// prettier-ignore
program
    .command('list')
    .description('List all the Auction items')
    .action(list);

// prettier-ignore
program
    .command('add')
    .description('Add Auction items - title, description, start_price, reserve_price.')
    .requiredOption('-t, --title <title>', 'Title of the auction item')
    .requiredOption('-d, --description <description>', 'Description of the auction item')
    .requiredOption('-s, --start_price <start_price>', 'Starting price of the auction item', (val) => parseFloat(val))
    .action((options) => {
        add(options.title, options.description, options.start_price);
    });

program.parse(); // This line is important. It tells commander to parse the arguments and execute the appropriate command.
