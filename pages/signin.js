import React, { useState, useEffect } from "react";
import toast from 'react-hot-toast';
import { useRouter } from "next/router";
import { AtSymbolIcon, EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";

const Signin = () => {
  const router = useRouter();
  const [showPass, setShowPass] = useState(false);
  const [login, setLogin] = useState({
    email: "",
    password: "" 
 });

 const handleChange = (event) =>{
  const {name, value} = event.target;
  setLogin({...login, [name]: value});
}

  const handleSubmit = async (e) =>{
    e.preventDefault();

    toast.loading("Redirecting...");

    const {email, password} = login;

    const res = await fetch('/api/signin', {
        method: "POST",
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify({ email, password })
    });
    
    const data = await res.json();

    if(res.status === 200) {

      toast.remove();
      toast.success("Login Success!");

      localStorage.setItem('signin_token', data.token) 
      setTimeout(() => {
      router.push('/admin')
      }, 500);

    }else{
      toast.remove();
      toast.error("login failed")
    }
    setLogin({
      email: "",
      password: "" 
    });
  }

  useEffect( ()=>{
    if(localStorage.getItem('signin_token')){
      router.push('/admin')
    }
},[])

  return (
    <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
      <div className="max-w-lg mx-auto">
        <h1 className="text-2xl font-bold text-center text-emerald-900 sm:text-3xl">
          Welcome Back!
        </h1>

        <form
          method='POST'
          className="p-8 mt-6 mb-0 space-y-4 rounded-lg shadow-2xl"
          onSubmit={handleSubmit}
        >
          <p className="text-lg text-emerald-900 font-medium">Sign in to your account</p>

          <div>
            <label htmlFor="email" className="text-sm text-emerald-900 font-medium">
              Email
            </label>

            <div className="relative mt-1">
              <input
                type="email"
                id="email"
                name="email"
                className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                placeholder="Enter email"
                value={login.email}
                onChange={handleChange}
              />
              <span className="absolute inset-y-0 inline-flex items-center right-4">
                <div className="w-4 h-4 text-gray-500">
                  <AtSymbolIcon />
                </div>
              </span>
            </div>
          </div>

          <div>
            <label htmlFor="password" className="text-sm text-emerald-900 font-medium">
              Password
            </label>

            <div className="relative mt-1">
              <input
                type={showPass ? "text" : "password"}
                id="password"
                name="password"
                className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                placeholder="Enter password"
                autoComplete="off"
                value={login.password}
                onChange={handleChange}
              />

              <span className="absolute inset-y-0 inline-flex items-center right-4 cursor-pointer">
                <div
                  className="w-4 h-4 text-gray-500"
                  onClick={() => setShowPass((showPass) => !showPass)}
                >
                  {!showPass ? <EyeIcon /> : <EyeSlashIcon />}
                </div>
              </span>
            </div>
          </div>

          <button
            type="submit"
            className="block w-full px-5 py-3 text-sm font-medium text-white bg-emerald-900 rounded-lg"
          >
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signin;
