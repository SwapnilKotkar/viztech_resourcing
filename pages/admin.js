import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import toast from "react-hot-toast";

import SubMenu from "../components/SubMenu";
import { useViewContext } from "../context/viewContext";
import { View } from "../components/View";

const CryptoJS = require("crypto-js");



const Admin = ({ resumeData, adminData }) => {

  // let bytes = CryptoJS.AES.decrypt(adminData.password, process.env.CRYPTO_SECRET_KEY);
  // let decryptedPass = bytes.toString(CryptoJS.enc.Utf8)

  const router = useRouter();
  const [token, setToken] = useState();
  // const [view, setview] = useState("");
console.log('token on-------',token)

  const getAdmin = async() => {
    const res = await fetch("/api/admin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({token}), 
    });

    const data = await res.json()

    // let bytes = CryptoJS.AES.decrypt(data.password, 'fTjWnZr4u7x!A%D*G-KaPdSgVkXp2s5v');
    // let decryptedPass = bytes.toString(CryptoJS.enc.Utf8);

    // setUpdateInfo({...updateInfo, firstName:data.firstName, lastName:data.lastName, email:data.email})
    // setUpdatePass({...updatePass, password:decryptedPass});

  }

  useEffect(() => {
    const tokenData = localStorage.getItem("signin_token");
    setToken(tokenData);
    if (!tokenData) {
      // router.push('/') 
      window.location.replace("/");
    } 

    getAdmin();
  }, [])

  return (
    <>
      <SubMenu/>
      <View tokenValue={token} resumeData={resumeData}/>
    </>
  )
};




{
  /* p-4 -mb-px border-b border-current text-cyan-500 */
}

export async function getServerSideProps() {
  // Fetch data from external API
  const resuemResponse = await fetch("http://localhost:3000/api/resumes");
  const resumeData = await resuemResponse.json();

  // const adminResponse = await fetch('http://localhost:3000/api/admin');
  // const adminData = await adminResponse.json()
  const adminData = null;

  // Pass data to the page via props
  return { props: { resumeData, adminData } };
}

export default Admin;
