import { notFound } from 'next/navigation';
import data from '../../../public/blog.json';
import Comment from '../../../components/Comments';
import Blogcontent from '@/components/BlogContent';
import Comments from '@/components/Comments1';
export async function generateStaticParams() {
  // Generate paths for each blog post based on the slugs
  return data.map((post) => ({
    slug: post.id,
  }));
}

export async function generateMetadata({ params }: { params: { id: string } }) {
  // Generate metadata dynamically for the page based on the slug
  
  const { id } = await params;

  const post = data.find((post) => post.id === id);

  
  if (!post) {
    return { title: 'Post Not Found' };
  }

  return {
    title: post.title,
    description: `Read the full blog post: ${post.title}`,
  };
}

export default async function BlogPost({ params }: { params: { id: string } }) {
  // Access the blog post data
  const { id } = await params;  // Await the params here
  const post = data.find((post) => post.id === id);

  if (!post) {
    notFound();  // Trigger 404 if the post is not found
  }
  return (
    <div className='container mx-auto'>
      <h1 className='text-4xl text-black'>{post.title}</h1>
      <p className='text-md text-black'><strong>Author:</strong> {post.author}</p>
      <Blogcontent content={post.content} />
      <Comments/>
    </div>
  );
}