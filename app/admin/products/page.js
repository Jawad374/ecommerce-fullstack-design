'use client';

import { useState, useEffect } from 'react';
import { Plus, Edit2, Trash2, Search, Filter, Upload } from 'lucide-react';
import Modal from '@/components/common/Modal';

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [formData, setFormData] = useState({ 
    id: null, 
    name: '', 
    description: '',
    category: '', 
    price: '', 
    oldPrice: '',
    stock: '', 
    status: 'Active',
    brand: '',
    rating: '',
    type: '',
    material: '',
    design: '',
    customization: '',
    protection: '',
    warranty: '',
    image: null
  });
  const [imagePreview, setImagePreview] = useState(null);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch('/api/products');
      if (response.ok) {
        const data = await response.json();
        const formattedData = data.map(item => ({
             ...item,
             id: item._id, // Map MongoDB _id to id for frontend
             status: item.stock > 0 ? 'Active' : 'Out of Stock' // Derive status if not explicit
        }));
        setProducts(formattedData);
      }
    } catch (error) {
      console.error('Failed to fetch products', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleEdit = (product) => {
    setFormData({
      ...product,
      image: null // We don't load the file object back
    });
    setImagePreview(product.images?.[0] || null);
    setIsFormOpen(true);
  };

  const handleDeleteClick = (product) => {
    setSelectedProduct(product);
    setIsDeleteModalOpen(true);
  };

  const confirmDelete = () => {
    // Implement delete API call here if needed
    setProducts(products.filter(p => p.id !== selectedProduct.id));
    setIsDeleteModalOpen(false);
    setSelectedProduct(null);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({ ...formData, image: file });
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleSave = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const data = new FormData();
      data.append('name', formData.name);
      data.append('description', formData.description);
      data.append('category', formData.category);
      data.append('price', formData.price);
      if (formData.oldPrice) data.append('oldPrice', formData.oldPrice);
      data.append('stock', formData.stock);
      data.append('brand', formData.brand);
      if (formData.rating) data.append('rating', formData.rating);
      if (formData.type) data.append('type', formData.type);
      if (formData.material) data.append('material', formData.material);
      if (formData.design) data.append('design', formData.design);
      if (formData.customization) data.append('customization', formData.customization);
      if (formData.protection) data.append('protection', formData.protection);
      if (formData.warranty) data.append('warranty', formData.warranty);
      
      if (formData.image) {
        data.append('image', formData.image);
      }

      // Note: We only implemented POST in the API route for now. 
      // If editing is needed, we need to update the API route to handle PUT/PATCH.
      // But creating a new product generates a new ID.
      // For this task, we focus on posting (creating) as requested.
      
      const res = await fetch('/api/products', {
        method: 'POST',
        body: data,
      });

      if (res.ok) {
        await fetchProducts();
        setIsFormOpen(false);
        resetForm();
      } else {
        console.error('Failed to save product');
      }
    } catch (error) {
      console.error('Error saving product:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setFormData({ 
      id: null, 
      name: '', 
      description: '',
      category: '', 
      price: '', 
      oldPrice: '',
      stock: '', 
      status: 'Active',
      brand: '',
      rating: '',
      type: '',
      material: '',
      design: '',
      customization: '',
      protection: '',
      warranty: '',
      image: null
    });
    setImagePreview(null);
  };

  if (isLoading) return <div className="p-8 text-center">Loading products...</div>;

  return (
    <div>
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Products</h1>
          <p className="text-gray-500">Manage your product inventory</p>
        </div>
        <button 
          onClick={() => {
            resetForm();
            setIsFormOpen(true);
          }}
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg font-medium transition-colors"
        >
          <Plus size={20} />
          Add Product
        </button>
      </div>

      {/* Filters Bar */}
      <div className="bg-white p-4 rounded-xl border border-gray-200 mb-6 flex flex-col md:flex-row gap-4 items-center justify-between">
         <div className="relative w-full md:w-96">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input 
              type="text" 
              placeholder="Search products..." 
              className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
            />
         </div>
         <button className="flex items-center gap-2 text-gray-600 hover:text-gray-900 font-medium px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50">
           <Filter size={18} />
           Filters
         </button>
      </div>

      {/* Products Table */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-gray-50 text-gray-500 text-sm uppercase tracking-wider">
              <tr>
                <th className="px-6 py-4 font-semibold">Product Name</th>
                <th className="px-6 py-4 font-semibold">Category</th>
                <th className="px-6 py-4 font-semibold">Price</th>
                <th className="px-6 py-4 font-semibold">Stock</th>
                <th className="px-6 py-4 font-semibold">Status</th>
                <th className="px-6 py-4 font-semibold text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {products.map((product) => (
                <tr key={product.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-gray-100 shrink-0 overflow-hidden">
                        {product.images && product.images[0] ? (
                            <img src={product.images[0]} alt={product.name} className="w-full h-full object-cover" />
                        ) : (
                            <div className="w-full h-full flex items-center justify-center text-gray-300">
                                <Search size={16} />
                            </div>
                        )}
                      </div>
                      <span className="font-medium text-gray-900">{product.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">{product.category}</td>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">${product.price}</td>
                  <td className="px-6 py-4 text-sm text-gray-500">{product.stock}</td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      product.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                    }`}>
                      {product.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button 
                        onClick={() => handleEdit(product)}
                        className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                      >
                         <Edit2 size={18} />
                      </button>
                      <button 
                         onClick={() => handleDeleteClick(product)}
                         className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      
      {/* Product Form Modal */}
      {isFormOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 overflow-y-auto">
           <div className="bg-white rounded-2xl shadow-xl w-full max-w-4xl p-6 animate-in zoom-in-95 duration-200 my-8">
              <div className="flex justify-between items-center mb-6">
                 <h2 className="text-xl font-bold">{formData.id ? 'Edit Product' : 'Add New Product'}</h2>
                 <button onClick={() => setIsFormOpen(false)} className="text-gray-400 hover:text-gray-600">
                    <span className="sr-only">Close</span>
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                 </button>
              </div>
              
              <form onSubmit={handleSave} className="space-y-6">
                  {/* Basic Info Section */}
                  <div className="bg-gray-50 p-4 rounded-xl space-y-4">
                      <h3 className="font-semibold text-gray-900">Basic Information</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="md:col-span-2">
                          <label className="block text-sm font-medium text-gray-700 mb-1">Product Name</label>
                          <input 
                            type="text" 
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({...formData, name: e.target.value})}
                            className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500/20 outline-none"
                            placeholder="e.g. GoPro HERO6 4K Action Camera"
                          />
                        </div>
                         <div className="md:col-span-2">
                          <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                          <textarea 
                            required
                            value={formData.description}
                            onChange={(e) => setFormData({...formData, description: e.target.value})}
                            className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500/20 outline-none"
                            placeholder="Product description..."
                            rows={3}
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                          <input 
                            type="text" 
                            required
                            value={formData.category}
                            onChange={(e) => setFormData({...formData, category: e.target.value})}
                            className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500/20 outline-none"
                            placeholder="e.g. Electronics"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Brand</label>
                          <input 
                            type="text" 
                            value={formData.brand}
                            onChange={(e) => setFormData({...formData, brand: e.target.value})}
                            className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500/20 outline-none"
                            placeholder="e.g. Samsung"
                          />
                        </div>
                         {/* Image Upload */}
                         <div className="md:col-span-2">
                             <label className="block text-sm font-medium text-gray-700 mb-1">Product Image</label>
                             <div className="flex items-center gap-4">
                                 {imagePreview && (
                                     <div className="w-20 h-20 rounded-lg bg-gray-100 overflow-hidden border border-gray-200">
                                         <img src={imagePreview} alt="Preview" className="w-full h-full object-cover" />
                                     </div>
                                 )}
                                 <label className="cursor-pointer flex items-center gap-2 bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors">
                                     <Upload size={18} />
                                     Upload Image
                                     <input type="file" className="hidden" accept="image/*" onChange={handleImageChange} />
                                 </label>
                             </div>
                         </div>
                      </div>
                  </div>

                  {/* Pricing & Stock */}
                  <div className="bg-gray-50 p-4 rounded-xl space-y-4">
                      <h3 className="font-semibold text-gray-900">Pricing & Inventory</h3>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Price ($)</label>
                          <input 
                            type="number" 
                            required
                            value={formData.price}
                            onChange={(e) => setFormData({...formData, price: e.target.value})}
                            className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500/20 outline-none"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Old Price ($)</label>
                          <input 
                            type="number" 
                            value={formData.oldPrice}
                            onChange={(e) => setFormData({...formData, oldPrice: e.target.value})}
                            className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500/20 outline-none"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Stock</label>
                          <input 
                            type="number" 
                            required
                            value={formData.stock}
                            onChange={(e) => setFormData({...formData, stock: e.target.value})}
                            className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500/20 outline-none"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                          <select 
                            value={formData.status}
                            onChange={(e) => setFormData({...formData, status: e.target.value})}
                            className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500/20 outline-none"
                          >
                             <option value="Active">Active</option>
                             <option value="Disabled">Disabled</option>
                          </select>
                        </div>
                      </div>
                  </div>

                  {/* Details */}
                  <div className="bg-gray-50 p-4 rounded-xl space-y-4">
                      <h3 className="font-semibold text-gray-900">Specifications</h3>
                       <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Type</label>
                                <input type="text" value={formData.type} onChange={(e) => setFormData({...formData, type: e.target.value})} className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500/20 outline-none" />
                            </div>
                             <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Material</label>
                                <input type="text" value={formData.material} onChange={(e) => setFormData({...formData, material: e.target.value})} className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500/20 outline-none" />
                            </div>
                             <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Design</label>
                                <input type="text" value={formData.design} onChange={(e) => setFormData({...formData, design: e.target.value})} className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500/20 outline-none" />
                            </div>
                              <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Warranty</label>
                                <input type="text" value={formData.warranty} onChange={(e) => setFormData({...formData, warranty: e.target.value})} className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500/20 outline-none" />
                            </div>
                       </div>
                  </div>

                  <div className="flex justify-end gap-3 pt-4 border-t border-gray-100">
                     <button 
                       type="button" 
                       onClick={() => setIsFormOpen(false)}
                       className="px-5 py-2.5 text-gray-600 font-medium hover:bg-gray-100 rounded-lg transition-colors"
                       disabled={isSubmitting}
                     >
                       Cancel
                     </button>
                     <button 
                       type="submit"
                       className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors disabled:opacity-50"
                       disabled={isSubmitting}
                     >
                       {isSubmitting ? 'Saving...' : (formData.id ? 'Save Changes' : 'Create Product')}
                     </button>
                  </div>
              </form>
           </div>
        </div>
      )}

      <Modal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        title="Confirm Delete"
      >
        <div className="space-y-4">
            <p className="text-gray-600">Are you sure you want to delete <span className="font-semibold text-gray-900">{selectedProduct?.name}</span>? This action cannot be undone.</p>
            <div className="flex justify-end gap-3">
                 <button 
                   onClick={() => setIsDeleteModalOpen(false)}
                   className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
                 >
                   Cancel
                 </button>
                 <button 
                   onClick={confirmDelete}
                   className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors"
                 >
                   Delete Product
                 </button>
            </div>
        </div>
      </Modal>
    </div>
  );
}
