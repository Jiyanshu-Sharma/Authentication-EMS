import Exams from "../data/exam";
import { Link } from "react-router-dom";
function Home() {
  return (
    <>
      <div className="p-5">
        <h1>Upcoming Exams</h1>
        <hr />
        <div className="grid grid-cols-3 gap-3 p-5">
        {Exams.map((Exam,index)=>(
           <div key={index} className="border rounded-lg overflow-hidden shadow-lg hover:shadow-xl cursor-pointer hover:translate-y-[-.3em] duration-200">
            <div className="bg-[#ecf5fe]">
              <img src={Exam.icon} className="h-32 mx-auto" alt="" />
            </div>
            <div className="px-4 py-2 relative">
              <table className="text-sm text-left">
                <tr>
                  <th>Date</th>
                  <th className="w-3">:</th>
                  <td>{Exam.date}</td>
                </tr>
                <tr>
                  <th>Time</th>
                  <th className="w-3">:</th>
                  <td>{Exam.time}</td>
                </tr>
                <tr>
                  <th>Subject</th>
                  <th className="w-3">:</th>
                  <td>{Exam.subject}</td>
                </tr>
                <tr>
                  <th>Duration</th>
                  <th className="w-3">:</th>
                  <td>{Exam.Duration}</td>
                </tr>
              </table>
              <Link className="absolute text-[.8em] right-5 bottom-3 shadow-lg bg-sky-600 text-white rounded-lg p-1" to=''>Start Exam</Link>
            </div>
           </div>
        ))}
        </div>
      </div> 
    </>
  );
}
export default Home;
