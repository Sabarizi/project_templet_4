"use client"
import { useParams } from "next/navigation";
import Image from "next/image";

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

  return (
    <>
      {/* Header Section */}
      <header className="p-5 bg-white shadow">
        <h1 className="text-2xl font-bold mx-11">Single Blog</h1>
        <p className="text-sm text-gray-500 my-2 mx-11">
          Home . Pages . <span className="text-pink-600">Single Blog</span>
        </p>
      </header>

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
            <p className="text-gray-500 mt-2">{`${blog.date}`}</p>
          </div>

          {/* Blog Content */}
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
    {blogs
      .filter((relatedBlog) => relatedBlog.id !== id)
      .map((relatedBlog, index) => (
        <div
          key={relatedBlog.id}
          className="p-4 border rounded-md shadow-sm"
        >
          <Image
            src={
              index === 0
                ? "/Group 92.png" // First custom image path
                : "/Rectangle 70.png" // Second custom image path
            }
            alt={relatedBlog.title}
            height={200}
            width={300}
            className="rounded-md"
          />
          <h3 className="font-bold mt-2">{relatedBlog.title}</h3>
          <p className="text-sm text-gray-500">
            {relatedBlog.content.substring(0, 50)}...
          </p>
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
                  className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:ring-purple-500"
                  rows={5}
                />
                <button className="bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700">
                  Submit Comment
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Sidebar */}
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
            <h3 className="text-lg font-semibold text-gray-700">Categories</h3>
            <ul className="text-sm text-gray-600 space-y-1">
              <li className="hover:text-purple-600 cursor-pointer">Hobbies (14)</li>
              <li className="hover:text-purple-600 cursor-pointer">Women (21)</li>
              <li className="hover:text-purple-600 cursor-pointer">Travel (10)</li>
            </ul>
          </div>

          {/* Recent Posts */}
          <div>
            <h3 className="text-lg font-semibold text-gray-700">Recent Posts</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2 text-sm text-gray-600">
                <Image src="/recent1.jpg" alt="Recent Post 1" height={50} width={50} className="rounded" />
                <p>Recent Blog Post 1</p>
              </li>
              <li className="flex items-center space-x-2 text-sm text-gray-600">
                <Image src="/recent2.jpg" alt="Recent Post 2" height={50} width={50} className="rounded" />
                <p>Recent Blog Post 2</p>
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </>
  );
};

export default BlogPost;
