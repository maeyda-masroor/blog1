import { notFound } from 'next/navigation';
import data from '../../../public/news.json';
import Image from 'next/image';
export async function generateStaticParams() {
  // Generate paths for each blog post based on the slugs
  return data.map((post) => ({
    id: post.id,
  }));
}

export async function generateMetadata({ params }: { params: { id: string} }) {
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
    <div className='container mx-auto p-10'>
      <h1>{post.title}</h1>
      <p><strong>Author:</strong> {post.author}</p>
      <Image src={post.image}  alt='x' width={500} height={500} className='w-full h-full'/>
      <h1 className='text-xl'>{post.date}</h1>
      <p className='text-xl'>{post.desc}</p>
    </div>
  );
}