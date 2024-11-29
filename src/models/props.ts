import mongoose, { models } from 'mongoose';

const propertySchema = new mongoose.Schema({
  tag: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  size: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,  
  },
  short: {
    type: String,
    required: true,  
  },
  amount: {
    type: Number,
    required: true,  
  },
  imageURL: {
    type: [String],
  },
  description: {
    type: String,  
    required: true,  
  },
});


const PropertyModel = models.Property || mongoose.model('Property', propertySchema);
export default PropertyModel;
