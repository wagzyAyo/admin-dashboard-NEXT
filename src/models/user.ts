import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    "email": {
        type: 'string',
        require: true
    },
    "password": {
        type: 'string',
        require: true
    }
})

const userModel = new mongoose.Model(userSchema)
export default userModel