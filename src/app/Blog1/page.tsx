
import Image from "next/image";
const BlogPost = () => {
  return (
    <>
      <header className=" p-5 bg-white shadow">
        <h1 className=" text-2xl font-bold mx-11">Single Blog </h1>
        <p className="text-sm text-gray-500 my-2 mx-11">
          Home . Pages . <span className="text-pink-600">Single Blog</span>
        </p>
      </header>
      
      <div className="container mx-auto my-8 px-4">
        {/* Blog Header */}
        <div className="mb-6">
          <Image
            src="/blog1.png"
            alt="Blog"
           height={543}
           width={870}
            className="object-cover rounded-md"
          />
          <h1 className="text-4xl font-bold mt-4">Morbi sit amet erat</h1>
          <p className="text-gray-500 mt-2">12 Jan 2024 | 5 min read</p>
        </div>

        {/* Blog Content */}
        <div className="prose max-w-none">
          <p>
            Lorem ipsum dolor sit amet consectetur adipiscing elit. Vivamus
            mattis urna non augue aliquam...
          </p>
          <h2>Subheading Example</h2>
          <p>More blog content here...</p>
        </div>

        {/* Related Blogs */}
        <div className=" mt-8">
          <h2 className="text-2xl font-semibold mb-4">Related Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 border rounded-md shadow-sm">
              <Image
                src="/Group 92.png"
                alt="Related Post"
                height={417}
                width={245}
                className="flex "
            />
              <h3 className="font-bold mt-2">Related Blog 1</h3>
            </div>
            <div className="p-4 border rounded-md shadow-sm">
              <Image
                src="/Rectangle 70.png"
                alt="Related Post"
                height={417}
                width={245}
                className="flex "
            />
              <h3 className="font-bold mt-2">Related Blog 1</h3>
             
            </div>
            
            {/* Add more cards */}
          </div>
        </div>
        
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est nunc montes lacus consequat integer viverra. Sit morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante posuere malesuada.Lorem ipsum dolor sit amet consectetur adipiscing elit. Velit dapibus est nunc montes lacus consequat integer viverra. Sit morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante posuere malesuada.Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Velit dapibus est nunc </p>
        <div className=" mt-8">
          <h2 className="text-2xl font-semibold mb-4">Related Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="p-4 border rounded-md shadow-sm">
              <Image
                src="/Group 85.png"
                alt="Related Post"
                height={417}
                width={245}
                className="flex "
            />
              <h3 className="font-bold mt-2">Related Blog 1</h3>
            </div>
            <div className="p-4 border rounded-md shadow-sm">
              <Image
                src="/Group 248.png"
                alt="Related Post"
                height={417}
                width={245}
                className="flex "
            />
             
             
            </div>
            <div className="p-4 border rounded-md shadow-sm">
              <Image
                src="/Group 249.png"
                alt="Related Post"
                height={417}
                width={245}
                className="flex "
            />
             
             
            </div>
            <div className="p-4 border rounded-md shadow-sm">
              <Image
                src="/Group 250.png"
                alt="Related Post"
                height={417}
                width={245}
                className="flex "
            />
             
             
            </div>
           
            {/* Add more cards */}
          </div>
        </div>
        <p>
        Lorem ipsum dolor sit amet consectetur adipiscing elit. Velit dapibus est nunc montes lacus consequat integer viverra. Sit morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante posuere malesuada.Lorem ipsum dolor sit amet consectetur adipiscing elit. Velit dapibus est nunc montes lacus consequat integer viverra. Sit morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante posuere malesuada.Lorem ipsum dolor sit amet consectetur adipiscing elit.
         Velit dapibus est nun 
        </p>
        <p>
        Lorem ipsum dolor sit amet consectetur adipiscing elit. Velit dapibus est nunc montes lacus consequat integer viverra. Sit morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante posuere malesuada.Lorem ipsum dolor sit amet consectetur adipiscing elit. Velit dapibus est nunc montes lacus consequat integer viverra. Sit morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante posuere malesuada.Lorem ipsum dolor sit amet 
        consectetur adipiscing elit. Velit dapibus est nunc
        </p>
      </div>
    </>
  );
};

export default BlogPost;
