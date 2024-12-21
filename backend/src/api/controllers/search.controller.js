async function searchByKeyword(req, res, next) {
    const { message } = req.query;

    // Respond with the found auction items
    res.status(200).json({ message: message });
}

module.exports = {
    searchByKeyword,
};
