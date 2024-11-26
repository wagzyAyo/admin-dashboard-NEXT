import mongoose, { models } from "mongoose";

const propertySchema = new mongoose.Schema({
    tag: {
        type: String,
        require: true
    },
    name: {
        type: String,
        require: true
    },
    size: {
        type: String,
        require: true
    },
    location: {
        type: String,
        require: true
    },
    short:{
        type: String,
        require: true
    },
    amount: {
        type: Number,
        require: true,
    },
    imageURL: {
        type: [String],
    },
    description: {
        type: 'string',
        require: true
    }
})

const propertyModels = models.property ||  mongoose.model('property', propertySchema)
export default propertyModels