'use client';

import { useState } from 'react';

export default function ProductTabs() {
  const [activeTab, setActiveTab] = useState('description');

  const tabs = [
    { id: 'description', label: 'Description' },
    { id: 'reviews', label: 'Reviews' },
    { id: 'shipping', label: 'Shipping' },
    { id: 'about', label: 'About seller' },
  ];

  return (
    <div className="w-full bg-white rounded-md border border-[#e3e8ee] shadow-sm">
      {/* Tab Headers */}
      <div className="flex border-b border-[#e3e8ee] px-4">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-4 text-[16px] font-medium transition-colors relative ${
              activeTab === tab.id
                ? 'text-[#127fff]'
                : 'text-[#8b96a5] hover:text-[#505050]'
            }`}
          >
            {tab.label}
            {activeTab === tab.id && (
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-[#127fff]" />
            )}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="p-6">
        {activeTab === 'description' && (
          <div className="space-y-6">
            <div className="text-[#505050] text-[16px] leading-6 space-y-4">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
              </p>
              <p>
                Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
              </p>
            </div>

            {/* Specifications Table */}
            <div className="max-w-140 border border-[#e3e8ee] rounded-sm overflow-hidden">
              <table className="w-full text-[14px] border-collapse">
                <tbody className="divide-y divide-[#e3e8ee]">
                  <TableRow label="Model" value="#8786867" />
                  <TableRow label="Style" value="Classic style" />
                  <TableRow label="Certificate" value="ISO-898921212" />
                  <TableRow label="Size" value="34mm x 450mm x 19mm" />
                  <TableRow label="Memory" value="36GB RAM" />
                </tbody>
              </table>
            </div>

            {/* Features List */}
            <div className="space-y-2">
              <FeatureItem text="Some great feature name here" />
              <FeatureItem text="Lorem ipsum dolor sit amet, consectetur" />
              <FeatureItem text="Duis aute irure dolor in reprehenderit" />
              <FeatureItem text="Some great feature name here" />
            </div>
          </div>
        )}

        {/* Placeholder for other tabs */}
        {activeTab !== 'description' && (
          <div className="text-[#8b96a5] py-10 text-center">
            {tabs.find(t => t.id === activeTab)?.label} content coming soon.
          </div>
        )}
      </div>
    </div>
  );
}

function TableRow({ label, value }) {
  return (
    <tr className="flex">
      <td className="py-2.5 px-4 bg-[#eff2f4] text-[#505050] w-50 border-r border-[#e3e8ee] font-normal">
        {label}
      </td>
      <td className="py-2.5 px-4 bg-white text-[#505050] flex-1">
        {value}
      </td>
    </tr>
  );
}

function FeatureItem({ text }) {
  return (
    <div className="flex items-center gap-3 text-[#505050] text-[16px]">
      <svg className="w-5 h-5 text-[#8b96a5]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
      </svg>
      <span>{text}</span>
    </div>
  );
}