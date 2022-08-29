import React from "react";
import Link from "next/link";
import { useViewContext } from "../context/viewContext";

const SubMenu = () => {
  const { handleView } = useViewContext();
  
  const menuItems = [
    {
      id: "adminInfoView",
      name: "Admin info",
      link: "",
    },
    {
      id: "changePassView",
      name: "change password",
      link: "",
    },
    {
      id: "resumesView",
      name: "View resumes",
      link: "",
    },
  ];
  return (
    <div className="py-2 border-b border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex justify-between md:justify-start text-md font-medium border-gray-100">
          {menuItems.map((item) => (
            <Link
              href={item.link}
              key={item.name}
            >
              <a className="p-4 -mb-px border-transparent hover:text-indigo-500 hover:border-current" onClick={() => handleView(item.id)} >
                {item.name}
              </a>
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default SubMenu;
