import React from 'react';
import moment from 'moment';
import Link from 'next/link';

const PostCard = ({ post }) => {
  return (
    <div className='bg-white shadow-lg h-full'>
        <div className='relative overflow-hidden shadow-md pb-80 mb-6'>
        <Link href={`/post/${post.slug}`}>
            <img src= {post.featuredImage.url}
                 alt= {post.title}
                 className = "object-top absolute h-80 w-full object-cover shadow-lg hover:scale-105 transition duration-500 cursor-pointer"
                 />
          </Link>
        </div>
        <h1 className='transition duration-700  mb-4 cursor-pointer
        hover:text-red-700 lg:text-2xl px-5 font-semibold'>
          <Link href={`/post/${post.slug}`}>
            {post.title}
          </Link>
        </h1>
        <div className='block lg:flex  items-center  mb-4 w-full'>
            <div className='font-medium text-gray-700 px-5'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline mr-2 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                  <span className='text-base'>
                    {moment(post.createdAt).format('MMM DD, YYYY')}
                  </span>
            </div>
        </div>
        <p className=' text-base md:text-lg px-5 text-gray-700  font-normal  mb-8'>{post.excerpt}</p>
        <div className='px-5'>
             <Link href={`/post/${post.slug}`}>
                <span className='transition duration-500 transform hover:-translate-y-1 inline-block bg-red-600 text-md font-medium rounded-full text-white px-7 py-2 mb-5 cursor-pointer'>Read More</span>
             </Link>
        </div>
    </div>
  )
}

export default PostCard
