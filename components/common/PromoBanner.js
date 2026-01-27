export default function PromoBanner() {
  return (
    <div className="bg-linear-to-r from-blue-500 to-blue-400 rounded-lg p-8 flex items-center justify-between text-white my-12">
      <div>
        <h3 className="text-2xl font-bold mb-2">Super discount on more than 100 USD</h3>
        <p className="text-blue-100">Have you ever finally just write dummy info</p>
      </div>
      <button className="px-8 py-3 bg-orange-500 text-white rounded-md hover:bg-orange-600 font-medium">
        Shop now
      </button>
    </div>
  );
}
