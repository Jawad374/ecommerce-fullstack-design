export default function Pagination() {
  return (
    <div className="flex items-center justify-between py-8">
      <div className="flex items-center gap-2">
        <span className="text-sm text-gray-600">Show</span>
        <select className="px-3 py-2 border rounded-md text-sm">
          <option>10</option>
          <option>20</option>
          <option>50</option>
          <option>100</option>
        </select>
      </div>

      <div className="flex items-center gap-2">
        <button className="px-3 py-2 border rounded-md hover:bg-gray-50">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button className="px-4 py-2 border rounded-md hover:bg-gray-50">1</button>
        <button className="px-4 py-2 bg-blue-500 text-white rounded-md">2</button>
        <button className="px-4 py-2 border rounded-md hover:bg-gray-50">3</button>
        <button className="px-3 py-2 border rounded-md hover:bg-gray-50">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}
