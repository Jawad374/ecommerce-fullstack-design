export default function SupplierRequestSection() {
  return (
    <div className="py-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative rounded-lg overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 to-blue-400/80"></div>
          <div className="absolute inset-0 bg-[url('/Image/others/image102.png')] bg-cover bg-center opacity-30"></div>

          <div className="relative z-10">
            <div className="grid grid-cols-12">
              {/* Left Side - Info */}
              <div className="col-span-7 p-12 text-white">
                <h2 className="text-4xl font-bold mb-4">
                  An easy way to send<br />requests to all suppliers
                </h2>
                <p className="text-blue-100/90 mb-6 max-w-xl">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.
                </p>
              </div>

              {/* Right Side - Form Card */}
              <div className="col-span-5 p-12 flex items-center justify-end">
                <div className="w-full max-w-sm bg-white rounded-lg shadow-xl ring-1 ring-gray-100 p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Send quote to suppliers</h3>
                  <div className="space-y-3">
                    <div>
                      <label className="block text-xs text-gray-500 mb-1">What item you need?</label>
                      <input
                        type="text"
                        placeholder="What item you need?"
                        className="w-full px-3 py-2 rounded-md border border-gray-200 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-200"
                      />
                    </div>

                    <div>
                      <label className="block text-xs text-gray-500 mb-1">Details</label>
                      <textarea
                        placeholder="Type more details"
                        rows={3}
                        className="w-full px-3 py-2 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-200"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs text-gray-500 mb-1">Quantity</label>
                        <input
                          type="number"
                          placeholder="Quantity"
                          className="w-full px-3 py-2 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-200"
                        />
                      </div>
                      <div>
                        <label className="block text-xs text-gray-500 mb-1">Unit</label>
                        <select className="w-full px-3 py-2 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-200 bg-white">
                          <option>Pcs</option>
                          <option>Box</option>
                          <option>Kg</option>
                        </select>
                      </div>
                    </div>

                    <button className="w-full mt-1 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 font-medium">Send inquiry</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
