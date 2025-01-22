"use client";
import { useParams } from "next/navigation";
import Image from "next/image";
import { FaTwitter, FaInstagram, FaFacebook } from "react-icons/fa";
import Link from "next/link";

const BlogPost = () => {
  // Dynamic blogs data
  const blogs = [
    {
      id: "1",
      title: "Morbi sit amet erat",
      date: "12 Jan 2024",
      content:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit. Vivamus mattis urna non augue aliquam imperdiet.",
      image: "/blog1.png",
    },
    {
      id: "2",
      title: "Elit ornare in enim mauris",
      date: "15 Feb 2024",
      content:
        "Praesent tincidunt velit et lorem tincidunt, quis ultricies odio venenatis. Phasellus in scelerisque erat.",
      image: "/blog2.png",
    },
    {
      id: "3",
      title: "Mattis varius donec fd",
      date: "20 Mar 2024",
      content:
        "Integer cursus est et lectus tristique aliquam. Donec vel ultricies libero. Quisque non posuere erat.",
      image: "/blog3.png",
    },
  ];

  // Get the blog ID from the dynamic route
  const { id } = useParams();

  // Find the blog matching the ID
  const blog = blogs.find((b) => b.id === id);

  // Handle blog not found
  if (!blog) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <h1 className="text-2xl font-bold">Blog Not Found</h1>
      </div>
    );
  }

  // Filter out the current blog to create "related" set
  const relatedBlogs = blogs.filter((item) => item.id !== blog.id);

  return (
    <>
      {/* Header Section */}
      <header className="p-5 bg-white shadow">
        <h1 className="text-2xl font-bold mx-11">Single Blog</h1>
        <p className="text-sm text-gray-500 my-2 mx-11">
          Home . Pages . <span className="text-pink-600">Single Blog</span>
        </p>
      </header>

      {/* Main Container */}
      <div className="container mx-auto my-8 px-4 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Blog Content */}
        <div className="lg:col-span-2">
          {/* Blog Header */}
          <div className="mb-6">
            <Image
              src={blog.image}
              alt={blog.title}
              height={400}
              width={800}
              className="object-cover rounded-md w-full"
            />
            <h1 className="text-4xl font-bold mt-4">{blog.title}</h1>
            <p className="text-gray-500 mt-2">{blog.date}</p>
          </div>

          {/* Blog Details */}
          <div className="prose max-w-none">
            <p>{blog.content}</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit
              facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu
              malesuada vitae ultrices in in neque, porta dignissim.
            </p>
          </div>

          {/* Related Blogs Section */}
          <div className="mt-12">
            <h2 className="text-2xl font-semibold mb-4">Related Blogs</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {relatedBlogs.map((relatedBlog, index) => (
                <div
                  key={relatedBlog.id}
                  className="p-4 border rounded-md shadow-sm"
                >
                  <Image
                    // Example custom images for the 2 related items:
                    src={index === 0 ? "/Group 92.png" : "/Rectangle 70.png"}
                    alt={relatedBlog.title}
                    height={200}
                    width={300}
                    className="rounded-md"
                  />
                  <h3 className="font-bold mt-2">{relatedBlog.title}</h3>
                  <p className="text-sm text-gray-500 mt-1">
                    {relatedBlog.content.substring(0, 50)}...
                  </p>
                  <Link
                    href={`/Blog/${relatedBlog.id}`}
                    className="text-purple-600 inline-block mt-2"
                  >
                    Read More
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Additional Paragraph with Four Images */}
          <div className="mt-12">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              vehicula nisi quis vehicula malesuada. Etiam vitae orci tincidunt,
              dapibus nisi nec, consequat elit.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-4">
              <Image
                src="/Group 248.png"
                alt="Product 1"
                height={200}
                width={200}
                className="rounded-md"
              />
              <Image
                src="/Group 249.png"
                alt="Product 2"
                height={200}
                width={200}
                className="rounded-md"
              />
              <Image
                src="/Group 250.png"
                alt="Product 3"
                height={200}
                width={200}
                className="rounded-md"
              />
              <Image
                src="/Group 85.png"
                alt="Product 4"
                height={200}
                width={200}
                className="rounded-md"
              />
            </div>
          </div>

          {/* Comment Section */}
          <div className="mt-12">
            <h2 className="text-2xl font-semibold mb-4">Comments</h2>
            <div className="border p-4 rounded-md shadow">
              <h3 className="font-bold text-lg">Leave a Comment</h3>
              <form className="mt-4 space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:ring-purple-500"
                />
                <textarea
                  placeholder="Your Comment"
                  rows={5}
                  className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:ring-purple-500"
                />
                <button
                  type="submit"
                  className="bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700"
                >
                  Submit Comment
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Sidebar - (Reusing similar sidebar as Blog listing) */}
        <aside className="space-y-6">
          {/* Search */}
          <div>
            <input
              type="text"
              placeholder="Search"
              className="w-full p-2 rounded border border-gray-300 focus:outline-none focus:ring focus:ring-purple-500"
            />
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold text-indigo-900 mb-4">
              Categories
            </h3>
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
            <h3 className="text-2xl font-bold text-indigo-900 mb-4">
              Recent Post
            </h3>
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
      </div>
    </>
  );
};

export default BlogPost;
