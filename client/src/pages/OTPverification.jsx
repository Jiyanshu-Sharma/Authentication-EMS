import { BsFileEarmarkLock2Fill } from "react-icons/bs";
import { Link } from "react-router-dom";
import RegistrationImg from "../assets/images/Registration.jpeg";
function OTPverification() {
  return (
    <>
      <div className="flex min-h-screen ">
        <div
          style={{ backgroundImage: `url(${RegistrationImg})` }}
          className="w-2/3 bg-cover bg-no-repeat bg-center"
        ></div>

        <div className="w-1/3 p-5 flex items-center bg-white">
          <div className="w-full p-4">
           <form action="./RegistrationComplete" className="flex flex-col gap-3">
            <div className="w-32 h-32 bg-blue-900 flex items-center justify-center rounded-full mx-auto">
           <BsFileEarmarkLock2Fill className="text-6xl text-white mx-auto" />
            </div>
           <h1 className="text-2xl text-center">Fill in the Code</h1>
           <p className="text-sm text-center">OTP has been sent to your email</p>
           <div className="grid grid-cols-6 gap-4">
            <input type="number" className="p-2 text-center text-2xl bg-slate-400 rounded-lg" value={0}/>
            <input type="number" className="p-2 text-center text-2xl bg-slate-400 rounded-lg" value={0}/>
            <input type="number" className="p-2 text-center text-2xl bg-slate-400 rounded-lg" value={0}/>
            <input type="number" className="p-2 text-center text-2xl bg-slate-400 rounded-lg" value={0}/>
            <input type="number" className="p-2 text-center text-2xl bg-slate-400 rounded-lg" value={0}/>
            <input type="number" className="p-2 text-center text-2xl bg-slate-400 rounded-lg" value={0}/>
           </div>
           <input type="submit" className="p-4 bg-blue-600 rounded-lg" value={"Verify OTP"} name="Submit" />
           </form>
          </div>
        </div>
      </div>
    </>
  );
}
export default OTPverification;
