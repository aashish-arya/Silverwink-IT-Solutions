import userModel from "../models/userModel.js";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
const userlogin = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await userModel.findOne({ email })
        if (!user) {
            return res.send('Invalid email')
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.send("Invalid password")
        }
        const token = jwt.sign({ id: user_id, email: user.email }, process.env.JWT_SECRET_KEY, { expiresIn: '1h' })
        res.cookie('token', token);
    } catch (error) {
        console.log(error.message)
    }
}

const userSignUp = async (req, res) => {
    try {
        const { email, name, password } = req.body;
        const userexist = await userModel.findOne({ email })
        if (userexist) {
            return res.send('user already exist')
        }
        const salt = await bcrypt.genSalt(10);
        const hashedpass = await bcrypt.hash(password, salt)
        res.send(hashedpass)
        const createdUser = await userModel.create({
            email,
            name,
            password: hashedpass
        })
        res.send(createdUser)
    } catch (error) {
        console.log(error.message);
    }
}

export {
    userlogin,
    userSignUp
}