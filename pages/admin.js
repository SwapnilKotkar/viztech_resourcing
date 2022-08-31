import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import toast from "react-hot-toast";

import SubMenu from "../components/SubMenu";
import { View } from "../components/View";


const Admin = ({ resumeData }) => {

  const router = useRouter();

  useEffect(() => {
    const tokenData = localStorage.getItem("signin_token");
    if (!tokenData) {
      // router.push('/') 
      window.location.replace('/')
    }  
  }, [])



  return (
    <>
      <SubMenu/>
      <View resumeData={resumeData} />
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

  // Pass data to the page via props
  return { props: { resumeData } };
}

export default Admin;
