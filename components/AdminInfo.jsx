import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useLoginContext } from "../context/LoginContext";


//{ tokenValue }
const AdminInfo = () => {

  const { tokenValue } = useLoginContext();
  
  const [token, setToken] = useState(tokenValue);

  const [updateInfo, setUpdateInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const handleInfoChange = (event) => {
    const { name, value } = event.target;
    setUpdateInfo({ ...updateInfo, [name]: value });
  };

  const handleUpdateSubmit = async (e) => {
    e.preventDefault();

    const { firstName, lastName, email } = updateInfo;

    const res = await fetch("/api/admin", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ firstName, lastName, email }),
    });

    if (res.status === 200) {
      toast.success("updated successfully!");
    } else {
      toast.error("update failed!");
    }
  };

  useEffect(() => {

    const getAdmin = async() => {
      const res = await fetch("/api/admin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({token}), 
      });
  
      const data = await res.json()
      setUpdateInfo({...updateInfo, firstName: data.firstName, lastName: data.lastName, email:data.email})  
    }

    getAdmin();

  }, [])
  

  return (
    <>
  
    <section className="bg-gray-100">
      <div className="max-w-screen-xl px-4 py-12 mx-auto sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-y-8 ">
          <div className="py-4 lg:py-0 lg:col-span-2">

            <div className="flex justify-center">
              <a href="" className="text-2xl font-bold text-gray-900">
                Update admin information
              </a>
            </div>
          </div>

          <div className="p-8 bg-white rounded-lg shadow-lg lg:p-12 lg:col-span-3">
            <form method="POST" onSubmit={handleUpdateSubmit} className="space-y-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                <label className="sr-only" htmlFor="firstname">
                  first name
                </label>
                <input
                  className="w-full p-3 text-sm border-gray-200 rounded-lg"
                  placeholder="Firstname"
                  type="text"
                  id="firstname"
                  name="firstName"
                  value={updateInfo.firstName}
                  onChange={handleInfoChange}
                  required
                />
                </div>

                <div>
                <label className="sr-only" htmlFor="lastname">
                  Lastname
                </label>
                <input
                  className="w-full p-3 text-sm border-gray-200 rounded-lg"
                  placeholder="Lastname"
                  type="text"
                  id="lastname"
                  name="lastName"
                  value={updateInfo.lastName}
                  onChange={handleInfoChange}
                  required
                />
                </div>
              </div>
              <div>
              </div>
              <div>
                <label className="sr-only" htmlFor="email">
                  Email
                </label>
                <input
                  className="w-full p-3 text-sm border-gray-200 rounded-lg bg-gray-100 cursor-not-allowed"
                  placeholder="Email address"
                  type="email"
                  id="email"
                  name="email"
                  value={updateInfo.email}
                  onChange={handleInfoChange}
                  disabled
                />
              </div>
              <div className="mt-4">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center w-full px-5 py-3 text-white text-sm border bg-gray-900 border-gray-900 rounded hover:bg-transparent hover:text-gray-600 active:text-gray-500 rounded sm:w-auto"
                >
                  <span className="font-medium"> Update </span>

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
    </>
  );
};

export default AdminInfo;
