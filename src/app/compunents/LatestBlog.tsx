import React from "react";
import Image from "next/image";

interface BlogPost {
  author: string;
  date: string;
  title: string;
  description: string;
  imageUrl: string;
}

const LatestBlog = () => {
  const blogs: BlogPost[] = [
    {
      author: "SaberAli",
      date: "21 August 2020",
      title: "Top Essential Trends in 2021",
      description:
        "More off this less hello samlande lied much over tightly circa horse taped mightly.",
      imageUrl: "/Frame 3.png",
    },
    {
      author: "Surfauxion",
      date: "21 August 2020",
      title: "Top Essential Trends in 2021",
      description:
        "More off this less hello samlande lied much over tightly circa horse taped mightly.",
      imageUrl: "/Frame 4.png",
    },
    {
      author: "SaberAli",
      date: "21 August 2020",
      title: "Top Essential Trends in 2021",
      description:
        "More off this less hello samlande lied much over tightly circa horse taped mightly.",
      imageUrl: "/Frame 5.png",
    },
  ];

  return (
    <section className="py-10 px-4 sm:px-6 lg:px-8 bg-purple-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-8">
          Latest Blog
        </h2>

        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="relative border rounded-xl p-4 bg-white shadow-md hover:shadow-lg transition duration-300 flex flex-col"
            >
              {/* Blog Image */}
              <div className="w-full h-48 md:h-60 lg:h-72 flex items-center justify-center overflow-hidden rounded-lg mb-4">
                <Image
                  src={blog.imageUrl}
                  alt={blog.title}
                  width={500}
                  height={300}
                  className="object-cover w-full h-full"
                />
              </div>

              {/* Blog Content */}
              <div className="flex-1 flex flex-col">
                {/* Author and Date */}
                <div className="text-sm text-gray-600 flex items-center mb-2">
                  <span className="mr-2 text-pink-500">●</span>
                  <span className="mr-2">{blog.author}</span>
                  <span className="mx-2">|</span>
                  <span>{blog.date}</span>
                </div>
                {/* Blog Title */}
                <h3 className="text-lg font-semibold text-blue-900 mb-2">
                  {blog.title}
                </h3>
                {/* Blog Description */}
                <p className="text-sm text-gray-700 mb-4 flex-1">
                  {blog.description}
                </p>
                {/* Read More Link */}
                <a
                  href="#"
                  className="text-sm text-blue-500 font-medium hover:underline self-start"
                >
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestBlog;
