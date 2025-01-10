"use client"
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const About = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      image: "/OhKElOkQ3RE.png",
      name: "Selina Gomez",
      feedback:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam venenatis arcu eu diam tincidunt, ac gravida neque convallis.",
    },
    {
      image: "/GH-mSApoKO0.png",
      name: "John Doe",
      feedback:
        "Nam vitae a enim nunc, sed sapien egestas ac nam. Tristique ultrices dolor aliquam lacus volutpat praesent.",
    },
    {
      image: "/RukI4qZGlQs.png",
      name: "Emily Clarke",
      feedback:
        "Sed eget varius lacus. Proin ultricies sapien a nibh dictum, id sollicitudin turpis efficitur.",
    },
  ];

  return (
    <div className="bg-gray-50 py-10">
      <div className="py-12 px-8 bg-purple-50 h-44">
        <h1 className="max-w-6xl mx-auto text-4xl font-bold text-blue-900">
          About Us
        </h1>
        <div className="max-w-6xl mx-auto flex items-center gap-2">
          <Link href={"/"} className="text-blue-900">
            Home
          </Link>
          <p className="text-blue-900">Pages</p>
          <p className="text-[#FB2E86]">About Us</p>
        </div>
      </div>

      {/* Business Info Section */}
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-6 items-center py-12">
        <div>
          <Image
            src="/Group 73.png"
            alt="Business"
            height={500}
            width={500}
            className="rounded-lg shadow-lg"
          />
        </div>

        <div>
          <h2 className="text-3xl font-bold text-gray-800">
            Know About Our Ecommerce Business, History
          </h2>
          <p className="text-gray-600 mt-4">
            Learn about our mission, journey, and commitment to excellence. We
            provide top-notch products and services for all your needs. Our
            history reflects years of dedication to our customers.
          </p>
          <button className="mt-6 bg-[#FB2E86] text-white px-6 py-3 rounded-md shadow-md hover:bg-red-600">
            Contact Us
          </button>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-12 bg-white">
        <h2 className="text-center text-3xl font-bold text-gray-800">
          Our Features
        </h2>
        <div className="max-w-7xl mx-auto px-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
          {[{ title: "Free Delivery", icon: "🚚" },
            { title: "100% Cash Back", icon: "💵" },
            { title: "Quality Product", icon: "🏆" },
            { title: "24/7 Support", icon: "☎️" }].map((feature, idx) => (
            <div
              key={idx}
              className="bg-gray-50 p-6 rounded-lg text-center shadow-md hover:shadow-lg transition-transform transform hover:scale-105 relative group"
            >
              <div className="text-4xl">{feature.icon}</div>
              <h3 className="text-lg font-bold mt-4">{feature.title}</h3>
              <p className="text-gray-600 mt-2">
                {feature.title === "Free Delivery"
                  ? "Fast and reliable delivery."
                  : feature.title === "100% Cash Back"
                  ? "Refunds on dissatisfaction."
                  : feature.title === "Quality Product"
                  ? "Premium product quality."
                  : "Support anytime, anywhere."}
              </p>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-1 w-0 bg-orange-500 group-hover:w-3/4 transition-all"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-12 bg-gray-50">
        <h2 className="text-center text-3xl font-bold text-gray-800">
          Our Client Say!
        </h2>
        <div className="max-w-4xl mx-auto px-6 mt-8 text-center">
          <div className="bg-white p-6 rounded-lg shadow-md transition">
            <Image
              src={testimonials[activeTestimonial].image}
              alt={testimonials[activeTestimonial].name}
              height={90}
              width={90}
              className="mx-auto "
            />
            <h3 className="text-lg font-bold mt-4">
              {testimonials[activeTestimonial].name}
            </h3>
            <p className="text-gray-600 mt-2">
              {testimonials[activeTestimonial].feedback}
            </p>
          </div>
          <div className="flex justify-center mt-6 space-x-4">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTestimonial(idx)}
                className={`h-3 w-3 rounded-full ${
                  activeTestimonial === idx
                    ? "bg-[#FB2E86]"
                    : "bg-gray-300 hover:bg-gray-400"
                } transition`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
