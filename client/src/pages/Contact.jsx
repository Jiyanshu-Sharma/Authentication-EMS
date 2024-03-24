import { Link } from "react-router-dom";
import {BiSolidContact} from "react-icons/bi"
import faculty from "../data/faculty";
function Contact() {
  return (
    <>
      <div className="p-5">
        <h1 className="text-2xl flex items-center gap-3"><BiSolidContact />Contact Us</h1>
        <hr />
        <div className="grid grid-cols-3 gap-3 p-5">
        {faculty.map((faculty,index)=>(
            <div className="p-5 border flex items-center rounded-lg shadow-lg duration-300 cursor-pointer hover:shadow-2xl hover:translate-y-[-.5em]">
                <div key={index} className="w-20 h-20 rounded-full shadow-lg">
                <img src={faculty.icon} alt="" />
                </div>
                <div className="p-2 flex flex-col">
                    <h2 className="font-bold">{faculty.name}</h2>
                    <p className="text-sm">{faculty.position}</p>
                    <div className="mt-2 flex gap-2">
                    <Link className="text-sm rounded-md bg-sky-700 hover:bg-sky-800 text-white p-1 " to={faculty.linkedin}>LinkedIn</Link>
                    <Link className="text-sm rounded-md bg-slate-700 hover:bg-black text-white p-1" to={faculty.twitter}>Twitter</Link>
                    </div>
                </div>
            </div>
        ))}
        </div>
      </div>
    </>
  );
}
export default Contact;
