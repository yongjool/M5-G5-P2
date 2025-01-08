const MAX_QUERY_LENGTH = 1000; // Set a maximum length for the query string

// Middleware to check the length of the query string
const checkQueryLength = (req, res, next) => {
    const queryString = req.originalUrl; // Get the full URL, including the query string

    // Check if the query string exceeds the maximum allowed length
    if (queryString.length > MAX_QUERY_LENGTH) {
        return res.status(400).json({
            error: `Query string is too long. Maximum length is ${MAX_QUERY_LENGTH} characters.`,
        });
    }

    // If the query string length is acceptable, move to the next middleware or route handler
    next();
};

module.exports = checkQueryLength;
