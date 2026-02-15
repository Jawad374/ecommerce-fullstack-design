import { NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import Product from '@/models/Product';
import mongoose from 'mongoose';
import { v2 as cloudinary } from 'cloudinary';

// Configure Cloudinary (ensure it's configured in this file too or globally)
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function GET(request, { params }) {
  try {
    await connectDB();
    const { id } = await params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json({ message: 'Invalid product ID' }, { status: 400 });
    }

    const product = await Product.findById(id);

    if (!product) {
      return NextResponse.json({ message: 'Product not found' }, { status: 404 });
    }

    return NextResponse.json(product);
  } catch (error) {
    console.error('Error fetching product:', error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}

export async function PUT(request, { params }) {
  try {
    await connectDB();
    const { id } = await params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json({ message: 'Invalid product ID' }, { status: 400 });
    }

    const formData = await request.formData();
    
    // Extract textual data
    const updateData = {};
    const textFields = ['name', 'description', 'category', 'brand', 'type', 'material', 'design', 'customization', 'protection', 'warranty', 'status'];
    textFields.forEach(field => {
        const val = formData.get(field);
        if (val) updateData[field] = val;
    });

    const price = formData.get('price');
    if (price) updateData.price = parseFloat(price);

    const oldPrice = formData.get('oldPrice');
    if (oldPrice) updateData.oldPrice = parseFloat(oldPrice);

    const stock = formData.get('stock');
    if (stock) updateData.stock = parseInt(stock);
    
    const rating = formData.get('rating');
    if (rating) updateData.rating = parseFloat(rating);

    // Handle Images
    // 1. Existing images (urls)
    const existingImages = formData.getAll('existingImages');
    
    // 2. New images (files)
    const newFiles = formData.getAll('newImages');
    let newImageUrls = [];

    if (newFiles && newFiles.length > 0) {
      const uploadPromises = newFiles.map(async (file) => {
        if (file instanceof File) {
             const arrayBuffer = await file.arrayBuffer();
             const buffer = Buffer.from(arrayBuffer);
             
             return new Promise((resolve, reject) => {
                 const uploadStream = cloudinary.uploader.upload_stream(
                     { folder: 'ecommerce-products' },
                     (error, result) => {
                         if (error) reject(error);
                         else resolve(result.secure_url);
                     }
                 );
                 uploadStream.end(buffer);
             });
        }
        return null;
      });
      
      const results = await Promise.all(uploadPromises);
      newImageUrls = results.filter(url => url !== null);
    }

    // Combine existing and new images
    // If no existingImages provided and no new files, we might be keeping original if we didn't send anything.
    // However, in our frontend logic, we explicitly send 'existingImages' list. 
    // If the list is empty, it means user removed all images.
    updateData.images = [...existingImages, ...newImageUrls];

    const updatedProduct = await Product.findByIdAndUpdate(
      id,
      updateData,
      { new: true, runValidators: true }
    );

    if (!updatedProduct) {
      return NextResponse.json({ error: 'Product not found' }, { status: 404 });
    }

    return NextResponse.json(updatedProduct);

  } catch (error) {
    console.error('Error updating product:', error);
    if (error.name === 'ValidationError') {
      const messages = Object.values(error.errors).map(val => val.message);
      return NextResponse.json({ message: messages.join(', ') }, { status: 400 });
    }
    return NextResponse.json({ message: 'Failed to update product' }, { status: 500 });
  }
}

export async function DELETE(request, { params }) {
  try {
    await connectDB();
    const { id } = await params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json({ message: 'Invalid product ID' }, { status: 400 });
    }

    const deletedProduct = await Product.findByIdAndDelete(id);

    if (!deletedProduct) {
      return NextResponse.json({ message: 'Product not found' }, { status: 404 });
    }

    return NextResponse.json({ message: 'Product deleted successfully' });
  } catch (error) {
    console.error('Error deleting product:', error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}
