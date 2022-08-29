import React from "react";
import Link from "next/link";

const ViewResumes = ({ resumes }) => {
  return (
    <div className="py-2 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col text-center w-full mb-20 bg-indigo-200 rounded-2xl">
              <h1 className="text-2xl font-medium title-font my-2 text-gray-900">
                Resumes List
              </h1>
            </div>
            <div className="flex flex-wrap -m-4">
              {resumes.map((item) => {
                return (
                  <div className="p-4 w-full lg:w-1/2" key={item._id}>
                    <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                      {/* <img alt="team" class="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src="https://dummyimage.com/200x200" /> */}
                      <div className="w-full flex-grow sm:pl-8 border rounded-md p-4">
                        <h2 className="title-font font-medium text-lg text-gray-900">
                          {item.fullName}
                        </h2>
                        <h3 className="text-gray-500 mb-3">
                          {item.currJobTitle}
                        </h3>
                        <p className="mb-4 italic">{item.email}</p>
                        <p className="mb-4 ">{item.mobile}</p>
                        <p className="mb-4 ">{item.qual}</p>
                        <p className="mb-4 ">{item.country}</p>
                        <div className="flex justify-end flex-wrap">
                          <Link href={item.resumeURL}>
                            <a
                              className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
                              target="_blank"
                            >
                              view resume
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                className="ml-1.5 w-4 h-4"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                ></path>
                              </svg>
                            </a>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ViewResumes;
