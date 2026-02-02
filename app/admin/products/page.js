'use client';

import { useState } from 'react';
import { Plus, Edit2, Trash2, Search, Filter } from 'lucide-react';
import Modal from '@/components/common/Modal'; // Reusing our common modal

export default function ProductsPage() {
  // Dummy Data matched with ProductInfo structure + CartContext
  const [products, setProducts] = useState([
    { 
      id: 1, 
      name: 'GoPro HERO6 4K Action Camera - Black', 
      category: 'Electronics', 
      price: 99.50, 
      oldPrice: 1128.00,
      stock: 12, 
      status: 'Active',
      brand: 'Samsung',
      rating: 7.5,
      type: 'Action Camera',
      material: 'Plastic & Metal',
      design: 'Compact',
      customization: 'Custom logo available',
      protection: 'Waterproof',
      warranty: '2 years'
    },
    { 
      id: 2, 
      name: 'Canon EOS 80D DSLR Camera', 
      category: 'Mobile accessory', 
      price: 78.99, 
      oldPrice: 1128.00,
      stock: 5, 
      status: 'Active',
      brand: 'Canon',
      rating: 5.9,
      type: 'DSLR',
      material: 'Magnesium Alloy',
      design: 'Ergonomic',
      customization: 'None',
      protection: 'Weather sealed',
      warranty: '1 year'
    },
  ]);

  const [formData, setFormData] = useState({ 
    id: null, 
    name: '', 
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
    image: ''
  });
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Form Handling
  const handleEdit = (product) => {
    setFormData(product);
    setIsFormOpen(true);
  };

  const handleDeleteClick = (product) => {
    setSelectedProduct(product);
    setIsDeleteModalOpen(true);
  };

  const confirmDelete = () => {
    setProducts(products.filter(p => p.id !== selectedProduct.id));
    setIsDeleteModalOpen(false);
    setSelectedProduct(null);
  };

  const handleSave = (e) => {
    e.preventDefault();
    if (formData.id) {
       // Update
       setProducts(products.map(p => p.id === formData.id ? formData : p));
    } else {
       // Create
       setProducts([...products, { ...formData, id: Date.now() }]);
    }
    setIsFormOpen(false);
    resetForm();
  };

  const resetForm = () => {
    setFormData({ 
      id: null, 
      name: '', 
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
      image: ''
    });
  };

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
                      <div className="w-10 h-10 rounded-lg bg-gray-100 shrink-0"></div>
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
                        onClick={() => {
                          setFormData(product);
                          setIsFormOpen(true);
                        }}
                        className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                      >
                         <Edit2 size={18} />
                      </button>
                      <button className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors">
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
                             <option value="Out of Stock">Out of Stock</option>
                             <option value="Draft">Draft</option>
                          </select>
                        </div>
                      </div>
                  </div>

                  {/* Detailed Specifications */}
                  <div className="bg-gray-50 p-4 rounded-xl space-y-4">
                      <h3 className="font-semibold text-gray-900">Product Specifications</h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Type</label>
                          <input 
                            type="text" 
                            value={formData.type}
                            onChange={(e) => setFormData({...formData, type: e.target.value})}
                            className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500/20 outline-none"
                            placeholder="e.g. Classic shoes"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Material</label>
                          <input 
                            type="text" 
                            value={formData.material}
                            onChange={(e) => setFormData({...formData, material: e.target.value})}
                            className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500/20 outline-none"
                            placeholder="e.g. Plastic material"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Design</label>
                          <input 
                            type="text" 
                            value={formData.design}
                            onChange={(e) => setFormData({...formData, design: e.target.value})}
                            className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500/20 outline-none"
                            placeholder="e.g. Modern nice"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Customization</label>
                          <input 
                            type="text" 
                            value={formData.customization}
                            onChange={(e) => setFormData({...formData, customization: e.target.value})}
                            className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500/20 outline-none"
                            placeholder="e.g. Custom logo available"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Protection</label>
                          <input 
                            type="text" 
                            value={formData.protection}
                            onChange={(e) => setFormData({...formData, protection: e.target.value})}
                            className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500/20 outline-none"
                            placeholder="e.g. Refund Policy"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Warranty</label>
                          <input 
                            type="text" 
                            value={formData.warranty}
                            onChange={(e) => setFormData({...formData, warranty: e.target.value})}
                            className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500/20 outline-none"
                            placeholder="e.g. 2 years full"
                          />
                        </div>
                      </div>
                  </div>

                  <div className="flex justify-end gap-3 pt-2">
                    <button 
                      type="button" 
                      onClick={() => setIsFormOpen(false)}
                      className="px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-lg font-medium"
                    >
                      Cancel
                    </button>
                    <button 
                      type="submit" 
                      className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium"
                    >
                      Save Product
                    </button>
                  </div>
              </form>
           </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {isDeleteModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
           <div className="bg-white rounded-2xl shadow-xl w-full max-w-sm p-6 text-center animate-in zoom-in-95 duration-200">
              <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center mx-auto mb-4 text-red-600">
                 <Trash2 size={24} />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Delete Product</h3>
              <p className="text-gray-500 mb-6">Are you sure you want to delete <span className="font-semibold text-gray-800">{selectedProduct?.name}</span>? This action cannot be undone.</p>
              <div className="flex gap-3 justify-center">
                 <button 
                   onClick={() => setIsDeleteModalOpen(false)}
                   className="px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-lg font-medium border border-gray-200"
                 >
                   Cancel
                 </button>
                 <button 
                   onClick={confirmDelete}
                   className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg font-medium"
                 >
                   Delete
                 </button>
              </div>
           </div>
        </div>
      )}
    </div>
  );
}
