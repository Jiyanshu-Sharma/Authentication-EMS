import { useState } from "react";
import { BsFillPersonFill, BsMailbox, BsOption } from "react-icons/bs";
import { Link , useNavigate} from "react-router-dom";
import RegistrationImg from "../assets/images/Registration.jpeg";
import axios from 'axios';
function Registration() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: 'Student',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
 

  const handleSubmit = async (e) => {
    
    e.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:4000/auth/registerrequest', formData);
      console.log(response.data);
      navigate("/OTPverification");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="flex min-h-screen ">
        <div
          style={{ backgroundImage: `url(${RegistrationImg})` }}
          className="w-2/3 bg-cover bg-no-repeat bg-center"
        ></div>
        <div className="w-1/3 p-5 flex items-center bg-white">
          <div className="w-full p-4">
            <h1 className="text-2xl">REGISTRATION</h1>
            <form onSubmit={handleSubmit}>
              <div className="relative my-5 border-2 rounded-xl overflow-hidden">
                <BsFillPersonFill className="absolute top-1/2 left-2 translate-y-[-50%] text-2xl" />
                <input
                  className="rounded-xl w-full px-4 pl-10 py-2"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Full Name"
                  required
                />
              </div>
              <div className="relative my-5  border-2 rounded-xl ">
                <BsOption className="absolute top-1/2 left-2 translate-y-[-50%] text-2xl" />
                <select
                  className="rounded-xl w-full px-4 pl-10 py-2"
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  placeholder="Role"
                  required
                >
                  <option value="student">Student</option>
                  <option value="faculty">Faculty</option>
                </select>
              </div>
              <div className="relative my-5  border-2 rounded-xl ">
                <BsMailbox className="absolute top-1/2 left-2 translate-y-[-50%] text-2xl" />
                <input
                  className="rounded-xl w-full px-4 pl-10 py-2"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                />
              </div>
              <div className="relative my-5 bg-blue-600 rounded-lg text-white">
                <input
                  className="rounded-xl w-full px-4 pl-10 py-2"
                  type="submit"
                />
              </div>
            </form>
            <div className="flex items-center gap-3">
              <Link to="/Login" className="border-2 w-full text-[.7em] px-4 rounded-lg py-2">
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Registration;
