"use client";

import './Blog.module.css'



interface ContentItem {
  type: string;
  value: string;
}


const BlogContent = ({ content }: { content: ContentItem[] }) => {
  return (
    <div className='p-4'>
      {content.map((item, index) => {
        if (item.type === "text") {
          return (
            <p key={index} className="text-base leading-relaxed text-black my-2">
              {item.value.split("\n").map((line, idx) => (
                <>
                  {line}
                  {idx < item.value.split("\n").length - 1 && <br />}
                </>
              ))}
            </p>
          );
        } 
        else if (item.type === "heading") {
          return (
            <h1 className='text-xl'>{item.value}</h1>
          )
        }
        else if (item.type === "code") {
          return (
            <pre key={index} className="bg-gray-100 text-black font-mono text-sm p-4 rounded overflow-x-auto my-2">
              <code>
                {item.value.split("\n").map((line, idx) => (
                  <>
                    {line}
                    {idx < item.value.split("\n").length - 1 && <br />}
                  </>
                ))}
              </code>
            </pre>
          );
        }
        return null;
      })}
    </div>
  );
};

export default BlogContent;