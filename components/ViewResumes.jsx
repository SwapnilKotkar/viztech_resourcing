import React from "react";
import Link from "next/link";
import { PaperClipIcon, ChevronUpIcon } from "@heroicons/react/20/solid";
import { Disclosure } from "@headlessui/react";
// import { ChevronUpIcon } from '@heroicons/react/solid'

const ViewResumes = ({ resumes }) => {
  return (
    <>
      <div className="pt-3 pb-10 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-4 lg:pt-4 lg:col-span-2">
            <div className="flex justify-center">
              <a href="" className="text-2xl font-bold text-gray-900">
                Resumes
              </a>
            </div>
          </div>
          {/* {resumes.map((resume) => (
            <div className="w-full pt-4" key={resume._id}>
              <div className="mx-auto w-full rounded bg-white p-2">
                <Disclosure>
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full justify-between rounded px-4 py-4 text-left text-sm md:text-lg font-medium text-gray-900 hover:bg-gray-200 focus:outline-none focus-visible:ring focus-visible:ring-gray-500 focus-visible:ring-opacity-75">
                        <span>{resume.fullName}</span>
                        <ChevronUpIcon
                          className={`${
                            open ? "rotate-180 transform" : ""
                          } h-7 w-7 text-gray-500`}
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="px-4 pt-4 pb-2 text-lg text-gray-500">
                        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                          <div className="px-4 py-5 sm:px-6">
                            <h3 className="text-lg md:text-xl leading-6 font-medium text-gray-900">
                              Applicant Information
                            </h3>
                            <p className="mt-1 max-w-2xl text-sm md:text-lg text-gray-500">
                              Personal details and application.
                            </p>
                          </div>
                          <div className="border-t border-gray-200">
                            <dl>
                              <div className="bg-gray-100 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm md:text-lg font-medium text-gray-500">
                                  Full name
                                </dt>
                                <dd className="mt-1 text-sm md:text-lg text-gray-900 sm:mt-0 sm:col-span-2">
                                  {resume.fullName}
                                </dd>
                              </div>
                              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm md:text-lg font-medium text-gray-500">
                                  Application for
                                </dt>
                                <dd className="mt-1 text-sm md:text-lg text-gray-900 sm:mt-0 sm:col-span-2">
                                  {resume.applyFor}
                                </dd>
                              </div>
                              <div className="bg-gray-100 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm md:text-lg font-medium text-gray-500">
                                  Qualification
                                </dt>
                                <dd className="mt-1 text-sm md:text-lg text-gray-900 sm:mt-0 sm:col-span-2">
                                  {resume.qual}
                                </dd>
                              </div>
                              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm md:text-lg font-medium text-gray-500">
                                  Email address
                                </dt>
                                <dd className="mt-1 text-sm md:text-lg text-gray-900 sm:mt-0 sm:col-span-2">
                                  {resume.email}
                                </dd>
                              </div>
                              <div className="bg-gray-100 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm md:text-lg font-medium text-gray-500">
                                  Mobile number
                                </dt>
                                <dd className="mt-1 text-sm md:text-lg text-gray-900 sm:mt-0 sm:col-span-2">
                                  {resume.mobile}
                                </dd>
                              </div>
                              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm md:text-lg font-medium text-gray-500">
                                  Country
                                </dt>
                                <dd className="mt-1 text-sm md:text-lg text-gray-900 sm:mt-0 sm:col-span-2">
                                  {resume.country}
                                </dd>
                              </div>
                              <div className="m-4">
                                <Link href={resume.resumeURL}>
                                  <a
                                    className="inline-flex items-center justify-center w-full px-6 py-4 text-white border bg-gray-900 border-gray-900 rounded active:text-gray-500 rounded sm:w-auto"
                                    target="_blank"
                                  >
                                    <span className="font-medium text-sm">
                                      {" "}
                                      View resume{" "}
                                    </span>

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
                            </dl>
                          </div>
                        </div>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              </div>
            </div>
          ))} */}
        </div>
      </div>
    </>
  );
};

export default ViewResumes;
