import React from 'react'
import AdminInfo from "../components/AdminInfo";
import ChangePassword from "../components/ChangePassword";
import ViewResumes from "../components/ViewResumes";
import { useViewContext } from "../context/viewContext";

export const View = ({tokenValue, resumeData}) => {
  const {view} = useViewContext();

    switch (view) {
        case "resumesView":
          return (
            <>
              <ViewResumes resumes={resumeData} />
            </>
          );
    
        case "changePassView":
          return (
            <>
              <ChangePassword />
            </>
          );
    
        case "adminInfoView":
          return (
            <>
              <AdminInfo />

            </>
          );
    
          default:
          return (
            <>
              <ViewResumes resumes={resumeData} />
            </>
          );
      }
}

// resumesView
