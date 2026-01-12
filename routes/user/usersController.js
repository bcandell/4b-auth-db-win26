const User = require("./usersModel");
const bcrypt = require("bcrypt");

const createUser = async (userData) => {
    try {
        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(userData.password, salt);

        const secureUserData = {
            username: userData.username,
            password: hashedPassword
        }

        const newUser = await User.create(secureUserData);
        const returnedUser = User.findOne({ username: userData.username }).select("-password");
        return newUser;
    } catch (error) {
        throw error;
    }
}

module.exports = { createUser }
