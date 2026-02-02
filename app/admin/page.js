'use client';

import { Users, ShoppingBag, DollarSign, TrendingUp, Package } from 'lucide-react';

export default function AdminDashboard() {
  const stats = [
    { label: 'Total Sales', value: '$124,592', change: '+12.5%', icon: DollarSign, color: 'bg-green-100 text-green-600' },
    { label: 'Total Orders', value: '1,542', change: '+8.2%', icon: ShoppingBag, color: 'bg-blue-100 text-blue-600' },
    { label: 'Total Products', value: '456', change: '+2.4%', icon: Package, color: 'bg-purple-100 text-purple-600' },
    { label: 'Total Users', value: '8,432', change: '+5.1%', icon: Users, color: 'bg-orange-100 text-orange-600' },
  ];

  const recentOrders = [
    { id: '#ORD-001', customer: 'Alex Thompson', product: 'Wireless Headphones', amount: '$129.00', status: 'Delivered' },
    { id: '#ORD-002', customer: 'Sarah Parker', product: 'Smart Watch Series 5', amount: '$349.00', status: 'Processing' },
    { id: '#ORD-003', customer: 'James Wilson', product: 'Gaming Keyboard', amount: '$89.99', status: 'Shipped' },
    { id: '#ORD-004', customer: 'Emily Davis', product: 'Office Chair', amount: '$199.50', status: 'Pending' },
    { id: '#ORD-005', customer: 'Michael Brown', product: 'USB-C Hub', amount: '$45.00', status: 'Delivered' },
  ];

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-500">Welcome back to your admin dashboard</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${stat.color}`}>
                  <Icon size={24} />
                </div>
                <span className="text-sm font-medium text-green-600 bg-green-50 px-2.5 py-1 rounded-full">{stat.change}</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</h3>
              <p className="text-gray-500 text-sm">{stat.label}</p>
            </div>
          );
        })}
      </div>

      {/* Recent Orders Table */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-6 border-b border-gray-100 flex items-center justify-between">
          <h2 className="text-lg font-bold text-gray-900">Recent Orders</h2>
          <button className="text-blue-600 text-sm font-medium hover:text-blue-700">View All</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-gray-50 text-gray-500 text-sm uppercase tracking-wider">
              <tr>
                <th className="px-6 py-4 font-semibold">Order ID</th>
                <th className="px-6 py-4 font-semibold">Customer</th>
                <th className="px-6 py-4 font-semibold">Product</th>
                <th className="px-6 py-4 font-semibold">Amount</th>
                <th className="px-6 py-4 font-semibold">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {recentOrders.map((order) => (
                <tr key={order.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 text-sm font-medium text-blue-600">{order.id}</td>
                  <td className="px-6 py-4 text-sm text-gray-900">{order.customer}</td>
                  <td className="px-6 py-4 text-sm text-gray-500">{order.product}</td>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">{order.amount}</td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      order.status === 'Delivered' ? 'bg-green-100 text-green-800' :
                      order.status === 'Processing' ? 'bg-blue-100 text-blue-800' :
                      order.status === 'Shipped' ? 'bg-purple-100 text-purple-800' :
                      'bg-yellow-100 text-yellow-800'
                    }`}>
                      {order.status}
                    </span>
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
