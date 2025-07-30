'use client';

import React, { useRef } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useCommentStore } from '../store/useCommentStore'; 

const FormPage = () => {
  const router = useRouter();
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const commentRef = useRef(null);
  const addComment = useCommentStore((state) => state.addComment); 

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = nameRef.current?.value.trim();
    const email = emailRef.current?.value.trim();
    const comment = commentRef.current?.value.trim();

    if (name && email && comment) {
      const newComment = { name, email, comment };
      addComment(newComment); 
      router.push('/comments'); 
    }
  };

  return (
    <div className='bg-amber-100 min-h-screen'>
      <div className="flex text-sky-500 justify-center gap-x-8 text-lg font-semibold m-auto max-w-[800px]">
        <Link href="/"><li className="list-none hover:underline">Home</li></Link>
        <Link href="/formpage"><li className="list-none hover:underline">Form</li></Link>
        <Link href="/comments"><li className="list-none hover:underline">Comments</li></Link>
      </div>

      <div className="flex justify-center items-center">
        <div className="mt-[40px] w-full max-w-[400px] rounded-3xl bg-neutral-200 p-4">
          <h3 className="ml-[10px] text-lg font-semibold">Leave a Comment</h3>
          <form onSubmit={handleSubmit} className="w-full max-w-[700px] mx-auto">
            <div className="p-[10px] m-[8px] text-black bg-gray-50 rounded-md">
              <input
                ref={nameRef}
                name="name"
                placeholder="Your Name"
                required
                className="block w-full mb-2 p-2 rounded border"
              />
              <input ref={emailRef} type="email" name="email" placeholder="Your Email"  required className="block w-full mb-2 p-2 rounded border" />
              <textarea  ref={commentRef}  name="comment"  rows="5" placeholder="Your Comment"  required className="block w-full p-2 rounded border" ></textarea>
            </div>
            <button type="submit" className="m-4 bg-cyan-950 text-white rounded px-8 py-2 hover:bg-amber-500"> Post Comment </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormPage;
