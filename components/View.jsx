import React from 'react'
import AdminInfo from "../components/AdminInfo";
import ChangePassword from "../components/ChangePassword";
import ViewResumes from "../components/ViewResumes";
import { useViewContext } from "../context/viewContext";

export const View = ({tokenValue, resumeData}) => {
  const {view} = useViewContext();

    switch (view) {
        case "adminInfoView":
          return (
            <>
              <AdminInfo tokenValue={tokenValue} />
            </>
          );
    
        case "changePassView":
          return (
            <>
              <ChangePassword tokenValue={tokenValue} />
            </>
          );
    
        case "resumesView":
          return (
            <>
              <ViewResumes resumes={resumeData} />
            </>
          );
    
          default:
          return (
            <>
              <AdminInfo tokenValue={tokenValue} />
            </>
          );
      }
}
