import React from "react";

const SingleBlog = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto py-4 px-6">
          <h1 className="text-2xl font-bold">Single Blog</h1>
          <p className="text-gray-500">Home &gt; Blog &gt; Single Blog</p>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto flex py-10 px-6">
        {/* Blog Content */}
        <div className="w-3/4 pr-6">
          <img
            src="https://via.placeholder.com/800x400"
            alt="Blog Image"
            className="w-full rounded-lg"
          />
          <h2 className="text-3xl font-bold my-4">Blog Title</h2>
          <p className="text-gray-600">
            By <span className="font-semibold">Author Name</span> | December 8, 2024
          </p>
          <p className="text-gray-700 mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            feugiat orci non vulputate diam tincidunt nec. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Mauris feugiat orci non
            vulputate diam tincidunt nec.
          </p>

          {/* Related Posts */}
          <div className="mt-8">
            <h3 className="text-2xl font-bold mb-4">Related Posts</h3>
            <div className="grid grid-cols-3 gap-4">
              <div className="border rounded-lg p-4">
                <img
                  src="https://via.placeholder.com/150"
                  alt="Related Post"
                  className="w-full h-32 object-cover rounded-lg"
                />
                <h4 className="text-lg font-bold mt-2">Post Title</h4>
              </div>
              <div className="border rounded-lg p-4">
                <img
                  src="https://via.placeholder.com/150"
                  alt="Related Post"
                  className="w-full h-32 object-cover rounded-lg"
                />
                <h4 className="text-lg font-bold mt-2">Post Title</h4>
              </div>
              <div className="border rounded-lg p-4">
                <img
                  src="https://via.placeholder.com/150"
                  alt="Related Post"
                  className="w-full h-32 object-cover rounded-lg"
                />
                <h4 className="text-lg font-bold mt-2">Post Title</h4>
              </div>
            </div>
          </div>

          {/* Comments Section */}
          <div className="mt-8">
            <h3 className="text-2xl font-bold mb-4">Comments</h3>
            <div className="border rounded-lg p-4 mb-4">
              <p className="text-gray-600">
                <span className="font-semibold">John Doe:</span> Great post!
              </p>
            </div>
            <form className="border rounded-lg p-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full mb-4 px-4 py-2 border rounded-lg"
              />
              <textarea
                placeholder="Your Comment"
                className="w-full mb-4 px-4 py-2 border rounded-lg"
                rows={4}
              ></textarea>
              <button
                type="submit"
                className="px-6 py-2 bg-pink-600 text-white rounded-lg"
              >
                Post Comment
              </button>
            </form>
          </div>
        </div>

        {/* Sidebar */}
        <aside className="w-1/4">
          <div className="bg-white p-4 rounded-lg shadow-sm mb-6">
            <h3 className="text-lg font-bold">Search</h3>
            <input
              type="text"
              placeholder="Search"
              className="w-full mt-2 px-4 py-2 border rounded-lg"
            />
          </div>

          <div className="bg-white p-4 rounded-lg shadow-sm mb-6">
            <h3 className="text-lg font-bold">Categories</h3>
            <ul className="mt-2 space-y-2">
              <li>
                <a href="#" className="text-pink-600">
                  Fashion (10)
                </a>
              </li>
              <li>
                <a href="#" className="text-pink-600">
                  Lifestyle (15)
                </a>
              </li>
              <li>
                <a href="#" className="text-pink-600">
                  Travel (8)
                </a>
              </li>
            </ul>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h3 className="text-lg font-bold">Recent Posts</h3>
            <ul className="mt-2 space-y-2">
              <li>
                <a href="#" className="text-pink-600">
                  Recent Post 1
                </a>
              </li>
              <li>
                <a href="#" className="text-pink-600">
                  Recent Post 2
                </a>
              </li>
              <li>
                <a href="#" className="text-pink-600">
                  Recent Post 3
                </a>
              </li>
            </ul>
          </div>
        </aside>
      </div>

     
    </div>
  );
};

export default SingleBlog;
