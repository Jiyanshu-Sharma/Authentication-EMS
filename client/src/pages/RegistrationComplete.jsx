import { BsFillPersonFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import RegistrationImg from "../assets/images/Registration.jpeg"
function RegistrationComplete ()
{
    return (
        <>
        
        <div className="flex min-h-screen ">
        <div
        style={{backgroundImage:`url(${RegistrationImg})`}}
        className="w-2/3 bg-cover bg-no-repeat bg-center"
        ></div>



        <div className="w-1/3 p-5 flex items-center bg-white">
          <div className="w-full p-4 flex flex-col">
            <h1 className="text-5xl text-center font-extrabold">
            Thanks for <br />
Registering !!
            </h1>
            <p className="text-center mt-5 text-slate-600">We have submitted your request,
We will reach you out soon </p>
           <Link className="mt-5 mx-auto bg-green-700 text-white p-2 rounded-lg text-sm" to='./Exam'>Go to Dashboard</Link>
           </div>
        </div>
    
        </div>
        </>
    )
}
export default RegistrationComplete