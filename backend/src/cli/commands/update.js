async function update(_id, updatedFields) {
    const { default: chalk } = await import('chalk');
    const { default: mongoose } = await import('mongoose');
    const { default: Product } = await import('../../api/models/product.js');

    const mongoURI = process.env.MONGO_URI;

    try {
        await mongoose.connect(mongoURI);
        console.log(chalk.green.bold('Connected to MongoDB - ', mongoURI));

        // Fetch the product by the old title to get the old properties
        const oldItem = await Product.findOne({ _id });

        if (!oldItem) {
            console.log(chalk.red.bold(`No item found with id ${_id}.`));
            mongoose.connection.close();
            return;
        }
        // Log the old properties
        console.log(chalk.yellow.bold('Old item Properties:'));
        console.log(chalk.yellow(oldItem));

        updatedFields.reserve =
            updatedFields.reserve === 'null' ? null : updatedFields.reserve;

        // Find the product by the old title and update the specified fields
        const updatedItem = await Product.findOneAndUpdate(
            { _id },
            updatedFields,
            { new: true }, // Return the updated document
        );

        if (updatedItem) {
            // Log the new properties after the update
            console.log(chalk.blue.bold('Updated Item Properties:'));
            console.log(chalk.blue(updatedItem));
        } else {
            console.log(chalk.red.bold(`No item found. ID : ${_id}.`));
        }
    } catch (err) {
        console.error(chalk.red.bold('Error updating product:', err));
    } finally {
        await mongoose.connection.close();
    }
}

module.exports = update;
