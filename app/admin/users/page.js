'use client';

import { useState } from 'react';
import { Plus, Edit2, Trash2, Search, Filter, Shield, User as UserIcon } from 'lucide-react';

export default function UsersPage() {
  // Dummy Data
  const [users, setUsers] = useState([
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'admin', status: 'Active', joined: '2023-10-15' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'user', status: 'Active', joined: '2023-11-20' },
    { id: 3, name: 'Mike Wilson', email: 'mike@example.com', role: 'user', status: 'Inactive', joined: '2023-12-05' },
    { id: 4, name: 'Sarah Brown', email: 'sarah@example.com', role: 'editor', status: 'Active', joined: '2024-01-12' },
    { id: 5, name: 'David Lee', email: 'david@example.com', role: 'user', status: 'Active', joined: '2024-02-01' },
  ]);

  const [deleteId, setDeleteId] = useState(null);

  const handleDelete = (id) => {
    setUsers(users.filter(user => user.id !== id));
    setDeleteId(null);
  };

  return (
    <div>
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Users</h1>
          <p className="text-gray-500">Manage user access and roles</p>
        </div>
        <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg font-medium transition-colors">
          <Plus size={20} />
          Add User
        </button>
      </div>

      {/* Filters Bar */}
      <div className="bg-white p-4 rounded-xl border border-gray-200 mb-6 flex flex-col md:flex-row gap-4 items-center justify-between">
         <div className="relative w-full md:w-96">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input 
              type="text" 
              placeholder="Search users..." 
              className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
            />
         </div>
         <div className="flex gap-2">
            <select className="px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg outline-none text-gray-600">
               <option>All Roles</option>
               <option>Admin</option>
               <option>User</option>
               <option>Editor</option>
            </select>
            <select className="px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg outline-none text-gray-600">
               <option>All Status</option>
               <option>Active</option>
               <option>Inactive</option>
            </select>
         </div>
      </div>

      {/* Users Table */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-gray-50 text-gray-500 text-sm uppercase tracking-wider">
              <tr>
                <th className="px-6 py-4 font-semibold">User</th>
                <th className="px-6 py-4 font-semibold">Role</th>
                <th className="px-6 py-4 font-semibold">Status</th>
                <th className="px-6 py-4 font-semibold">Joined Date</th>
                <th className="px-6 py-4 font-semibold text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {users.map((user) => (
                <tr key={user.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-[#E5F1FF] flex items-center justify-center text-blue-600 font-bold">
                        {user.name.charAt(0)}
                      </div>
                      <div>
                         <p className="font-medium text-gray-900">{user.name}</p>
                         <p className="text-xs text-gray-500">{user.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                     <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium capitalize border ${
                        user.role === 'admin' 
                           ? 'bg-purple-50 text-purple-700 border-purple-100' 
                           : 'bg-gray-50 text-gray-600 border-gray-100'
                     }`}>
                        {user.role === 'admin' && <Shield size={12} />}
                        {user.role}
                     </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      user.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                    }`}>
                      {user.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">{user.joined}</td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                        <Edit2 size={18} />
                      </button>
                      <button 
                        onClick={() => handleDelete(user.id)}
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
    </div>
  );
}
