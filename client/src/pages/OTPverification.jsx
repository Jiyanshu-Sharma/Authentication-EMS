import { BsFileEarmarkLock2Fill } from "react-icons/bs";
import RegistrationImg from "../assets/images/Registration.jpeg";
import { useState } from "react";
import axios from 'axios';

function OTPverification() {
  const [formData , setFormData] = useState({
    one :'',
    two:'',
    three:'',
    four:'',
    five:'',
    six:'',
  });

  const handleChange = (e)=>{
      const {name , value} = e.target;
      setFormData({
        ...formData,
        [name] :value
      }); 
  };
  const handleSubmit = async (e) =>{
    e.preventDefault();
    try {
      const otpData = Object.values(formData).join('');
      console.log(otpData);
      const response = await axios.post('http://127.0.0.1:4000/auth/verify', {otp:otpData});
      console.log(response.data);
      if(response.status  === 200){
          window.location.href='/dashboard';
      }
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <>
      <div className="flex min-h-screen ">
        <div
          style={{ backgroundImage: `url(${RegistrationImg})` }}
          className="w-2/3 bg-cover bg-no-repeat bg-center"
        ></div>

        <div className="w-1/3 p-5 flex items-center bg-white">
          <div className="w-full p-4">
           <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <div className="w-32 h-32 bg-blue-900 flex items-center justify-center rounded-full mx-auto">
           <BsFileEarmarkLock2Fill className="text-6xl text-white mx-auto" />
            </div>
           <h1 className="text-2xl text-center">Fill in the Code</h1>
           <p className="text-sm text-center">OTP has been sent to your email</p>
           <div className="grid grid-cols-6 gap-4">
            <input type="number" onChange = {handleChange} className="p-2 text-center text-2xl bg-slate-400 rounded-lg" name="one"/>
            <input type="number" onChange = {handleChange} className="p-2 text-center text-2xl bg-slate-400 rounded-lg"name="two" />
            <input type="number" onChange = {handleChange} className="p-2 text-center text-2xl bg-slate-400 rounded-lg" name="three"/>
            <input type="number" onChange = {handleChange} className="p-2 text-center text-2xl bg-slate-400 rounded-lg" name="four"/>
            <input type="number" onChange = {handleChange} className="p-2 text-center text-2xl bg-slate-400 rounded-lg" name="five"/>
            <input type="number" onChange = {handleChange} className="p-2 text-center text-2xl bg-slate-400 rounded-lg" name="six"/>
           </div>
           <input type="submit" className="p-4 bg-blue-600 rounded-lg" name="Submit" />
           </form>
          </div>
        </div>
      </div>
    </>
  );
}
export default OTPverification;
