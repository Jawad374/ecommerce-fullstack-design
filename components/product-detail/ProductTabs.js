'use client';

import { useState } from 'react';

export default function ProductTabs() {
  const [activeTab, setActiveTab] = useState('description');

  return (
    <div className="bg-white rounded-lg border">
      {/* Tab Headers */}
      <div className="flex border-b">
        <button
          onClick={() => setActiveTab('description')}
          className={`px-6 py-4 font-medium transition-colors ${
            activeTab === 'description'
              ? 'text-blue-500 border-b-2 border-blue-500'
              : 'text-gray-600 hover:text-gray-800'
          }`}
        >
          Description
        </button>
        <button
          onClick={() => setActiveTab('reviews')}
          className={`px-6 py-4 font-medium transition-colors ${
            activeTab === 'reviews'
              ? 'text-blue-500 border-b-2 border-blue-500'
              : 'text-gray-600 hover:text-gray-800'
          }`}
        >
          Reviews
        </button>
        <button
          onClick={() => setActiveTab('shipping')}
          className={`px-6 py-4 font-medium transition-colors ${
            activeTab === 'shipping'
              ? 'text-blue-500 border-b-2 border-blue-500'
              : 'text-gray-600 hover:text-gray-800'
          }`}
        >
          Shipping
        </button>
        <button
          onClick={() => setActiveTab('about')}
          className={`px-6 py-4 font-medium transition-colors ${
            activeTab === 'about'
              ? 'text-blue-500 border-b-2 border-blue-500'
              : 'text-gray-600 hover:text-gray-800'
          }`}
        >
          About seller
        </button>
      </div>

      {/* Tab Content */}
      <div className="p-6">
        {activeTab === 'description' && (
          <div className="space-y-6">
            <p className="text-gray-700 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur.
            </p>

            {/* Specifications Table */}
            <div className="border-t pt-6">
              <table className="w-full text-sm">
                <tbody className="divide-y">
                  <tr>
                    <td className="py-3 text-gray-500 w-1/4">Model</td>
                    <td className="py-3 text-gray-800">#8786867</td>
                  </tr>
                  <tr>
                    <td className="py-3 text-gray-500">Style</td>
                    <td className="py-3 text-gray-800">Classic style</td>
                  </tr>
                  <tr>
                    <td className="py-3 text-gray-500">Certificate</td>
                    <td className="py-3 text-gray-800">ISO-898921212</td>
                  </tr>
                  <tr>
                    <td className="py-3 text-gray-500">Size</td>
                    <td className="py-3 text-gray-800">34mm x 450mm x 19mm</td>
                  </tr>
                  <tr>
                    <td className="py-3 text-gray-500">Memory</td>
                    <td className="py-3 text-gray-800">36GB RAM</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Features List */}
            <div className="border-t pt-6 space-y-3">
              <div className="flex items-center gap-2 text-gray-700">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Some great feature name here</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Lorem ipsum dolor sit amet, consectetur</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Duis aute irure dolor in reprehenderit</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Some great feature name here</span>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'reviews' && (
          <div className="text-gray-700">
            <p>Customer reviews will appear here.</p>
          </div>
        )}

        {activeTab === 'shipping' && (
          <div className="text-gray-700">
            <p>Shipping information will appear here.</p>
          </div>
        )}

        {activeTab === 'about' && (
          <div className="text-gray-700">
            <p>Seller information will appear here.</p>
          </div>
        )}
      </div>
    </div>
  );
}
