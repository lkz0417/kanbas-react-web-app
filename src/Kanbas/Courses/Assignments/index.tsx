import Operation from "./Operation";
import { FaPlus } from "react-icons/fa";
import { InputGroup, FormControl, Button } from 'react-bootstrap';
import { FaMagnifyingGlass } from "react-icons/fa6";
import InputGroupText from "react-bootstrap/esm/InputGroupText";
import "./AssignmentStyles.css";
import { BsGripVertical } from "react-icons/bs";
import LessonControlButtons from "../Modules/LessonControlButtons";
import ModuleControlButtons from "../Modules/ModuleControlButtons";
import { IoMdArrowDropdownCircle } from "react-icons/io";
import { PiNotebookBold } from "react-icons/pi";
import AssignmentControls from "./AssignmentControls";
import AssignmentButton from "./AssignmentButton";
import { Link } from "react-router-dom";
import { useParams , useLocation } from "react-router-dom";
import * as db from "../../Database";
export default function Assignments() {
  const {cid} = useParams();
  const assignments = db.assignments;
    return (
      <div>
      <div id="wd-assignments">
      
        <div className="d-flex">
        <InputGroup className="mb-3 custom-input-group">
        <InputGroupText><FaMagnifyingGlass/></InputGroupText>
        
        <FormControl placeholder="Search..."/>
        </InputGroup>
        
        <button id="wd-view-progress" className="btn   me-1 btn-secondary ms-auto height">
        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
        Group </button>
        <button id="wd-add-module-btn" className="btn  btn-danger me-1 height">
        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
        Assignment</button>
        
        </div><br/>
        
        
        <div className="wd-title p-3 ps-2 bg-secondary"> 
      <BsGripVertical className="me-2 fs-3" /><IoMdArrowDropdownCircle className="me-2"/>ASSIGNMENT<AssignmentControls /></div>
      <ul className="wd-lessons list-group rounded-0">
        {/* <li className="wd-lesson list-group-item p-3 ps-1">
        <div className="d-flex align-items-center">
        <BsGripVertical className="me-2 fs-3" />
        <Link to="/Kanbas/Courses/1234/Assignments/123">< PiNotebookBold className="me-2 text-success " /></Link>
          <div className="p-2">
          <a className="custom-link fs-5"
              href="#/Kanbas/Courses/1234/Assignments/123">
              A1
            </a><br/>
            <span className="text-danger">Multiple Modules</span> | <span className="fw-bold">Not available until</span> May 13 at 12:00am |<br/> 
            <span className="fw-bold">Due</span> May 13 at 11:59pm | 100pts
          </div>
          <LessonControlButtons /></div></li>
          <li className="wd-lesson list-group-item p-3 ps-1">
        <div className="d-flex align-items-center">
        <BsGripVertical className="me-2 fs-3" />
        <Link to="/Kanbas/Courses/1234/Assignments/123">< PiNotebookBold className="me-2 text-success " /></Link>
          <div className="p-2">
          <a className="custom-link fs-5"
              href="#/Kanbas/Courses/1234/Assignments/123">
              A2
            </a><br/>
            <span className="text-danger">Multiple Modules</span> | <span className="fw-bold">Not available until</span> May 13 at 12:00am |<br/> 
            <span className="fw-bold">Due</span> May 16 at 11:59pm | 100pts
          </div>
          <LessonControlButtons /></div></li>
          <li className="wd-lesson list-group-item p-3 ps-1">
        <div className="d-flex align-items-center">
        <BsGripVertical className="me-2 fs-3" />
        <Link to="/Kanbas/Courses/1234/Assignments/123">< PiNotebookBold className="me-2 text-success " /></Link>
          <div className="p-2">
          <a className="custom-link fs-5"
              href="#/Kanbas/Courses/1234/Assignments/123">
              A3
            </a><br/>
            <span className="text-danger">Multiple Modules</span> | <span className="fw-bold">Not available until</span> May 13 at 12:00am |<br/> 
            <span className="fw-bold">Due</span> May 20 at 11:59pm | 100pts
          </div>
          <LessonControlButtons /></div></li> */}
          {assignments.
          filter((assignment: any) => assignment.course === cid)
          .map((assignment: any) => (
            <li className="wd-lesson list-group-item p-3 ps-1">
              <div className="d-flex align-items-center">
              <BsGripVertical className="me-2 fs-3" />
              <Link to={`/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}>< PiNotebookBold className="me-2 text-success " /></Link>
                <div className="p-2">
                <a className="custom-link fs-5"
                    href={`/#/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}>
                    {assignment && assignment._id}
                  </a><br/>
                  <span className="text-danger">Multiple Modules</span> | <span className="fw-bold">Not available until</span> May 13 at 12:00am |<br/> 
                  <span className="fw-bold">Due</span> May 13 at 11:59pm | 100pts
                </div>
                <AssignmentButton /></div>
              </li>
          ))}
      </ul>
      </div>
      </div>
  );}
  