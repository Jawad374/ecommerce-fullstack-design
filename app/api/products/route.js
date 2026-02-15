import { NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import Product from '@/models/Product';
import { v2 as cloudinary } from 'cloudinary';

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function GET() {
  try {
    await connectDB();
    const products = await Product.find({}).sort({ createdAt: -1 });
    return NextResponse.json(products);
  } catch (error) {
    console.error('Error fetching products:', error);
    return NextResponse.json({ error: 'Failed to fetch products' }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    await connectDB();
    const formData = await request.formData();

    const name = formData.get('name');
    const description = formData.get('description');
    const price = formData.get('price');
    const oldPrice = formData.get('oldPrice');
    const category = formData.get('category');
    const stock = formData.get('stock');
    const brand = formData.get('brand');
    const type = formData.get('type');
    const material = formData.get('material');
    const design = formData.get('design');
    const customization = formData.get('customization');
    const protection = formData.get('protection');
    const warranty = formData.get('warranty');
    const status = formData.get('status');
    
    // Handle image upload (multiple)
    const files = formData.getAll('newImages'); // Get all new files
    // If client sends 'image' instead of 'newImages' (backward compatibility or singular upload), handle it
    const legacyFile = formData.get('image');
    if (legacyFile) files.push(legacyFile);

    const imageUrls = [];

    if (files && files.length > 0) {
      const uploadPromises = files.map(async (file) => {
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
      imageUrls.push(...results.filter(url => url !== null));
    }

    // Also check for existing images if any (though typically POST is for new creation, so maybe not relevant, but let's be safe)
    // Actually, in POST (create), we don't have existing images usually. But if we supported cloning...
    // The frontend only sends 'existingImages' we might want to include them.
    const existingImages = formData.getAll('existingImages');
    if (existingImages && existingImages.length > 0) {
        imageUrls.push(...existingImages);
    }


    const product = await Product.create({
      name,
      description,
      price: parseFloat(price),
      oldPrice: oldPrice ? parseFloat(oldPrice) : undefined,
      category,
      stock: parseInt(stock) || 0,
      brand,
      images: imageUrls,
      type,
      material,
      design,
      customization,
      protection,
      warranty,
      status: status || 'Active'
    });

    return NextResponse.json(product, { status: 201 });
  } catch (error) {
    console.error('Error creating product:', error);
    return NextResponse.json({ error: 'Failed to create product' }, { status: 500 });
  }
}
