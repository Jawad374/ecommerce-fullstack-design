~'use client';

import { X, CheckCircle, AlertCircle } from 'lucide-react';
import { useEffect } from 'react';

export default function Modal({ isOpen, onClose, title, message, type = 'success' }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-sm overflow-hidden transform transition-all scale-100 animate-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className={`p-4 flex items-center justify-between ${type === 'success' ? 'bg-green-50' : 'bg-red-50'}`}>
           <div className="flex items-center gap-3">
             {type === 'success' ? (
               <CheckCircle className="w-6 h-6 text-green-600" />
             ) : (
               <AlertCircle className="w-6 h-6 text-red-600" />
             )}
             <h3 className={`font-semibold ${type === 'success' ? 'text-green-800' : 'text-red-800'}`}>
               {title}
             </h3>
           </div>
           <button onClick={onClose} className="text-gray-400 hover:text-gray-600 transition-colors">
             <X className="w-5 h-5" />
           </button>
        </div>

        {/* content */}
        <div className="p-6">
          <p className="text-gray-600">{message}</p>
        </div>

        {/* Footer */}
        <div className="p-4 bg-gray-50 flex justify-end">
          <button 
            onClick={onClose}
            className={`px-4 py-2 rounded-lg text-white font-medium transition-colors ${
              type === 'success' 
                ? 'bg-green-600 hover:bg-green-700' 
                : 'bg-red-600 hover:bg-red-700'
            }`}
          >
            {type === 'success' ? 'Continue' : 'Close'}
          </button>
        </div>
      </div>
    </div>
  );
}
