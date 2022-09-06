import React, { useEffect, useState } from "react";
import SubMenu from "../components/SubMenu";
import { View } from "../components/View";

const Admin = () => {
  useEffect(() => {
    const tokenData = localStorage.getItem("signin_token");
    if (!tokenData) {
      window.location.replace("/");
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
