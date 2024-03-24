import { BsFillPersonFill, BsMailbox, BsOption } from "react-icons/bs";
import { Link } from "react-router-dom";
import RegistrationImg from "../assets/images/Registration.jpeg";

function Registration ()
{
    return (
        <>
        
        <div className="flex min-h-screen ">
        <div
        style={{backgroundImage:`url(${RegistrationImg})`}}
        className="w-2/3 bg-cover bg-no-repeat bg-center"
        ></div>
        <div className="w-1/3 p-5 flex items-center bg-white">
          <div className="w-full p-4">
            <h1 className="text-2xl">REGISTRATION</h1>
            <form action="">
              <div className="relative my-5 border-2 rounded-xl overflow-hidden">
                <BsFillPersonFill className="absolute top-1/2 left-2 translate-y-[-50%] text-2xl" />
                <input
                  className="rounded-xl w-full px-4 pl-10 py-2 "
                  type="text"
                  placeholder="Full Name"
                />
              </div>
              <div className="relative my-5  border-2 rounded-xl ">
                <BsOption className="absolute top-1/2 left-2 translate-y-[-50%] text-2xl" />
                <select
                  className="rounded-xl w-full px-4 pl-10 py-2 "
                  type="text"
                  placeholder="Role"
                >
                    <option value="student">Student</option>
                    <option value="faculty">Faculty</option>
                    </select>
              </div>
              <div className="relative my-5  border-2 rounded-xl ">
                <BsMailbox className="absolute top-1/2 left-2 translate-y-[-50%] text-2xl" />
                <input
                  className="rounded-xl w-full px-4 pl-10 py-2 "
                  type="email"
                  placeholder="Your Email"
                />
              </div>
              <div className="relative my-5 bg-blue-600 rounded-lg text-white">
                <input
                  className="rounded-xl w-full px-4 pl-10 py-2 "
                  type="submit"
                  />
              </div>
            </form>
            <div className="flex items-center gap-3">

            <Link to="/Login" className="border-2 w-full text-[.7em] px-4 rounded-lg py-2">
                Login
              </Link>

            <Link to="/Login" className="border-2 w-full text-[.7em] px-4 rounded-lg py-2 flex items-center gap-2">
              <img src="https://www.shareicon.net/data/2016/07/10/119930_google_512x512.png" className="w-4" alt="" />
                Sign up with Google
              </Link>
            </div>
          </div>
        </div>
    
        </div>
        </>
    )
}
export default Registration