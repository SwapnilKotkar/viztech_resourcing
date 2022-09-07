import React from 'react'
import Image from 'next/image'

const Blogs = () => {

    const blogsData = [
        {
            image: '/static/images/blog-one.jpg',
            date: "July 19, 2021",
            heading: "New trends in Tech",
        },
        {
            image: '/static/images/blog-two.jpg',
            date: "April 07, 2021",
            heading: "Working with legacy stacks",
        },
        {
            image: '/static/images/blog-three.jpg',
            date: "March 15, 2021",
            heading: "10 best smartphones for devs",
        }
    ]

  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-6 sm:py-8 lg:py-12">
  <div className="max-w-screen-2xl px-4 md:px-0 mx-auto">
    <div className="mb-10 md:mb-16">
      <h2 className="text-green-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">Blogs</h2>

      <p className="max-w-screen-md text-gray-500 md:text-lg text-center mx-auto">This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated.</p>
    </div>
    

    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 xl:gap-8">
    {blogsData.map((blog)=> (
        <a key={blog.heading} className="group h-48 md:h-64 xl:h-96 flex flex-col bg-green-100 rounded-lg shadow-lg overflow-hidden relative">
        <Image src={blog?.image} priority layout='fill' className="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200" alt='blog images' />

        <div className="bg-gradient-to-t from-green-800 md:via-transparent to-transparent absolute inset-0 pointer-events-none"></div>

        <div className="relative p-4 mt-auto">
          <span className="block text-green-200 text-sm">{blog.date}</span>
          <h2 className="text-white text-xl font-semibold transition duration-100 mb-2">{blog.heading}</h2>

          <span className="text-indigo-300 font-semibold">Read more</span>
        </div>
      </a>
    ))}
    </div>
  </div>
</div>
    </div>   
</div>
  )
}

export default Blogs