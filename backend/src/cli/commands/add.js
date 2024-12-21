async function add(title, description, start_price, reserve_price) {
    const { default: chalk } = await import('chalk');
    const { default: mongoose } = await import('mongoose');
    const { default: Product } = await import('../../api/models/product.js');

    const mongoURI = process.env.MONGO_URI;

    try {
        await mongoose.connect(mongoURI);
        console.log(chalk.green.bold('Connected to MongoDB - ', mongoURI));

        // Create a new product instance
        const newProduct = new Product({
            title,
            description,
            start_price,
            reserve_price,
        });
        console.log(
            chalk.yellowBright(
                `Item added _id: ${newProduct._id}, ${newProduct.title} , ${newProduct.description} , $${newProduct.start_price}, $${newProduct.reserve_price}`,
            ),
        );

        // Save the product to the database
        await newProduct.save();

        console.log(chalk.green.bold('Item has been added successfully!'));
    } catch (err) {
        console.error(chalk.red.bold('Error fetching data:', err));
    } finally {
        await mongoose.connection.close();
    }
}

module.exports = add;
