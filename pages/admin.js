import React, { useEffect, useState } from "react";
import SubMenu from "../components/SubMenu";
import { View } from "../components/View";

const Admin = () => {
  const [resumes, setResumes] = useState()

  useEffect(() => {
    const tokenData = localStorage.getItem("signin_token");
    if (!tokenData) {
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
