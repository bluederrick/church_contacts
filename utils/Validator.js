exports.validator =
    (schema) =>
        (payload) => {
            schema.validate(payload)
                .then(() => { })
                .catch(() => { });
        }