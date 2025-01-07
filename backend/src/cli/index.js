#! /usr/bin/env node

// Require necessary modules
const path = require('path');
const dotenv = require('dotenv');

// Resolve the root directory (adjust path if needed)
const rootPath = path.resolve(__dirname, '../../'); // Adjust to your root folder relative to index.js

// Load the .env file from the root directory
dotenv.config({ path: path.resolve(rootPath, '.env') });

const { Command } = require('commander');
const program = new Command();

const list = require('./commands/list');
const add = require('./commands/add');
const update = require('./commands/update');

function parseNull(val) {
    console.log(val);

    if (val === 'null') return 'null';
    return val === 'true' ? true : val === 'false' ? false : val;
}

// prettier-ignore
program
    .command('list')
    .description('List all the Auction items')
    .action(list);

// prettier-ignore
program
    .command('add')
    .description('Add Auction items - title, description, start_price, reserve_price.')
    .requiredOption('--title <title>', 'Title of the auction item')
    .requiredOption('--description <description>', 'Description of the auction item')
    .requiredOption('--start_price <start_price>', 'Starting price of the auction item', (val) => parseFloat(val))

    .requiredOption('--location <location>', 'Seller location')
    .requiredOption('--date <date>', 'listed date/remaining for closing')
    
    .option('--sold <sold>', 'status of sold or not')
    .option('--closing <closing>', 'auction is coming to close')
    .option('--reserve <reserve>', 'item met reserve', (val) => parseNull(val.toLowerCase()))
    .option('--onedollar <onedollar>', 'item is one dollar reserve')
    .option('--favourite <favourite>', 'item set as favourite')
    
    .requiredOption('--price_detail <price_detail>', 'price details')
    .option('--current_bid <current_bid>', 'current bid of item', (val) => parseFloat(val))
    .option('--picture_path <picture_path>', 'picture url/filepath')

    .action((options) => {
        const addFields = {};
        if (options.title) addFields.title = options.title; 
        if (options.description) addFields.description = options.description;
        if (options.start_price) addFields.start_price = options.start_price;
        if (options.sold) addFields.sold = options.sold;
        if (options.location) addFields.location = options.location; 
        if (options.date) addFields.date = options.date;
        if (options.closing) addFields.closing = options.closing;
        if (options.reserve) addFields.reserve = options.reserve;
        if (options.onedollar) addFields.onedollar = options.onedollar;
        if (options.favourite) addFields.favourite = options.favourite;
        if (options.price_detail) addFields.price_detail = options.price_detail;
        if (options.current_bid) addFields.current_bid = options.current_bid;
        if (options.picture_path ) addFields.picture_path  = options.picture_path ;
        add(addFields);
    });

// prettier-ignore
program
    .command('update')
    .description('Update an auction item by _id')
    .requiredOption('--key <_id>', '_id of the item to update')
    .option('--title <title>', 'Title of the auction item')
    .option('--description <description>', 'Description of the auction item')
    .option('--start_price <start_price>', 'Starting price of the auction item', (val) => parseFloat(val))

    .option('--location <location>', 'Seller location')
    .option('--date <date>', 'listed date/remaining for closing')
    
    .option('--sold <sold>', 'status of sold or not')
    .option('--closing <closing>', 'auction is coming to close')
    .option('--reserve <reserve>', 'item met reserve', parseNull)
    .option('--onedollar <onedollar>', 'item is one dollar reserve')
    .option('--favourite <favourite>', 'item set as favourite')
    
    .option('--price_detail <price_detail>', 'price details')
    .option('--current_bid <current_bid>', 'current bid of item', (val) => parseFloat(val))
    .option('--image  <picture_path>', 'picture url/filepath')
    .action((options) => {
        const updatedFields = {};
        if (options.title) updatedFields.title = options.title; 
        if (options.description) updatedFields.description = options.description;
        if (options.start_price) updatedFields.start_price = options.start_price;
        if (options.sold) updatedFields.sold = options.sold;
        if (options.location) updatedFields.location = options.location; 
        if (options.date) updatedFields.date = options.date;
        if (options.closing) updatedFields.closing = options.closing;
        if (options.reserve) updatedFields.reserve = options.reserve;
        if (options.onedollar) updatedFields.onedollar = options.onedollar;
        if (options.favourite) updatedFields.favourite = options.favourite;
        if (options.price_detail) updatedFields.price_detail = options.price_detail;
        if (options.current_bid) updatedFields.current_bid = options.current_bid;
        if (options.image ) updatedFields.image  = options.image ;
        update(options.key, updatedFields);
      });

program.parse(); // This line is important. It tells commander to parse the arguments and execute the appropriate command.
