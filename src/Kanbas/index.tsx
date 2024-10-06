import { Routes, Route, Navigate } from "react-router";
import Account from "./Account";
import Dashboard from "./Dashboard";
import KanbasNavigation from "./Navigation";
import Courses from "./Courses";
import "./styles.css";
export default function Kanbas() {
  return (
    <div id="wd-kanbas">
      
            <KanbasNavigation />
         
            <div className="wd-main-content-offset p-3">
            <Routes>
              <Route path="/" element={<Navigate to="Dashboard" />} />
              <Route path="/Account/*" element={<Account />} />
              <Route path="/Dashboard" element={<Dashboard />} />
              <Route path="/Courses" element={<Dashboard />} />
              <Route path="/Courses/:cid/*" element={<Courses />} />
              <Route path="/Calendar" element={<h1>Calendar</h1>} />
              <Route path="/Inbox" element={<h1>Inbox</h1>} />
              <Route path="/Studio" element={<h1>Studio</h1>} />
              <Route path="/History" element={<h1>History</h1>} />
              <Route path="/Help" element={<h1>HeLp</h1>} />
            </Routes>
            </div>
    </div>
);}





  