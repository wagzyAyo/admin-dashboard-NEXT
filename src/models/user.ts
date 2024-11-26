import mongoose, { models } from "mongoose";

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    }
})

const userModel = models.user || mongoose.model('user', userSchema)
export default userModel