import React from "react";
import { GlobeAltIcon } from "@heroicons/react/24/outline";

const Section = () => {
  const arr = [1, 2, 3, 4, 5, 6];

  return (
    <div className="py-12 bg-green-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <section>
          <div className="max-w-screen-xl px-4 py-16 sm:px-6 lg:px-0">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-8 lg:gap-x-16 lg:items-center">
              <div className="max-w-lg mx-auto text-center lg:text-left lg:mx-0">
                <h2 className="text-3xl font-bold sm:text-4xl">
                  Find your career path
                </h2>

                <p className="mt-4 text-gray-600">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
                  vero aliquid sint distinctio iure ipsum cupiditate? Quis, odit
                  assumenda? Deleniti quasi inventore, libero reiciendis minima
                  aliquid tempora. Obcaecati, autem.
                </p>

                <a
                  className="inline-flex items-center px-8 py-3 mt-8 text-white bg-green-900 border border-green-900 rounded hover:bg-transparent hover:text-green-600 active:text-green-500 focus:outline-none focus:ring"
                  href="/get-started"
                >
                  <span className="text-sm font-medium"> Get Started </span>

                  <svg
                    className="w-5 h-5 ml-3"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>
              </div>

              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                {arr.map((value) => (
                  <a
                    key={value}
                    className="block p-4 border border-green-100 shadow-lg rounded-xl focus:outline-none focus:ring hover:border-green-200 hover:ring-1 hover:ring-green-400"
                    href="/accountant"
                  >
                    <span className="inline-block p-3 rounded-lg bg-green-900 text-white">
                    <div className="w-4 h-4">
                        <GlobeAltIcon/>
                    </div>
                    </span>

                    <h6 className="mt-2 font-bold">Accountant</h6>

                    <p className="hidden sm:mt-1 sm:text-sm sm:text-gray-600 sm:block">
                      Lorem ipsum dolor sit amet consectetur.
                    </p>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Section;
