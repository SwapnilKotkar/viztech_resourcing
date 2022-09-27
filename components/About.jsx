import React from "react";
import Image from 'next/image'
import About1 from '../public/about-one.jpg'
import About2 from '../public/about-two.jpg'

import {
  BoltIcon,
  GlobeAltIcon,
  ScaleIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    name: "Who we are",
    description:
      "We are technologists. We know what it takes for technology hiring.",
    icon: GlobeAltIcon,
  },
  {
    name: "What we do",
    description:
      "We are best in hiring because we trust our process is tested and proved. Industry best.",
    icon: ScaleIcon,
  },
  {
    name: "Why we",
    description:
      "We understand technology hiring because is a technologist. We know the problem you are solving. Understanding the job is critical.",
    icon: BoltIcon,
  },
];

const contents = [
  {
    name: "You Make The Hire. We Make It Simple.",
    description:
      "Using the process and bespoke-Al hiring we employ the best prudence practice in getting the right resources for the job. Analogically one can relate as we are technologists hiring technologists so we know what it takes for one to be in that role. Also not only help you reduce frustration but our process makes sure you do not end up costly of the wrong hire. It is expensive and bad for all parties involved. Hiring someone as if you hire for a lifetime. Though we have time-bound roles and projects, one should be hired to work again and again if required.",
  },
  {
    name: "We Build Lasting Relationships Between Candidates & Business.",
    description:
      "A descriptive paragraph that tells clients how good you are and proves that you are the best choice that they have made. This paragraph is also for those who are looking out for a reliable co-working space. You can use a few enticing words and flaunt your capabilities that will attract future clients and encourage them to hire you right away. List down your expertise and experience to prove you are the best.",
  },
];

const About = () => {
  return (
    <>
      <div className="py-12 bg-emerald-100" id="about">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center pb-8">
            <p className="mt-2 text-3xl leading-8 font-bold tracking-tight text-emerald-900 sm:text-4xl">
              About Us
            </p>
          </div>

          <div className="mt-10">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
              {features.map((feature) => (
                <div key={feature.name} className="relative">
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-emerald-900 text-white">
                      <feature.icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <p className="ml-16 text-lg leading-6 font-medium text-emerald-900">
                      {feature.name}
                    </p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-500">
                    {feature.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
      <div className="bg-emerald-100 py-6 sm:py-8 lg:py-12">
        <div className="max-w-screen-xl px-4 md:px-8 mx-auto">
          <div className="grid lg:grid-cols-2 py-8 gap-8 lg:gap-12">
            <div>
              <div className="h-64 md:h-auto bg-emerald-100 overflow-hidden">
                <Image
                  src={About1}
                  priority
                  alt="Photo by Martin Sanchez"
                  className="w-full h-full rounded-lg shadow-lg object-cover object-center"
                />
              </div>
            </div>
            <div className="md:pt-8">
              <h1 className="text-emerald-800 text-2xl sm:text-3xl font-bold text-center md:text-left mb-4 md:mb-6">
                {contents[0].name}
              </h1>

              <p className="text-gray-500 sm:text-lg mb-6 md:mb-8">
                {contents[0].description}
              </p>
            </div>
          </div>
          <div className="grid lg:grid-cols-2 py-8 gap-8 lg:gap-12">
            <div className="md:pt-8">
              <h1 className="text-emerald-800 text-2xl sm:text-3xl font-bold text-center md:text-left mb-4 md:mb-6">
                {contents[1].name}
              </h1>

              <p className="text-gray-500 sm:text-lg mb-6 md:mb-8">
                {contents[1].description}
              </p>
            </div>
            <div>
              <div className="h-64 md:h-auto bg-emerald-100 overflow-hidden">
                <Image
                  src={About2}
                  priority
                  alt="Photo by Martin Sanchez"
                  className="w-full h-full rounded-lg shadow-lg object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
