async function add(addFields) {
    const { default: chalk } = await import('chalk');
    const { default: fs } = await import('fs');
    const { default: mongoose } = await import('mongoose');
    const { default: Product } = await import('../../api/models/product.js');

    const mongoURI = process.env.MONGO_URI;

    try {
        await mongoose.connect(mongoURI);
        console.log(chalk.green.bold('Connected to MongoDB - ', mongoURI));

        console.log(addFields);

        // Read the image file and upload it to MongoDB
        const imagePath = addFields.picture_path;
        const imageBuffer = fs.readFileSync(imagePath);

        // Create a new product instance
        const newProduct = new Product(addFields);
        newProduct.image = imageBuffer.toString('base64');
        newProduct.reserve =
            addFields.reserve === 'null' ? null : addFields.reserve;

        console.log(
            chalk.yellowBright(
                `Item added _id: ${newProduct._id}, ${newProduct.title} , ${newProduct.description} , $${newProduct.start_price}`,
            ),
        );

        console.log(newProduct);

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
