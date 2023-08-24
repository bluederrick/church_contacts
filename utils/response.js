exports.response = (res) => (status) => (message) => (data) {
    return res
        .status(status)
        .json({ message }, data)
};

exports.message = (message) => {
    return res
        .status(obj)(successful)
};


exports.failed = (message, status) => {
    return response(message)(status)
}