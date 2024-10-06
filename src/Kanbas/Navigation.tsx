import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { FaInbox, FaRegCircleUser } from "react-icons/fa6";
import { HiOutlineInboxStack } from "react-icons/hi2";
import { SlCalender } from "react-icons/sl";
import { MdOutlineHistory } from "react-icons/md";
import { SiYoutubestudio } from "react-icons/si";
import { IoHelpCircleOutline } from "react-icons/io5";
import { IoHome } from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";
export default function KanbasNavigation() {
  const {pathname}  = useLocation();
  const links = [
    { label: "Dashboard", path: "/Kanbas/Dashboard", icon: AiOutlineDashboard },
    { label: "Courses",   path: "/Kanbas/Courses", icon: LiaBookSolid },
    { label: "Calendar",  path: "/Kanbas/Calendar",  icon: IoCalendarOutline },
    { label: "Inbox",     path: "/Kanbas/Inbox",     icon: FaInbox },
    { label: "Labs",      path: "/Labs",             icon: LiaCogSolid },
    { label: "History",     path: "/Kanbas/History",     icon: MdOutlineHistory },
    { label: "Help",     path: "/Kanbas/Help",     icon: IoHelpCircleOutline},
    { label: "Landing",     path: "/",     icon: IoHome },
  ];

  return (
    <div id="wd-kanbas-navigation" style={{ width: 110 }} 
         className="list-group rounded-0  position-fixed bottom-0 top-0 d-none d-md-block bg-black z-2">
      <a id="wd-neu-link" target="_blank" 
        href="https://www.northeastern.edu/"
        className="list-group-item bg-black border-0 text-center">
        <img src="/images/NEU.png" width="75px" /></a>
      {/* <Link to="/Kanbas/Account" id="wd-account-link"
        className="list-group-item text-center border-0 bg-black text-white">
        <FaRegCircleUser className="fs-2 text text-white" /><br />
        Account </Link>
      <Link to="/Kanbas/Dashboard" id="wd-dashboard-link"
        className={`list-group-item text-center border-0
                   ${pathname.includes("Dashboard") ? "bg-white text-danger" : "text-white bg-black"}`}>
        <AiOutlineDashboard className="fs-2 text-danger" /><br />
        Dashboard </Link>
      <Link to="/Kanbas/Courses" id="wd-course-link"
        className={`list-group-item text-center border-0
          ${pathname.includes("Courses") ? "bg-white text-danger" : "text-white bg-black"}`}>
        <LiaBookSolid className="fs-2 text-danger" /><br />
        Courses </Link>
      <Link to="/Kanbas/Calender" id="wd-calender-link"
      className={`list-group-item text-center border-0
        ${pathname.includes("Calender") ? "bg-white text-danger" : "text-white bg-black"}`}>
      <SlCalender  className="fs-2 text-danger" /><br />
      Calender </Link>  
      <Link to="/Kanbas/Inbox" id="wd-inbox-link"
      className={`list-group-item text-center border-0
        ${pathname.includes("Inbox") ? "bg-white text-danger" : "text-white bg-black"}`}>
      <HiOutlineInboxStack  className="fs-2 text-danger" /><br />
      Inbox </Link>
      <Link to="/Kanbas/History" id="wd-history-link"
      className={`list-group-item text-center border-0
        ${pathname.includes("History") ? "bg-white text-danger" : "text-white bg-black"}`}>
      <MdOutlineHistory  className="fs-2 text-danger" /><br />
      History </Link>
      <Link to="/Labs" id="wd-studio-link"
      className={`list-group-item text-center border-0
        ${pathname.includes("Studio") ? "bg-white text-danger" : "text-white bg-black"}`}>
      <SiYoutubestudio  className="fs-2 text-danger" /><br />
      Labs </Link>
      <Link to="/Kanbas/Help" id="wd-help-link"
      className={`list-group-item text-center border-0
        ${pathname.includes("Help") ? "bg-white text-danger" : "text-white bg-black"}`}>
      <IoHelpCircleOutline className="fs-2 text-danger" /><br />
      Help </Link>
      <Link to="/" id="wd-landing-link"
      className={`list-group-item text-center border-0
        ${pathname.includes("Landing") ? "bg-white text-danger" : "text-white bg-black"}`}>
      <IoHome  className="fs-2 text-danger" /><br />
      Landing Page</Link> */}
       <Link to="/Kanbas/Account" className={`list-group-item text-center border-0 bg-black
            ${pathname.includes("Account") ? "bg-white text-danger" : "bg-black text-white"}`}>
        <FaRegCircleUser className={`fs-2 ${pathname.includes("Account") ? "text-danger" : "text-white"}`} />
        <br />
        Account
      </Link>
      {links.map((link) => (
        <Link key={link.path} to={link.path} className={`list-group-item bg-black text-center border-0
              ${pathname.includes(link.label) ? "text-danger bg-white" : "text-white bg-black"}`}>
          {link.icon({ className: "fs-2 text-danger"})}
          <br />
          {link.label}
        </Link>
      ))}
    </div>
);}
