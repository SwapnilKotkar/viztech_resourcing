import React from 'react'
import Image from 'next/image'
import Hero1 from '../public/hero-one.jpg'
import Hero2 from '../public/hero-two.jpg'

const Hero = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6" id='home'>
    <div className="bg-white pb-6 sm:pb-8 lg:pb-12">
  <div className="max-w-screen-2xl py-4 md:px-0 mx-auto">
  <section className="max-w-screen-2xl px-4 md:px-8 mx-auto">
    <div className="flex flex-wrap justify-between mb-8 md:mb-16">
      <div className="w-full lg:w-1/3 flex flex-col justify-center lg:pt-48 lg:pb-24 mb-6 sm:mb-12 lg:mb-0">
        <h1 className="text-emerald-800 text-4xl sm:text-5xl md:text-6xl font-bold mb-4 md:mb-8">A Place That Helps You To Reach Your Destiny</h1>

        <p className="max-w-md text-gray-500 xl:text-lg leading-relaxed">This is a section of some simple filler text, also known as placeholder text. It shares characteristics of real text.</p>
      </div>

      <div className="w-full lg:w-2/3 flex mb-12 md:mb-16">
        <div className='flex items-center'>
        <div className="overflow-hidden relative z-5 top-12 md:top-16 left-12 md:left-16 -ml-12 lg:ml-0">
        <Image src={Hero1} alt="Photo by Kaung Htet" objectFit='cover' priority height={600} width={500} className="rounded-lg shadow-lg object-cover object-center" />
        </div>
        <div className="overflow-hidden">
          <Image src={Hero2} alt="Photo by Manny Moreno" objectFit='cover' height={600} width={500} priority className="rounded-lg shadow-lg object-cover object-center" />
        </div>
        </div>
      </div>
    </div>
  </section>
    </div>
    </div>
    </div>
    </>
  )
}

export default Hero