"use client"
import React, { useState, useEffect } from "react";
import Link from "next/link";
import blogsData from "../public/blog.json"; // Import JSON data
import Image from "next/image";
// Define the Blog type
interface Blog {
  id: string;
  title: string;
  content:object;
  author:string,
  date: string; // Date as a string in ISO format
  image:string
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
        <div>
         <div className="container mx-auto p-4 overflow-x-hidden">
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 overflow-x-hidden mx-auto">
        {blogs.map((item) => (
          <div
            key={item.id}
            className="bg-white shadow-md rounded-lg overflow-x-hidden flex"
          >
            <div className="relative h-40 w-1/2">
              <Image
                src={item.image}
                alt={item.title}
                layout="fit"
                width={100}
                height={50}
                objectFit="cover"
                className="rounded-t-lg h-full w-full"
              />
            </div>
            <div className="p-4">
              <Link href={`/blog/${item.id}`}>
              <h3 className="text-lg font-bold mb-2">{item.title}</h3>
               </Link>
               <h3 className="text-lg font-bold mb-2">{item.author}</h3> 
              <p className="text-gray-600">{item.date}</p>
            </div>
          </div>
        ))}
      </div>
      </div>
      </div>
    );
  };
  
  export default BlogLayout;