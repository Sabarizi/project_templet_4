import Image from "next/image";
import Link from "next/link";
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import { FaSearch } from "react-icons/fa";

const shoplist = [
  {
    id: 1,
    name: "Accumsan tincidunt",
    image: "/Rectangle 32.png",
    price: "$26.00",
    oldPrice: "$52.00",
    description: "Consectetur adipiscing elit.",
    rating: 4,
    colors: ["bg-[#DE9034]", "bg-[#FB2E86]", "bg-[#5E37FF]"],
  },
  {
    id: 2,
    name: "In nulla",
    image: "/Rectangle 32 (1).png",
    price: "$26.00",
    oldPrice: "$52.00",
    description: "Magna in est adipiscing in phasellus non in justo.",
    rating: 5,
    colors: ["bg-[#DE9034]", "bg-[#FB2E86]", "bg-[#5E37FF]"],
  },
  {
    id: 3,
    name: "Vel sem",
    image: "/Rectangle 32 (2).png",
    price: "$26.00",
    oldPrice: "$52.00",
    description: "Lorem ipsum dolor sit amet.",
    rating: 5,
    colors: ["bg-[#DE9034]", "bg-[#FB2E86]", "bg-[#5E37FF]"],
  },
  {
    id: 4,
    name: "Porttitor cum",
    image: "/Rectangle 32 (3).png",
    price: "$26.00",
    oldPrice: "$52.00",
    description: "Lorem ipsum dolor sit amet.",
    rating: 5,
    colors: ["bg-[#DE9034]", "bg-[#FB2E86]", "bg-[#5E37FF]"],
  },
  {
    id: 5,
    name: "Nunc in",
    image: "/Rectangle 32 (4).png",
    price: "$26.00",
    oldPrice: "$52.00",
    description: "Lorem Magna in est adipiscing.",
    rating: 5,
    colors: ["bg-[#DE9034]", "bg-[#FB2E86]", "bg-[#5E37FF]"],
  },
  {
    id: 6,
    name: "Vitae facilisis",
    image: "/Rectangle 32 (5).png",
    price: "$26.00",
    oldPrice: "$52.00",
    description: "consectetur adipiscing elit. Magna in.",
    rating: 5,
    colors: ["bg-[#DE9034]", "bg-[#FB2E86]", "bg-[#5E37FF]"],
  },
  {
    id: 7,
    name: "Curabitur lectus",
    image: "/Rectangle 32 (7).png",
    price: "$26.00",
    oldPrice: "$52.00",
    description: "Lorem ipsum dolor sit amet, consectetur.",
    rating: 5,
    colors: ["bg-[#DE9034]", "bg-[#FB2E86]", "bg-[#5E37FF]"],
  },
];

const ShopList = () => {
  return (
    <div className="font-sans text-[#151875] px-4 sm:px-6 lg:px-8">
      {/* Header / Breadcrumb */}
      <div className="py-12 bg-purple-50 h-44 flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl font-bold">Shop List</h1>
        <div className="flex items-center gap-2 text-sm">
          <Link href="/">Home</Link>
          <span>/</span>
          <p className="text-[#FB2E86]">Shopping List</p>
        </div>
      </div>

      {/* Product List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-8">
        {shoplist.map((product) => (
          <div
            key={product.id}
            className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow flex flex-col items-center text-center"
          >
            <Image
              src={product.image}
              alt={product.name}
              width={300}
              height={250}
              className="w-full h-48 object-cover rounded-lg"
            />
            <h3 className="text-xl font-semibold mt-2">{product.name}</h3>
            <p className="text-gray-500 text-sm">{product.description}</p>
            <div className="flex gap-2 mt-2">
              {product.colors.map((color, index) => (
                <span key={index} className={`w-4 h-4 ${color} rounded-full`}></span>
              ))}
            </div>
            <div className="flex items-center justify-between w-full px-4 mt-3">
              <span className="text-lg font-bold">{product.price}</span>
              <span className="text-red-500 line-through">{product.oldPrice}</span>
            </div>
            <div className="flex gap-4 mt-3">
              <Link href="/Cart">
                <button className="p-2 rounded-full shadow-md bg-gray-100 hover:bg-gray-200">
                  <AiOutlineShoppingCart size={20} />
                </button>
              </Link>
              <Link href="/wishlist">
                <button className="p-2 rounded-full shadow-md bg-gray-100 hover:bg-gray-200">
                  <AiOutlineHeart size={20} />
                </button>
              </Link>
              <Link href={`/Shop/${product.id}`}>
                <button className="p-2 rounded-full shadow-md bg-gray-100 hover:bg-gray-200">
                  <FaSearch size={20} />
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopList;
