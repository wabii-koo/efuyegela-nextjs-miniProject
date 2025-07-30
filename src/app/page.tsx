import Image from "next/image";
import Link from 'next/link';


export default function Home() {
  return (
    <div className='bg-amber-100 '>
      <div className="flex text-sky-500 justify-center gap-x-8 text-lg font-semibold m-auto max-w-[800px]">
  <Link href="/"><li className="list-none hover:underline">Home</li></Link>
  <Link href="/formpage"><li className="list-none hover:underline">Form</li></Link>
  <Link href="/comments"><li className="list-none hover:underline">Comments</li></Link>
</div>

    <div className="max-w-[500px]   m-auto bg-white p-[20px]">
    < Image src='/webdevelopment.jpg'  alt="Blog"  width={500}  height={500} className="w-1/2 h-auto rounded-full mx-auto" />
    <h1 className="text-2xl text-center mt-[12px] rounded-2xl">webdevelopment</h1>
    <p className="text-pink-400 mt-[10px] mb-[20px] text-center">
      By <strong>Welebe Kebede</strong> | June 26, 2025
    </p>

    <div className="leading-relaxed max-w-[800px] my-[20px] mx-auto py-[15px] px-[20px] bg-gray-200 text-black rounded-xl">
      <h1 className="text-xl mt-[20px] rounded-2xl  mb-4 text-center">The Journey into Web Development</h1>
      <p className="mb-4">
        Web development is an exciting and ever-evolving field. In this article, we explore the basics of front-end and back-end development, popular tools, and how to start your journey as a developer.
      </p>
      <p>
        Whether you are interested in creating beautiful websites or building powerful server-side applications, web development has something for everyone.
      </p>
     
    </div>
    </div>
    </div>
  );
}
