"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaTwitter, FaInstagram, FaFacebook } from "react-icons/fa";

// Dummy Blogs Data
const blogs = [
  {
    id: "1",
    title: "Mauris at orci non vulputate",
    image: "/blog1.png",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    date: "Aug 09 2020",
  },
  {
    id: "2",
    title: "Elit ornare in enim mauris",
    image: "/blog2.png",
    description: "Viverra pulvinar et enim, mattis varius donec.",
    date: "Sep 12 2021",
  },
  {
    id: "3",
    title: "Mattis varius donec fd",
    image: "/blog3.png",
    description: "Condimentum eu malesuada vitae ultrices in in neque.",
    date: "Oct 01 2022",
  },
];

const BlogPage = () => {
  return (
    <div className="min-h-screen bg-purple-50">
      {/* Header */}
      <header className="p-5 bg-white shadow">
        <h1 className="text-2xl font-bold">Blog Page</h1>
        <p className="text-sm text-gray-500 my-2">
          Home . Pages . <span className="text-pink-600">Blog Page</span>
        </p>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 p-6">
        {/* Blog Articles Section */}
        <section className="md:col-span-3">
          {blogs.map((blog) => (
            <article
              key={blog.id}
              className="bg-white shadow rounded-lg overflow-hidden mb-6"
            >
              <Image
                src={blog.image}
                alt={blog.title}
                height={453}
                width={870}
                className="w-full h-auto"
              />
              <div className="p-4">
                <div className="flex justify-between items-center text-xs text-gray-500 mb-2">
                  <span>{blog.date}</span>
                </div>
                <h2 className="text-lg font-bold text-gray-700">{blog.title}</h2>
                <p className="text-sm text-gray-600 mt-2">{blog.description}</p>
                <Link href={`/Blog/${blog.id}`} className="text-purple-600 mt-2 inline-block">
                  Read More
                </Link>
              </div>
            </article>
          ))}
        </section>

        {/* Sidebar Section */}
        <aside className="space-y-6">
          {/* Search */}
          <div>
            <input
              type="text"
              placeholder="Search for posts"
              className="w-full p-2 rounded border border-gray-300"
            />
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold text-indigo-900 mb-4">Categories</h3>
            <ul className="grid grid-cols-2 gap-y-1 text-sm text-indigo-900">
              <li className="bg-pink-500 text-white rounded-md cursor-pointer text-center py-1">
                Hobbies (14)
              </li>
              <li className="cursor-pointer text-center py-1">Women (21)</li>
              <li className="cursor-pointer text-center py-1">Men (18)</li>
              <li className="cursor-pointer text-center py-1">Clothing (11)</li>
              <li className="cursor-pointer text-center py-1">Shoes (7)</li>
              <li className="cursor-pointer text-center py-1">Travel (10)</li>
            </ul>
          </div>

          {/* Recent Post */}
          <div>
            <h3 className="text-2xl font-bold text-indigo-900 mb-4">Recent Post</h3>
            <ul className="space-y-6">
              <li className="flex items-center gap-4">
                <Image
                  src="/blog4.png"
                  alt="Post 1"
                  width={80}
                  height={64}
                  className="rounded-md object-cover"
                />
                <div>
                  <h4 className="text-lg font-medium text-indigo-900">
                    It is a long established fact
                  </h4>
                  <p className="text-sm text-gray-500 mt-1">Aug 09 2020</p>
                </div>
              </li>
              <li className="flex items-center gap-4">
                <Image
                  src="/blog5.png"
                  alt="Post 2"
                  width={80}
                  height={64}
                  className="rounded-md object-cover"
                />
                <div>
                  <h4 className="text-lg font-medium text-indigo-900">
                    It is a long established fact
                  </h4>
                  <p className="text-sm text-gray-500 mt-1">Aug 09 2020</p>
                </div>
              </li>
              <li className="flex items-center gap-4">
                <Image
                  src="/blog6.png"
                  alt="Post 3"
                  width={80}
                  height={64}
                  className="rounded-md object-cover"
                />
                <div>
                  <h4 className="text-lg font-medium text-indigo-900">
                    It is a long established fact
                  </h4>
                  <p className="text-sm text-gray-500 mt-1">Aug 09 2020</p>
                </div>
              </li>
              <li className="flex items-center gap-4">
                <Image
                  src="/blog7.png"
                  alt="Post 4"
                  width={80}
                  height={64}
                  className="rounded-md object-cover"
                />
                <div>
                  <h4 className="text-lg font-medium text-indigo-900">
                    It is a long established fact
                  </h4>
                  <p className="text-sm text-gray-500 mt-1">Aug 09 2020</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Sale Product */}
          <div>
            <h3 className="text-2xl font-bold text-indigo-900 mb-4">Sale Product</h3>
            <ul className="space-y-6">
              <li className="flex items-center gap-4">
                <Image
                  src="/blog8.png"
                  alt="Product 1"
                  width={80}
                  height={64}
                  className="rounded-md object-cover"
                />
                <div>
                  <h4 className="text-lg font-medium text-indigo-900">
                    Elit ornare in enim mauris.
                  </h4>
                  <p className="text-sm text-gray-500 mt-1">Aug 09 2020</p>
                </div>
              </li>

              <li className="flex items-center gap-4">
                <Image
                  src="/blog9.png"
                  alt="Product 2"
                  width={80}
                  height={64}
                  className="rounded-md object-cover"
                />
                <div>
                  <h4 className="text-lg font-medium text-indigo-900">
                    Viverra pulvinar et enim.
                  </h4>
                  <p className="text-sm text-gray-500 mt-1">Aug 09 2020</p>
                </div>
              </li>

              <li className="flex items-center gap-4">
                <Image
                  src="/blog10.png"
                  alt="Product 3"
                  width={80}
                  height={64}
                  className="rounded-md object-cover"
                />
                <div>
                  <h4 className="text-lg font-medium text-indigo-900">
                    Mattis varius donec fdsfd
                  </h4>
                  <p className="text-sm text-gray-500 mt-1">Aug 09 2020</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Offer Product */}
          <div>
            <h3 className="text-2xl font-bold text-indigo-900 mb-6">
              Offer product
            </h3>
            <div className="grid grid-cols-2 gap-6">
              <div className="flex flex-col items-center">
                <Image
                  src="/Rectangle 136.png"
                  alt="Product 1"
                  width={128}
                  height={128}
                  className="object-cover rounded-md"
                />
                <h4 className="text-lg font-medium text-indigo-900 mt-3">
                  Duis lectus est.
                </h4>
                <p className="text-sm text-gray-500 mt-1">$12.00 - $15.00</p>
              </div>

              <div className="flex flex-col items-center">
                <Image
                  src="/Rectangle 134.png"
                  alt="Product 2"
                  width={128}
                  height={128}
                  className="object-cover rounded-md"
                />
                <h4 className="text-lg font-medium text-indigo-900 mt-3">
                  Sed placerat.
                </h4>
                <p className="text-sm text-gray-500 mt-1">$12.00 - $15.00</p>
              </div>

              <div className="flex flex-col items-center">
                <Image
                  src="/Rectangle 138.png"
                  alt="Product 3"
                  width={128}
                  height={128}
                  className="object-cover rounded-md"
                />
                <h4 className="text-lg font-medium text-indigo-900 mt-3">
                  Netus proin.
                </h4>
                <p className="text-sm text-gray-500 mt-1">$12.00 - $15.00</p>
              </div>

              <div className="flex flex-col items-center">
                <Image
                  src="/Rectangle 137.png"
                  alt="Product 4"
                  width={128}
                  height={128}
                  className="object-cover rounded-md"
                />
                <h4 className="text-lg font-medium text-indigo-900 mt-3">
                  Platea in.
                </h4>
                <p className="text-sm text-gray-500 mt-1">$12.00 - $15.00</p>
              </div>
            </div>
          </div>

          {/* Follow */}
          <div>
            <h3 className="text-2xl font-bold text-indigo-900 mb-4">Follow</h3>
            <div className="flex items-center space-x-4 bg-white shadow-md rounded-md p-4 w-fit">
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-purple-600 text-white"
              >
                <FaFacebook />
              </a>
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-pink-500 text-white"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-sky-400 text-white"
              >
                <FaTwitter />
              </a>
            </div>
          </div>

          {/* Tags */}
          <div>
            <h3 className="text-2xl font-bold text-indigo-900 mb-4">Tags</h3>
            <div className="flex flex-wrap gap-x-6 gap-y-3 text-lg">
              <a href="#" className="text-indigo-900 hover:underline">
                General
              </a>
              <a href="#" className="text-pink-500 hover:underline">
                Atsanil
              </a>
              <a href="#" className="text-indigo-900 hover:underline">
                Insas
              </a>
              <a href="#" className="text-indigo-900 hover:underline">
                Bibsaas
              </a>
              <a href="#" className="text-indigo-900 hover:underline">
                Nulla
              </a>
            </div>
          </div>
        </aside>
      </main>

      {/* Partner/Brand Logos */}
      <div className="py-8 flex justify-center items-center mt-7 mb-12">
        <div className="flex flex-wrap justify-center sm:justify-between items-center sm:gap-6 md:gap-8 w-full max-w-6xl px-4">
          <Image
            src="/text1.png"
            alt="Partner 1"
            width={100}
            height={30}
            className="sm:h-10 md:h-12"
          />
          <Image
            src="/text2.png"
            alt="Partner 2"
            width={100}
            height={30}
            className="sm:h-10 md:h-12 grayscale hover:grayscale-0 transition duration-300"
          />
          <Image
            src="/text3.png"
            alt="Partner 3"
            width={100}
            height={30}
            className="sm:h-10 md:h-12 grayscale hover:grayscale-0 transition duration-300"
          />
          <Image
            src="/text4.png"
            alt="Partner 4"
            width={100}
            height={30}
            className="sm:h-10 md:h-12 grayscale hover:grayscale-0 transition duration-300"
          />
          <Image
            src="/text5.png"
            alt="Partner 5"
            width={100}
            height={30}
            className="sm:h-10 md:h-12 grayscale hover:grayscale-0 transition duration-300"
          />
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
