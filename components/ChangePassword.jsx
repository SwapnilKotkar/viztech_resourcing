import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const CryptoJS = require("crypto-js");
import { useLoginContext } from "../context/LoginContext";

const ChangePassword = () => {

  const { tokenValue } = useLoginContext();

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
        body: JSON.stringify({ token, password })
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

  useEffect(() => {
    const getAdmin = async () => {
      const res = await fetch("/api/admin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token }),
      });

      const data = await res.json();

      let bytes = CryptoJS.AES.decrypt(
        data.password,
        process.env.CRYPTO_SECRET_KEY
      );
      let decryptedPass = bytes.toString(CryptoJS.enc.Utf8);

      setUpdatePass({ ...updatePass, password: decryptedPass });
    };

    getAdmin();
  }, []);

  return (
    <>
      <section className="bg-gray-100">
        <div className="max-w-screen-xl px-4 py-12 mx-auto sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-y-8 ">
            <div className="py-4 lg:py-0 lg:col-span-2">
              {/* <p className="max-w-xl text-lg">
              Talk to the right people. Hire the right people.
            </p> */}

              <div className="flex justify-center">
                <a href="" className="text-2xl font-bold text-emerald-900">
                  Update your password
                </a>

                {/* <address className="mt-2 not-italic">
                282 Lorem ipsum, dolor sit amet, CA 58517
              </address> */}
              </div>
            </div>

            <div className="p-8 bg-white rounded-lg shadow-lg lg:p-12 lg:col-span-3">
              <form
                method="POST"
                onSubmit={handlePassSubmit}
                className="space-y-4"
              >
                <button
                  type="button"
                  className="group relative w-1/2 md:w-1/4 flex justify-center mb-2 py-2 px-4 border border-emerald-200 text-sm font-medium rounded text-emerald-900 bg-emerald-50 hover:bg-white-700 focus:outline-none focus:border-emerald-900"
                  onClick={() => setShowPass((showPass) => !showPass)}
                >
                  Show password
                </button>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="sr-only" htmlFor="firstname">
                      Password
                    </label>
                    <input
                      className="w-full p-3 text-sm border-gray-200 rounded-lg focus:ring-0"
                      placeholder="password"
                      type={showPass ? "text" : "password"}
                      id="pass"
                      name="password"
                      value={updatePass.password}
                      onChange={handlePassChange}
                      required
                    />
                  </div>

                  <div>
                    <label className="sr-only" htmlFor="lastname">
                      Confirm password
                    </label>
                    <input
                      className="w-full p-3 text-sm border-gray-200 rounded-lg focus:ring-0"
                      placeholder="confirm password"
                      type={showPass ? "text" : "password"}
                      id="confirmpass"
                      name="confirm_password"
                      value={updatePass.confirm_password}
                      onChange={handlePassChange}
                      required
                    />
                  </div>
                </div>
                <div></div>

                <div className="mt-4">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center w-full px-5 py-3 text-white text-sm border bg-emerald-900 border-emerald-900 rounded hover:bg-transparent hover:text-emerald-600 active:text-emerald-500 rounded sm:w-auto"
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

export default ChangePassword;
