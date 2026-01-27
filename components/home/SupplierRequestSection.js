export default function SupplierRequestSection() {
  return (
    <div className="bg-white py-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-gradient-to-r from-blue-500 to-blue-400 rounded-lg overflow-hidden">
          <div className="grid grid-cols-2">
            {/* Left Side - Info */}
            <div className="p-12 text-white">
              <h2 className="text-3xl font-bold mb-4">
                An easy way to send<br />requests to all suppliers
              </h2>
              <p className="text-blue-100 mb-6">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, 
                sed do eiusmod tempor incididunt.
              </p>
            </div>

            {/* Right Side - Form */}
            <div className="bg-gradient-to-br from-teal-400 to-teal-300 p-12">
              <h3 className="text-xl font-bold text-gray-800 mb-6">
                Send quote to suppliers
              </h3>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="What item you need?"
                  className="w-full px-4 py-3 rounded-md border-0 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <textarea
                  placeholder="Type more details"
                  rows={3}
                  className="w-full px-4 py-3 rounded-md border-0 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <div className="flex gap-4">
                  <input
                    type="number"
                    placeholder="Quantity"
                    className="flex-1 px-4 py-3 rounded-md border-0 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <select className="px-4 py-3 rounded-md border-0 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white">
                    <option>Pcs</option>
                    <option>Box</option>
                    <option>Kg</option>
                  </select>
                </div>
                <button className="w-full px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 font-medium">
                  Send inquiry
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
