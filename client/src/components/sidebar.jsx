import React from "react";
import { Link } from "react-router-dom"

function Sidebar() {
  return (
    <>
      <div className="w-80 p-5 border shadow-xl relative ">
        <div className="w-36 h-36 mx-auto border rounded-full ring-8 overflow-hidden">
          <img
            src="https://assets.leetcode.com/users/Jiyanshu_Sharma/avatar_1709882310.png"
            alt=""
          />
        </div>
        <ul className="mt-5 p-2">
            <li className="mt-2 p-1 flex relative border-b-2 border-black after:absolute after:content after:bottom-[-5px] after:right-0 after:h-[8px] after:bg-black after:rotate-45 after:w-[8px]"><Link className="p-2 w-full hover:bg-blue-500 rounded-lg hover:text-white" to="/Exam">Home</Link></li>
            <li className="mt-2 p-1 flex relative border-b-2 border-black after:absolute after:content after:bottom-[-5px] after:right-0 after:h-[8px] after:bg-black after:rotate-45 after:w-[8px]"><Link className="p-2 w-full hover:bg-blue-500 rounded-lg hover:text-white" to="/ExamHistory">Exam History</Link></li>
            <li className="mt-2 p-1 flex relative border-b-2 border-black after:absolute after:content after:bottom-[-5px] after:right-0 after:h-[8px] after:bg-black after:rotate-45 after:w-[8px]"><Link className="p-2 w-full hover:bg-blue-500 rounded-lg hover:text-white" to="/Settings">Settings</Link></li>
            <li className="mt-2 p-1 flex relative border-b-2 border-black after:absolute after:content after:bottom-[-5px] after:right-0 after:h-[8px] after:bg-black after:rotate-45 after:w-[8px]"><Link className="p-2 w-full hover:bg-blue-500 rounded-lg hover:text-white" to="/Contact">Contact</Link></li>
            <li className="mt-2 p-1 flex relative border-b-2 border-black after:absolute after:content after:bottom-[-5px] after:right-0 after:h-[8px] after:bg-black after:rotate-45 after:w-[8px]"><Link className="p-2 w-full bg-slate-300 rounded-lg" to="/Logout">Logout</Link></li>
        </ul>
      </div>
    </>
  );
}
export default Sidebar;
