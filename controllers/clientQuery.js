
// const user = require('../models/user.js');
const { User, Sequelize } = require('../models');


// register new clients

exports.addClient = async (req, res) => {
    console.log('adding client')

    const { email, firstname, lastname } = req.body
    console.log({ email, firstname, lastname })
    try {

        const userAccount = await User.create({ email, firstname, lastname })

        if (!userAccount) {
            return res.status(40).json({ message: "user not account created ...." })
        }

        return res.status(200).json({ message: "user created ...." })
    } catch (err) {
        console.log(err)

        res.status(400).json({ message: "ooops something wemt wrong ....." })
    }
}



// module.exports = addClient;

