import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes,Route } from "react-router-dom";
import Dashboard from "./layout/dashboard";
import Exam from "./pages/Exam";
import Contact from "./pages/Contact";
import Login from "./pages/Login"
import Registration from "./pages/Registration";
import Settings from "./pages/Settings";
import RegistrationComplete from "./pages/RegistrationComplete"
import OTPverification from "./pages/OTPverification"
import NoPage from "./pages/Nopage";
import "./assets/style/index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<Exam />} />
          <Route path="exam" element={<Exam />} />
          <Route path="contact" element={<Contact />} />
          <Route path="Settings" element={<Settings />} />
          <Route path="*" element={<NoPage />} />
        </Route>
        <Route path="/Login" element={<Login />}/>
        <Route path="/Registration" element={<Registration />}/>
        <Route path="/RegistrationComplete" element={<RegistrationComplete />}/>
        <Route path="/OTPverification" element={<OTPverification />}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
