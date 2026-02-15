import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please provide a product name'],
      maxlength: [60, 'Name cannot be more than 60 characters'],
    },
    description: {
      type: String,
      required: [true, 'Please provide a description'],
    },
    price: {
      type: Number,
      required: [true, 'Please provide a price'],
    },
    oldPrice: {
      type: Number,
    },
    category: {
      type: String,
      required: [true, 'Please provide a category'],
    },
    stock: {
      type: Number,
      default: 0,
    },
    brand: {
      type: String,
    },
    status: {
      type: String,
      default: 'Active',
      enum: ['Active', 'Draft', 'Disabled']
    },
    images: {
      type: [String], // Array of image URLs
      default: [],
    },
    rating: {
      type: Number,
      default: 0,
    },
    featured: {
        type: Boolean,
        default: false
    },
    // Additional fields seen in the UI
    type: String,
    material: String,
    design: String,
    customization: String,
    protection: String,
    warranty: String,
  },
  { timestamps: true }
);

export default mongoose.models.Product || mongoose.model('Product', ProductSchema);
