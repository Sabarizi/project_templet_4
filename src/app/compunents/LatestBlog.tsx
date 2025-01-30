'use client'
import React from "react";
import Image from "next/image";

interface BlogPost {
  author: string;
  date: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  imageUrl: string;
}

const LatestBlog = () => {
  // Updated blog data with both short and full descriptions
  const blogs: BlogPost[] = [
    {
      author: "SaberAli",
      date: "21 August 2020",
      title: "Top Essential Trends in 2021",
      shortDescription:
        "More off this less hello samlande lied much over tightly circa horse taped mightly...",
      fullDescription:
        "More off this less hello samlande lied much over tightly circa horse taped mightly. \
        Here is the full version of the description with all the details you want to show your readers. \
        You can add more paragraphs, images, or any content to illustrate the blog fully.",
      imageUrl: "/Frame 3.png",
    },
    {
      author: "Surfauxion",
      date: "21 August 2020",
      title: "Top Essential Trends in 2021",
      shortDescription:
        "More off this less hello samlande lied much over tightly circa horse taped mightly...",
      fullDescription:
        "More off this less hello samlande lied much over tightly circa horse taped mightly. \
        This is an example of what the longer content can look like. You can customize this text as needed \
        to represent the full blog post or article details.",
      imageUrl: "/Frame 4.png",
    },
    {
      author: "SaberAli",
      date: "21 August 2020",
      title: "Top Essential Trends in 2021",
      shortDescription:
        "More off this less hello samlande lied much over tightly circa horse taped mightly...",
      fullDescription:
        "More off this less hello samlande lied much over tightly circa horse taped mightly. \
        Add any additional content you would like the user to read once they click on 'Read More'.",
      imageUrl: "/Frame 5.png",
    },
  ];

  // Track which blog index is expanded (null = none expanded)
  const [expandedIndex, setExpandedIndex] = React.useState<number | null>(null);

  // Toggle the expanded state of a specific blog post
  const handleReadMoreClick = (index: number) => {
    // If the same blog is clicked again, collapse it by setting null
    if (expandedIndex === index) {
      setExpandedIndex(null);
    } else {
      setExpandedIndex(index);
    }
  };

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
                {/* Blog Description (short or full based on expanded state) */}
                <p className="text-sm text-gray-700 mb-4 flex-1">
                  {expandedIndex === index
                    ? blog.fullDescription
                    : blog.shortDescription}
                </p>
                {/* Read More / Read Less Link */}
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    handleReadMoreClick(index);
                  }}
                  className="text-sm text-blue-500 font-medium hover:underline self-start"
                >
                  {expandedIndex === index ? "Read Less" : "Read More"}
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
