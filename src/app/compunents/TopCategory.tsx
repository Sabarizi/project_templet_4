import Image from "next/image";
import Link from "next/link";

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
        <div className="group w-56 flex flex-col items-center">
          <div className="relative">
            <div
              className="
                w-32 h-32 md:w-40 md:h-40 
                rounded-full bg-purple-100 
                flex items-center justify-center 
                relative border-4 border-purple-500 
                transition-transform duration-300 
                group-hover:scale-110 group-hover:shadow-xl
              "
            >
              <Image
                src="/top.png" // Replace with actual image path
                className="w-20 h-20 md:w-28 md:h-28 object-contain"
                alt="Top Category"
                height={345}
                width={269}
              />
            </div>
            <Link href={"/Shop"} passHref>
              <button
                className="
                  absolute -bottom-4 left-1/2 
                  transform -translate-x-1/2 
                  bg-green-500 text-white px-4 py-1 
                  rounded-full text-sm 
                  transition-opacity duration-300 
                  opacity-0 group-hover:opacity-100
                "
              >
                View Shop
              </button>
            </Link>
          </div>
          <h3 className="text-base md:text-lg font-semibold mt-6">
            Mini LCW Chair
          </h3>
          <p className="text-sm md:text-base text-gray-500">$56.00</p>
        </div>

        {/* Category Item 2 */}
        <div className="group w-56 flex flex-col items-center">
          <div
            className="
              w-32 h-32 md:w-40 md:h-40 
              rounded-full bg-purple-100 
              flex items-center justify-center 
              transition-transform duration-300 
              group-hover:scale-110 group-hover:shadow-xl
            "
          >
            <Image
              src="/image 1168.png" // Replace with actual image path
              alt="Mini LCW Chair"
              height={345}
              width={269}
              className="w-20 h-20 md:w-28 md:h-28 object-contain"
            />
          </div>
          <h3 className="text-base md:text-lg font-semibold mt-4">
            Mini LCW Chair
          </h3>
          <p className="text-sm md:text-base text-gray-500">$56.00</p>
        </div>

        {/* Category Item 3 */}
        <div className="group w-56 flex flex-col items-center">
          <div
            className="
              w-32 h-32 md:w-40 md:h-40 
              rounded-full bg-purple-100 
              flex items-center justify-center 
              transition-transform duration-300 
              group-hover:scale-110 group-hover:shadow-xl
            "
          >
            <Image
              src="/box for image.png" // Replace with actual image path
              alt="Mini LCW Chair"
              height={345}
              width={269}
              className="w-20 h-20 md:w-28 md:h-28 object-contain"
            />
          </div>
          <h3 className="text-base md:text-lg font-semibold mt-4">
            Mini LCW Chair
          </h3>
          <p className="text-sm md:text-base text-gray-500">$56.00</p>
        </div>

        {/* Category Item 4 */}
        <div className="group w-56 flex flex-col items-center">
          <div
            className="
              w-32 h-32 md:w-40 md:h-40 
              rounded-full bg-purple-100 
              flex items-center justify-center 
              transition-transform duration-300 
              group-hover:scale-110 group-hover:shadow-xl
            "
          >
            <Image
              src="/top.png" // Replace with actual image path
              alt="Mini LCW Chair"
              height={345}
              width={269}
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
