import React, { useEffect } from "react";
import { useRouter } from "next/router";
import SubMenu from "../components/SubMenu";
import { View } from "../components/View";

const Admin = () => {
  const router = useRouter();
  useEffect(() => {
    const tokenData = localStorage.getItem("signin_token");
    if (!tokenData) {
      router.push('/')
    }
  }, []);

  return (
    <>
      <SubMenu />
      <View />
    </>
  );
};

export default Admin;
