"use client"
import React, { useState, useEffect } from "react";
import Link from "next/link";
import blogsData from "../public/news.json"; // Import JSON data
import Image from "next/image";
// Define the Blog type
interface Blog {
  id: string;
  title: string;
  image:string;
  author:string,
  desc:string;
  date: string; // Date as a string in ISO format
}

const BlogLayout: React.FC = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]); // Initialize blogs state

  useEffect(() => {
    // Sort blogs by date (most recent first)
    const sortedBlogs = blogsData.sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );

    // Set the sorted blogs to the state
    setBlogs(sortedBlogs);
  }, []);
    return (
      <div className="container grid grid-cols-1 lg:grid-cols-[60%,40%] gap-4   p-4 overflow-x-hidden mx-auto">
        {/* 60% Section */}
        {blogs.length > 0 && (
        <div className=" bg-white p-6 rounded-lg shadow-md overflow-x-hidden mx-auto">
         <Image src={blogs[0].image} alt="x" width={500} height={500} className="object-cover w-full h-auto"/>
          <div className="flex gap-5 mt-10">
          <h2 className="text-2xl font-bold mb-2">{blogs[0].title}</h2>
          <div>
          <p className="text-gray-700 mb-4 text-xl">
            {blogs[0].desc}
          </p>
          <Link
            href={`/news/${blogs[0].id}`}
            className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition text-sm md:text-base"
          >
            Read More
          </Link>
          </div>
          </div>
         
        </div>
        )}
        {/* 40% Section */}
        <div className=" bg-black text-white p-6 rounded-lg shadow-md overflow-y-auto max-h-96 overflow-x-hidden mx-auto">
           <h1 className="text-2xl text-orange-500">News</h1>
          {/* Repeated Items */}
          {blogs.slice(1).map((blog) => (
            <div key={blog.id} className="mb-4">
              <Link href={`/news/${blogs[0].id}`} ><h3 className="text-2xl font-semibold">{blog.title}</h3></Link>
              <p className="text-gray-600 text-xl">{blog.desc}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
  export default BlogLayout;
  