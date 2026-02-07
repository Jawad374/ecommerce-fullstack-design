'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  LayoutDashboard, 
  ShoppingBag, 
  Users, 
  Settings, 
  Menu, 
  X, 
  LogOut,
  Bell,
  Search
} from 'lucide-react';
import { useUser } from '@/context/UserContext';
import { useRouter } from 'next/navigation';

export default function AdminLayout({ children }) {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const pathname = usePathname();
  const { logout, user } = useUser();
  const router = useRouter();

  const menuItems = [
    { name: 'Dashboard', href: '/admin', icon: LayoutDashboard },
    { name: 'Products', href: '/admin/products', icon: ShoppingBag },
    { name: 'Users', href: '/admin/users', icon: Users },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside 
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-white border-r border-gray-200 transform transition-transform duration-200 ease-in-out md:relative md:translate-x-0 ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="h-full flex flex-col">
          {/* Logo */}
          <div className="h-16 flex items-center px-6 border-b border-gray-100">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
              <ShoppingBag className="text-white w-5 h-5" />
            </div>
            <span className="text-xl font-bold text-gray-800">AdminPanel</span>
            <button 
              onClick={() => setSidebarOpen(false)} 
              className="ml-auto md:hidden text-gray-500"
            >
              <X size={20} />
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-4 py-6 space-y-1">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-xl transition-colors ${
                    isActive
                      ? 'bg-blue-50 text-blue-600'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }`}
                >
                  <Icon size={20} className={isActive ? 'text-blue-600' : 'text-gray-400'} />
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* User Profile */}
          <div className="p-4 border-t border-gray-100">
             <div className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 mb-3">
               <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">
                 {user?.name?.[0] || 'A'}
               </div>
               <div className="flex-1 overflow-hidden">
                 <p className="text-sm font-medium text-gray-900 truncate">{user?.name || 'Admin User'}</p>
                 <p className="text-xs text-gray-500 truncate">{user?.email || 'admin@example.com'}</p>
               </div>
             </div>
             <button 
                onClick={() => {
                  logout();
                  router.push('/login');
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-2 text-sm text-red-600 font-medium hover:bg-red-50 rounded-lg transition-colors"
             >
               <LogOut size={18} />
               Sign Out
             </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Header */}
        <header className="bg-white h-16 border-b border-gray-200 px-4 md:px-8 flex items-center justify-between sticky top-0 z-30">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setSidebarOpen(!isSidebarOpen)}
              className="md:hidden text-gray-500 hover:text-gray-700"
            >
              <Menu size={24} />
            </button>
            <div className="hidden md:flex items-center gap-2 text-gray-400 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100 w-64">
               <Search size={18} />
               <input 
                 type="text" 
                 placeholder="Search..." 
                 className="bg-transparent border-none outline-none text-sm w-full text-gray-900 placeholder:text-gray-400"
               />
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <button className="relative text-gray-500 hover:text-gray-700">
              <Bell size={20} />
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white"></span>
            </button>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-4 md:p-8 overflow-y-auto">
          {children}
        </main>
      </div>

      {/* Mobile Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
}
