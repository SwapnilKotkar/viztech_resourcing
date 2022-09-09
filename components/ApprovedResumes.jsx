import React, { useState, useEffect } from "react";
import Link from "next/link";
import toast from "react-hot-toast";
import { UserCircleIcon } from "@heroicons/react/20/solid";
import { BsFillTrashFill } from "react-icons/bs";

const ApprovedResumes = () => {
  const [resumesList, setResumesList] = useState();

  const handleReject = async (uniqueID) => {
    toast.loading("Removing resume...");

    const res = await fetch("/api/approvedresumes", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ uniqueID }),
    });

    if (res.status === 200) {
      toast.remove();
      toast.success("Resume removed");
    } else {
      toast.remove();
      toast.error("Try again");
    }
  };

  useEffect(() => {
    async function fetchResume() {
      const resuemResponse = await fetch("/api/approvedresumes");
      const resumeData = await resuemResponse.json();
      setResumesList(resumeData);
    }
    fetchResume();
  }, []);

  return (
    <>
      <div className="pt-3 pb-10 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-4 lg:pt-4 lg:col-span-2">
            <div className="flex justify-center">
              <a href="" className="text-2xl font-bold text-emerald-900">
                Approved Resumes
              </a>
            </div>
          </div>
          <div className="overflow-x-auto relative shadow-md sm:rounded-lg my-4">
            <table className="w-full text-left text-gray-500">
              <thead className="text-sm md:text-lg text-white bg-emerald-700">
                <tr>
                  <th scope="col" className="py-3 px-6 font-semibold border-r">
                    Name
                  </th>
                  <th scope="col" className="py-3 px-6 font-semibold border-r">
                    Applying for
                  </th>
                  <th scope="col" className="py-3 px-6 font-semibold border-r">
                    Available from
                  </th>
                  <th scope="col" className="py-3 px-6 font-semibold border-r">
                    Comments
                  </th>
                  <th scope="col" className="py-3 px-6 font-semibold border-r">
                    Resume
                  </th>
                  <th scope="col" className="py-3 px-6 font-semibold border-r">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {resumesList?.map((resume) => (
                  <tr
                    key={resume._id}
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                  >
                    <th
                      scope="row"
                      className="flex items-center py-4 px-6 text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      <span>
                        <UserCircleIcon className="h-7 w-7 text-gray-700" />
                      </span>
                      <div className="pl-3">
                        <div className="text-base font-semibold">
                          {resume.fullName}
                        </div>
                        <div className="font-normal text-gray-500">
                          {resume.email}
                        </div>
                      </div>
                    </th>
                    <td className="py-4 px-6">{resume.applyFor}</td>
                    <td className="py-4 px-6">{resume.joinFrom}</td>
                    <td className="py-4 px-6">{resume.comments}</td>
                    <td className="py-4 px-6">
                      <Link href={resume.resumeURL}>
                        <a
                          className="font-medium text-blue-500 hover:underline md:mx-1 my-1"
                          target="_blank"
                        >
                          View resume
                        </a>
                      </Link>
                    </td>
                    <td className="py-4 px-6">
                      <button
                        type="button"
                        onClick={() => handleReject(resume.uniqueID)}
                        className="text-xl text-red-500 md:ml-3 my-1"
                      >
                        <BsFillTrashFill />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default ApprovedResumes;
