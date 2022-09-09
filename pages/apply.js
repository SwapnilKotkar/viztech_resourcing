import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";
import S3 from 'react-aws-s3';

const Apply = () => {
  const uniqueID = new Date().getTime()

  const date = new Date().toISOString().slice(0, 10);

  const [fileStatus, setFileStatus] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "", 
    email: "",
    joinFrom: date,
    resumeURL: "",
    applyFor: "",
    comments: "No comments",
  });

  const config = {
    bucketName: process.env.AWS_BUCKET_NAME,
    region: process.env.AWS_BUCKET_REGION,
    accessKeyId: process.env.AWS_ACCESS_KEY_NAME,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY_NAME,
}

  const handleFileChange = async (event) => {
    toast.loading('Uploading file...')

    const file = event.target.files[0];
    const fileKey = (uniqueID + "-" + file.name)

    try {
      
      const ReactS3Client = new S3(config);
      const fileUpload = await ReactS3Client.uploadFile(file, fileKey)
      setFormData({...formData, resumeURL: fileUpload.location})
      toast.remove()
      toast.success('File Uploaded')
      setFileStatus(true);

    } catch (error) {

      toast.remove()
      toast.error('File Upload failed')
      console.error(error)
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    toast.loading('Submitting resume...')

    const {
      fullName,
      email,
      joinFrom,
      applyFor,
      resumeURL,
      comments,
    } = formData;

    const res = await fetch("/api/resumes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        uniqueID,
        fullName,
        email,
        joinFrom,
        resumeURL,
        applyFor,
        comments,
      }),
    });

    if (res.status === 200) {
      toast.remove()
      toast.success("Resume Submitted");
      setInterval(() => {
        window.location.replace("/");
      }, 500);
    } else {
      toast.remove()
      toast.error("Upload failed");
      setFileStatus(false);
    }

    setFormData({
      fullName: "",
      email: "",
      joinFrom: date,
      resumeTitle: "",
      resumeURL: "",
      applyFor: "",
      qual: "",
      comments: "",
    });
  };

  return (
    <section className="bg-gray-100">
      <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
          <div className="lg:py-12 lg:col-span-2">
            <p className="max-w-xl text-lg">
              Talk to the right people. Hire the right people.
            </p>

            <div className="mt-8">
              <a href="" className="text-2xl font-bold text-pink-600">
                0151 475 4450
              </a>

              <address className="mt-2 not-italic">
                282 Lorem ipsum, dolor sit amet, CA 58517
              </address>
            </div>
          </div>

          <div className="p-8 bg-white rounded-lg shadow-lg lg:p-12 lg:col-span-3">
            <form method="POST" onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-sm font-medium text-gray-600" htmlFor="name">
                  Your full name
                  <span className="text-red-500 font-bold">*</span>
                </label>
                <input
                  className="w-full p-3 text-sm border-gray-200 rounded-lg"
                  placeholder=""
                  type="text"
                  id="name"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="text-sm font-medium text-gray-600" htmlFor="email">
                    Email
                    <span className="text-red-500 font-bold">*</span>
                  </label>
                  <input
                    className="w-full p-3 text-sm border-gray-200 rounded-lg"
                    placeholder=""
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-600" htmlFor="phone">
                    Available to join from
                  </label>
                  <input
                    className="w-full p-3 text-sm text-gray-500 border-gray-200 rounded-lg"
                    placeholder=""
                    type="date"
                    id="joinfrom"
                    name="joinFrom"
                    value={formData.joinFrom}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="text-sm font-medium text-gray-600" htmlFor="jobtitle">
                    Applying for
                    <span className="text-red-500 font-bold">*</span>
                  </label>
                  <input
                    className="w-full p-3 text-sm border-gray-200 rounded-lg"
                    placeholder=""
                    type="text"
                    id="job-title"
                    name="applyFor"
                    value={formData.applyFor}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-600" htmlFor="name">
                  Comments
                </label>
                <input
                  className="w-full p-3 text-sm border-gray-200 rounded-lg"
                  placeholder=""
                  type="text"
                  id="comments"
                  name="comments"
                  value={formData.comments}
                  onChange={handleChange}
                />
              </div>
                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                  {fileStatus && (
                    <div className="space-y-1 text-center">
                      <div className="flex text-sm justify-center text-gray-600">
                        <span className="relative bg-white rounded-md font-medium text-green-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                          <span className="text-green-500">
                            File uploaded succesfully
                          </span>
                        </span>
                      </div>
                    </div>
                  )}
                  {!fileStatus && (
                    <div className="space-y-1 text-center">
                      <svg
                        className="mx-auto h-12 w-12 text-gray-400"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 48 48"
                        aria-hidden="true"
                      >
                        <path
                          d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <div className="flex text-sm justify-center text-gray-600">
                        <label
                          htmlFor="file-upload"
                          className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                        >
                          <span>Upload a file</span>
                          <span className="text-red-500 font-bold">*</span>
                          <input
                            id="file-upload"
                            name="resumeTitle"
                            type="file"
                            className="sr-only"
                            accept="application/pdf"
                            onChange={handleFileChange}
                            required
                          />
                        </label>
                      </div>
                      <p className="text-xs text-gray-500">
                        only pdf of max size 5MB
                      </p>
                    </div>
                  )}
                </div>
              <div className="mt-4">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center w-full px-5 py-3 text-white border bg-emerald-900 border-emerald-900 rounded hover:bg-transparent hover:text-emerald-600 active:text-emerald-500 rounded sm:w-auto"
                >
                  <span className="font-medium"> Submit resume </span>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 ml-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Apply;