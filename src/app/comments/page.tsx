'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useCommentStore } from '../store/useCommentStore';


interface Post {
  title: string;
  passage: string;
}

const CommentsPage = () => {
  // Step 2: Type posts as Post[]
  const [posts, setPosts] = useState<Post[]>([]);
  const comments = useCommentStore((state) => state.comments); 

  useEffect(() => {
    const fetchPostsFromServer = async () => {
      try {
        const res = await fetch('http://localhost/efuyegela/efuyegela.php');
        const data = await res.json();
        setPosts(data);
        sessionStorage.setItem('posts', JSON.stringify(data));
      } catch (err) {
        console.error('Failed to fetch posts:', err);
      }
    };

    fetchPostsFromServer();
  }, []);

  return (
    <div className='bg-amber-100 min-h-screen'>
      <div className="flex text-sky-500 justify-center gap-x-8 text-lg font-semibold m-auto max-w-[800px]">
        <Link href="/"><li className="list-none hover:bg-sky-950">Home</li></Link>
        <Link href="/formpage"><li className="list-none hover:underline">Form</li></Link>
        <Link href="/comments"><li className="list-none hover:underline">Comments</li></Link>
      </div>

      <div className="p-6 my-6 max-w-4xl mx-auto bg-gray-400">
        <div className="flex flex-col md:flex-row gap-[100px]">

          <div className="w-full md:w-1/2">
            <h2 className="text-2xl font-bold mb-4">All Comments</h2>
            <div className="space-y-4 text-left">
              {comments.length === 0 && <p>No comments yet.</p>}
              {comments.map((c, i) => (
                <div key={i} className="p-3 border bg-gray-200 rounded-b-2xl">
                  <p><strong>Name:</strong> {c.name}</p>
                  <p><strong>Email:</strong> {c.email}</p>
                  <p><strong>Comment:</strong> {c.comment}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full md:w-1/2">
            <h3 className="text-xl font-bold mb-4">Fetched Web Dev Articles</h3>
            <div className="space-y-4" id="posts">
              {posts.length > 0 ? (
                posts.map((post, i) => (
                  <div key={i} className="bg-gray-300 p-4 rounded-b-4xl">
                    <h4 className="text-lg font-semibold">{post.title}</h4>
                    <p>{post.passage}</p>
                  </div>
                ))
              ) : (
                <p>No posts available.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentsPage;
