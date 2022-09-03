import React from "react";
import Link from "next/link";

const ApplyBanner = () => {
  return (
    <>
      <div className="bg-emerald-900">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-2xl font-bold tracking-tight text-amber-200 sm:text-4xl">
            <span className="block">Ready to dive in?</span>
            <span className="block text-gray-300">
              Submit your resume today.
            </span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <Link href="/apply">
                <a className="inline-flex items-center justify-center px-4 sm:px-5 py-3 border border-transparent text-base font-medium rounded text-emerald-900 bg-emerald-100 hover:bg-emerald-900 hover:text-white hover:border-white">
                  Submit resume
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ApplyBanner;
