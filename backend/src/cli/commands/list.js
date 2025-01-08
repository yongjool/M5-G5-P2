async function list() {
    const { default: chalk } = await import('chalk');
    const { default: mongoose } = await import('mongoose');
    const { default: Product } = await import('../../api/models/product.js');

    const mongoURI = process.env.MONGO_URI;
    try {
        await mongoose.connect(mongoURI);

        // Fetch all items from the database
        const items = await Product.find();

        if (items.length > 0) {
            items.forEach((item, index) => {
                console.log(
                    chalk.yellowBright(
                        `${index + 1}. _id: ${item._id}, ${item.title} , ${
                            item.description
                        } , $${item.start_price}, $${item.reserve_price}`,
                    ),
                );
            });
        } else {
            console.log(chalk.red.bold('No items found in the database.'));
        }
    } catch (err) {
        console.error(chalk.red.bold('Error fetching data:', err));
    } finally {
        mongoose.connection.close();
    }
}

module.exports = list;
