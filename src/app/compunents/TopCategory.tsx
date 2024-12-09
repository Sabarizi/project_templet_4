import Image from "next/image";
export default function TopCategories() {
  return (
    <div className="text-center py-10">
      {/* Section Title */}
      <h2 className="text-2xl md:text-4xl font-bold text-blue-900 mb-8">
        Top Categories
      </h2>

      {/* Categories Container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
        {/* Category Item 1 - Active State */}
        <div className="w-56 flex flex-col items-center">
          <div className="relative">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-purple-100 flex items-center justify-center relative border-4 border-purple-500">
              <img
                src="/top.png" // Replace with actual image path
                className="w-20 h-20 md:w-28 md:h-28 object-contain"
                alt="Top Category"
              />
            </div>
            <button className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-4 py-1 rounded-full text-sm">
              View Shop
            </button>
          </div>
          <h3 className="text-base md:text-lg font-semibold mt-6">
            Mini LCW Chair
          </h3>
          <p className="text-sm md:text-base text-gray-500">$56.00</p>
        </div>

        {/* Category Item 2 */}
        <div className="w-56 flex flex-col items-center">
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-purple-100 flex items-center justify-center">
            <img
              src="/image 1168.png" // Replace with actual image path
              alt="Mini LCW Chair"
              className="w-20 h-20 md:w-28 md:h-28 object-contain"
            />
          </div>
          <h3 className="text-base md:text-lg font-semibold mt-4">
            Mini LCW Chair
          </h3>
          <p className="text-sm md:text-base text-gray-500">$56.00</p>
        </div>

        {/* Category Item 3 */}
        <div className="w-56 flex flex-col items-center">
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-purple-100 flex items-center justify-center">
            <img
              src="/box for image.png" // Replace with actual image path
              alt="Mini LCW Chair"
              className="w-20 h-20 md:w-28 md:h-28 object-contain"
            />
          </div>
          <h3 className="text-base md:text-lg font-semibold mt-4">
            Mini LCW Chair
          </h3>
          <p className="text-sm md:text-base text-gray-500">$56.00</p>
        </div>

        {/* Category Item 4 */}
        <div className="w-56 flex flex-col items-center">
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-purple-100 flex items-center justify-center">
            <Image
              src="/top.png" // Replace with actual image path
              alt="Mini LCW Chair"
              width={178}
              height={178}
              className="w-20 h-20 md:w-28 md:h-28 object-contain"
            />
          </div>
          <h3 className="text-base md:text-lg font-semibold mt-4">
            Mini LCW Chair
          </h3>
          <p className="text-sm md:text-base text-gray-500">$56.00</p>
        </div>
      </div>

      {/* Dots Navigation */}
      <div className="flex justify-center mt-6 space-x-2">
        <div className="w-3 h-3 rounded-full bg-pink-500"></div>
        <div className="w-3 h-3 rounded-full bg-gray-300"></div>
        <div className="w-3 h-3 rounded-full bg-gray-300"></div>
      </div>
    </div>
  );
}
