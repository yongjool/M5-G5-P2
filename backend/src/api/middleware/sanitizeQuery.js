const validateGetQuery = (req, res, next) => {
    const query = req.query.query;

    // Define a regular expression to allow only valid characters (alphanumeric, spaces, etc.)
    const isValid = /^[a-zA-Z0-9\s]*$/.test(query);

    if (!isValid) {
        return res.status(400).json({
            error: 'Invalid query. Special characters are not allowed.',
        });
    }

    next();
};

const validatePostQuery = (req, res, next) => {
    const { _id } = req.body;

    // Check if id exists and is a string
    if (!_id || typeof _id !== 'string') {
        return res.status(400).json({
            error: 'Invalid id.',
        });
    }

    // Define a regular expression to allow only valid characters (alphanumeric, spaces, etc.)
    const isValid = /^[a-zA-Z0-9\s]*$/.test(_id);

    if (!isValid) {
        return res.status(400).json({
            error: 'Invalid id. Special characters are not allowed.',
        });
    }

    next();
};

module.exports = {
    validateGetQuery,
    validatePostQuery,
};
