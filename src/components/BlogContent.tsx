"use client";

import './Blog.module.css'



interface ContentItem {
  type: string;
  value: string;
}

interface BlogContentProps {
  content: ContentItem[];
}

const BlogContent: React.FC<BlogContentProps> = ({ content }) => {
  return (
    <div className='p-4 '>
      {content.map((item, index) => (
        <div key={index}>
          {item.type === "text" ? (
            <p className="text-base leading-relaxed text-black my-2">{item.value}</p>
          ) : item.type === "code" ? (
            <pre className="bg-gray-100 text-black font-mono text-sm p-4 rounded overflow-x-auto my-2">
              <code>{item.value}</code>
            </pre>
          ) : null}
        </div>
      ))}
    </div>
  );
};

export default BlogContent;