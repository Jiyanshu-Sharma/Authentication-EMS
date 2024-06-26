import { BsFillPersonFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import loginImg from "../assets/images/login.jpeg"
function Login ()
{
    return (
        <>
        
        <div className="flex min-h-screen ">
        <div className="w-1/3 p-5 flex items-center bg-white">
          <div className="w-full p-4">
            <h1 className="text-2xl">Login</h1>
            <form action="./OTPverification">
              <div className="relative my-5 border-2 rounded-xl overflow-hidden">
                <BsFillPersonFill className="absolute top-1/2 left-2 translate-y-[-50%] text-2xl" />
                <input
                  className="rounded-xl w-full px-4 pl-10 py-2"
                  type="text"
                  placeholder="Username"
                />
              </div>
              <div className="relative my-5  border-2 rounded-xl ">
                <BsFillPersonFill className="absolute top-1/2 left-2 translate-y-[-50%] text-2xl" />
                <input
                  className="rounded-xl w-full px-4 pl-10 py-2"
                  type="password"
                  placeholder="Password"
                />
              </div>
              <div className="relative my-5 bg-blue-600 rounded-lg text-white">
                <input
                  className="rounded-xl w-full px-4 pl-10 py-2"
                  type="submit"
                  />
              </div>
            </form>
            <Link to="/Registration" className="bg-blue-600 w-full px-4 rounded-lg py-2 text-white">
                Sign-Up
              </Link>
          </div>
        </div>
        <div
        style={{backgroundImage:`url(${loginImg})`}}
        className="w-2/3 bg-cover bg-no-repeat bg-center"
        ></div>

        </div>
        </>
    )
}
export default Login