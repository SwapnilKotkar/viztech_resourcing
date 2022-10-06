import React from "react";
import Link from "next/link";
import FooterLogo from "./FooterLogo";

const Footer = () => {
  return (
    <>
      <div className="py-12 bg-emerald-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <footer className="max-w-screen-2xl px-4 md:px-0 mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-8 lg:mt-12 mb-16">
              <div>
                <div className="lg:-mt-2 mb-4">
                  <span className="rounded">
                    <FooterLogo
                      bgColor={"#B9E9C9"}
                      color={"#064E3B"}
                      width={150}
                    />
                  </span>
                </div>

                <p className=" text-gray-100 font-medium">
                  You Make The Hire. We Make It Simple.
                </p>
              </div>

              <div className="flex justify-between">
              <div className="flex-1 lg:flex-none">
                <div className="text-amber-200 font-bold tracking-widest uppercase mb-4">
                  Menu
                </div>

                <nav className="flex flex-col gap-4">
                  <div>
                    <Link href="/#home">
                      <a className="text-gray-300 font-bold hover:text-green-400 active:text-gray-600 transition duration-100">
                        Home
                      </a>
                    </Link>
                  </div>

                  <div>
                    <Link href="/#about">
                      <a className="text-gray-300 font-bold hover:text-green-400 active:text-gray-600 transition duration-100">
                        About Us
                      </a>
                    </Link>
                  </div>

                  <div>
                    <Link href="/apply">
                      <a className="text-gray-300 font-bold hover:text-green-400 active:text-gray-600 transition duration-100">
                        Apply Now
                      </a>
                    </Link>
                  </div>
                </nav>
              </div>

              <div className="flex-1 lg:flex-none">
                <div className="text-amber-200 font-bold tracking-widest uppercase mb-4">
                  Address
                </div>

                <nav className="flex flex-col gap-4">
                  <div>
                    <p
                      className="text-gray-300 font-bold hover:text-green-400 active:text-gray-600 transition duration-100"
                    >
                      UK Office
                    </p>
                    <p className="text-gray-300 hover:text-green-400 active:text-gray-600 transition duration-100">
                      #33 Cleverland road, London UK DA16 3JP
                    </p>
                  </div>

                  <div>
                    <p
                      className="text-gray-300 font-bold hover:text-green-400 active:text-gray-600 transition duration-100"
                    >
                      India Office
                    </p>
                    <p className="text-gray-300 hover:text-green-400 active:text-gray-600 transition duration-100">
                      #27 Opp to IBM Office Bannergatta road, Banglore 27
                    </p>
                  </div>
                </nav>
              </div>
              </div>
            </div>

            <div className="text-green-400 text-lg font-medium text-center border-t border-green-800 py-8">
              © Viztech Systems. All rights reserved.
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

export default Footer;
