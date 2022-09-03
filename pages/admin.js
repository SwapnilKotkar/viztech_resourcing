import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

import SubMenu from "../components/SubMenu";
import { View } from "../components/View";

const Admin = () => { //{ resumeData }
  const router = useRouter();
  const [resumes, setResumes] = useState()

  useEffect(() => {
    const tokenData = localStorage.getItem("signin_token");
    if (!tokenData) {
      // router.push('/')
      window.location.replace("/");
    }

    async function fetchResume() {
      const resuemResponse = await fetch("/api/resumes");
      const resumeData = await resuemResponse.json();
      setResumes(resumeData)
    }
    fetchResume();
  }, []);

  return (
    <>
      <SubMenu />
      <View resumeData={resumes} />
    </>
  );
};

export default Admin;
