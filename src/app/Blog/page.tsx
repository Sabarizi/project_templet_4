"use client"
import React from "react";
import Link from "next/link";
import Image from "next/image";

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
      <header className="p-5 bg-white shadow">
        <h1 className="text-2xl font-bold">Blog Page</h1>
        <p className="text-sm text-gray-500 my-2">
          Home . Pages . <span className="text-pink-600">Blog Page</span>
        </p>
      </header>

      <main className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 p-6">
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
                className="w-full"
              />
              <div className="p-4">
                <div className="flex justify-between items-center text-xs text-gray-500 mb-2">
                  <span>{blog.date}</span>
                </div>
                <h2 className="text-lg font-bold text-gray-700">{blog.title}</h2>
                <p className="text-sm text-gray-600 mt-2">{blog.description}</p>
                <Link href={`/Blog/${blog.id}`}>
                 
                    Read More
                 
                </Link>
              </div>
            </article>
          ))}
        </section>

        {/* Sidebar Section */}
        <aside className="space-y-6">
          <div>
            <input
              type="text"
              placeholder="Search for posts"
              className="w-full p-2 rounded border border-gray-300"
            />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-700">Categories</h3>
            <ul className="text-sm text-gray-600 space-y-1 grid grid-cols-2">
              <li className="hover:text-purple-600 cursor-pointer">Hobbies (14)</li>
              <li className="hover:text-purple-600 cursor-pointer">Travel (21)</li>
            </ul>
          </div>
        </aside>
      </main>
    </div>
  );
};

export default BlogPage;
