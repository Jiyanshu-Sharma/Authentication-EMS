import Sidebar from "../components/sidebar";
import Header from "../components/header";
import { Outlet } from "react-router-dom";

function Dashboard() {
  return (
    <>
      <div className="flex min-h-screen ">
        <Sidebar/>
        <div className="w-full">
          <Header />
          <Outlet />
        </div>
      </div>
    </>
  );
}
export default Dashboard;

