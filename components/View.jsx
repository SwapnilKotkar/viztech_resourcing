import React from 'react'
import AdminInfo from "../components/AdminInfo";
import ChangePassword from "../components/ChangePassword";
import ViewResumes from "../components/ViewResumes";
import ApprovedResumes from './ApprovedResumes';
import { useViewContext } from "../context/viewContext";

export const View = () => {
  const {view} = useViewContext();

    switch (view) {
        case "resumesView":
          return (
            <>
              <ViewResumes />
            </>
          );

        case "approvedResumes":
        return (
          <>
            <ApprovedResumes />
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
              <ViewResumes />
            </>
          );
      }
}

// resumesView
