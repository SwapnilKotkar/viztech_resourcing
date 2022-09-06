import React, {useRef, useState, useEffect} from "react";
import Link from "next/link";
import toast from "react-hot-toast";
import { UserCircleIcon } from "@heroicons/react/20/solid";

const ViewResumes = () => {
  const [resumesList, setResumesList] = useState()
  const tableHeadders = ["Name", "Applying for", "Available from", "Comments", "Resume", "Action"]

  const handleApprove = async (resume) => {
    toast.loading('Approving resume...')

    const {uniqueID, fullName, email, joinFrom, resumeTitle, resumeURL, applyFor, comments} = resume;

    const res = await fetch("/api/approvedresumes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({uniqueID, fullName, email, joinFrom, resumeTitle, resumeURL, applyFor, comments}),
    });
    
    if (res.status === 200) {
      toast.remove()
      toast.success("Resume approved");
    } else {
      toast.remove()
      toast.error("Try again");
    }
  }

  const handleRemove = async (id) => {
    toast.loading('Removing resume...')

    const res = await fetch("/api/resumes", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({id}),
    });

    if (res.status === 200) {
      toast.remove()
      toast.success("Resume removed");
    } else {
      toast.remove()
      toast.error("Try again");
    }
  }

  useEffect(() => {
    async function fetchResume() {
      const resuemResponse = await fetch("/api/resumes");
      const resumeData = await resuemResponse.json();
      setResumesList(resumeData)
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
                Resumes
              </a>
            </div>
          </div>          
    <div className="overflow-x-auto relative shadow-md sm:rounded-lg my-4">
    {/* <div className="flex justify-between items-center pb-4 bg-white p-4">
        <div className="flex">
            <div className="px-2 relative">
            <button ref={refFilter} onClick={handleShow} id="dropdownFilterButton" data-dropdown-toggle="dropdownAction" className="inline-flex items-center text-gray-500 bg-white border border-gray-500 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
                <span className="sr-only">Action button</span>
                Filter by
                <svg className="ml-2 w-3 h-3" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </button>
            <div id="dropdownAction" className={show ? 'absolute z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow block' : 'absolute z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow hidden'} data-popper-reference-hidden="" data-popper-escaped="" data-popper-placement="bottom" style = {{position: "absolute", inset: "0px auto auto 0px", margin: "0px", transform: "translate(0px, 46px)"}}>
                <ul className="py-1 text-sm text-gray-700 border border-gray-300 rounded top-2" aria-labelledby="dropdownFilterButton">
                {
                  filterCategories.map((category, index) => (
                    <li key={index} className='cursor-pointer'>
                        <p onClick={()=>handleFilter(category)} className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">{category}</p>
                    </li>
                  ))
                }
                </ul>
            </div>
            </div>
        </div>
        <label htmlFor="table-search" className="sr-only">Search</label>
        <div className="relative">
            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
            </div>
            <input type="text" id="table-search-users" className="block p-2 pl-10 w-80 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search by" />
        </div>
    </div> */}
    <table className="w-full text-left text-gray-500">
        <thead className="text-sm md:text-lg text-white bg-emerald-700">
            <tr>
            {tableHeadders.map((item, index) => (
              <th key={index} scope="col" className="py-3 px-6 font-semibold border-r">
                    {item}
                </th>
            ))}
            </tr>
        </thead>
        <tbody className="text-sm">
        {
          resumesList?.map((resume) => (
            <tr key={resume._id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" className="flex items-center py-4 px-6 text-gray-900 whitespace-nowrap dark:text-white">
                    <span><UserCircleIcon className="h-7 w-7 text-gray-700" /></span>
                    <div className="pl-3">
                        <div className="text-base font-semibold">{resume.fullName}</div>
                        <div className="font-normal text-gray-500">{resume.email}</div>
                    </div>  
                </th>
                <td className="py-4 px-6">
                    {resume.applyFor}
                </td>
                <td className="py-4 px-6">
                    {resume.joinFrom}
                </td>
                <td className="py-4 px-6">
                    {resume.comments}
                </td>
                <td className="py-4 px-6">
                <Link href={resume.resumeURL}>
                <a className="font-medium text-blue-500 hover:underline md:mx-1 my-1" target="_blank">View resume</a>
                </Link>
                    
                </td>
                <td className="py-4 px-6">
                    <button type="button" onClick={()=>handleApprove(resume)} className="font-medium text-blue-600 border border-green-300 hover:bg-green-100 md:mr-1 my-1"><span className="text-green-500 px-2 py-1">Approve</span></button>
                    <button type="button" onClick={()=>handleRemove(resume.uniqueID)} className="font-medium text-blue-600 border border-red-300 hover:bg-red-100"><span className="text-red-400 px-2 py-1">Remove</span></button>
                </td>
            </tr>
          ))
        }
        </tbody>
    </table>         
          </div>     
        </div>
      </div>
    </>
  )};

export default ViewResumes;
