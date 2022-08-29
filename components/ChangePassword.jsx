import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import toast from "react-hot-toast";

const ChangePassword = ({ tokenValue }) => {
  const router = useRouter();
  const [token, setToken] = useState(tokenValue);
  const [showPass, setShowPass] = useState(false);

  const [updatePass, setUpdatePass] = useState({
    password: "",
    confirm_password: "",
  });

  const handlePassChange = (event) => {
    const { name, value } = event.target;
    setUpdatePass({ ...updatePass, [name]: value });
  };

  const handlePassSubmit = async (e) => {
    e.preventDefault();
    const { password, confirm_password } = updatePass;
    if (password == confirm_password) {
      const res = await fetch("/api/updatepassword", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token, password }),
      });
      if (res.status === 200) {
        toast.success("updated successfully!");
      } else {
        toast.error("update failed!");
      }
      setUpdatePass({ ...updatePass, confirm_password: "" });
    } else {
      toast.error("password not matched!");
    }
  };

  return (
    <div className="py-2 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mt-10 sm:mt-5 py-4">
          <div className="md:grid md:grid-cols-3 md:gap-6">
            <div className="md:col-span-1">
              <div className="px-4 sm:px-0">
                <h3 className="text-lg font-medium leading-6 text-gray-900">
                  Change admin password
                </h3>
              </div>
            </div>
            <div className="mt-5 md:mt-0 md:col-span-2">
              <form onSubmit={handlePassSubmit} method="POST">
                <div className="shadow overflow-hidden sm:rounded-md">
                  <div className="px-4 py-5 bg-white sm:p-6">
                    <button
                      type="button"
                      className="group relative w-1/2 md:w-1/3 flex justify-center mb-2 py-2 px-4 border border-indigo-200 text-sm font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-white-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white-500"
                      onClick={() => setShowPass((showPass) => !showPass)}
                    >
                      Show password
                    </button>
                    <div className="grid grid-cols-6 gap-6">
                      <div className="col-span-6 sm:col-span-4">
                        <label
                          htmlFor="password"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Password
                        </label>
                        <input
                          type={showPass ? "text" : "password"}
                          name="password"
                          id="password"
                          value={updatePass.password}
                          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                          onChange={handlePassChange}
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-4">
                        <label
                          htmlFor="confirm_password"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Confirm password
                        </label>
                        <input
                          type="text"
                          name="confirm_password"
                          id="confirm_password"
                          value={updatePass.confirm_password}
                          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                          onChange={handlePassChange}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                    <button
                      type="submit"
                      className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Update password
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;
