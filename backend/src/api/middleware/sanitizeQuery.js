module.exports = (req, res, next) => {
    const query = req.query.query;

    // Define a regular expression to allow only valid characters (alphanumeric, spaces, etc.)
    const isValid = /^[a-zA-Z0-9\s]*$/.test(query);

    if (!isValid) {
        return res
            .status(400)
            .json({
                error: 'Invalid search query. Special characters are not allowed.',
            });
    }

    next();
};
