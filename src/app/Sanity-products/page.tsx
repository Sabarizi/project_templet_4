import Link from 'next/link';
import { getProducts } from '../../sanity/lib/api';
import { urlFor } from '../../sanity/lib/client';
import Image from 'next/image';

export default async function ProductsPage() {
    const products = await getProducts();

    return (
        <div className="p-5">
            <div className="bg-purple-50 py-11 px-11 mb-10">
                <div className="max-w-6xl mx-auto px-4">
                    <h1 className="text-3xl font-bold text-indigo-900">Our Products</h1>
                    <p className="text-sm text-gray-600">
                        <Link href="/">Home</Link> . Pages .{" "}
                        <span className="text-pink-500">Our Products</span>
                    </p>
                </div>
            </div>
            <div className="flex flex-wrap gap-5">
                {products.map((product: any) => (
                    <div
                        key={product._id}
                        className="border border-gray-300 p-5 w-96 rounded-lg shadow-md bg-white transform transition-transform hover:scale-105 hover:shadow-lg"
                    >
                        <Image
                            src={product.image ? urlFor(product.image).url() : ''}
                            alt={product.name}
                            width={300}
                            height={250}
                            className="rounded-lg"
                        />
                        <h2 className="text-lg font-semibold mt-3">{product.name}</h2>
                        <div className="flex items-center mt-2">
                            {Array.from({ length: product.rating || 5 }).map((_, index) => (
                                <svg
                                    key={index}
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    className="h-5 w-5 text-yellow-500"
                                >
                                    <path d="M12 .587l3.668 7.568L24 9.423l-6 5.849L19.335 24 12 20.054 4.665 24l1.335-8.728-6-5.849 8.332-1.268z" />
                                </svg>
                            ))}
                        </div>
                        <p className="font-bold text-lg mt-3">${product.price}</p>
                        <p className="mt-2 font-medium text-pink-700 text-sm">
                            Available in Stock
                        </p>
                        <div>
                            <Link href={`/Sanity-products/${product._id}`}>
                                <button className="mt-4 px-4 py-2 bg-pink-500 text-white rounded-md shadow-md hover:bg-pink-600 transition-all">
                                    View Details
                                </button>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
