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
import { Link } from "react-router-dom";
export default function Assignments() {
    return (
      <div>
      <div id="wd-assignments">
        {/* <input id="wd-search-assignment"
               placeholder="Search..." />
        <button id="wd-add-assignment-group">+ Group</button>
        <button id="wd-add-assignment">+ Assignment</button> */}
        <div className="d-flex">
        <InputGroup className="mb-3 custom-input-group">
        <InputGroupText><FaMagnifyingGlass/></InputGroupText>
        
        <FormControl placeholder="Search..."/>
        </InputGroup>
        {/* <input id="wd-search-assignment"
               placeholder="Search..." /> */}
        <button id="wd-view-progress" className="btn   me-1 btn-secondary ms-auto height">
        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
        Group </button>
        <button id="wd-add-module-btn" className="btn  btn-danger me-1 height">
        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
        Module</button>
        
        </div><br/>
        
        
    
        {/* <h3 id="wd-assignments-title">
          ASSIGNMENTS 40% of Total <button>+</button>
        </h3>
        <ul id="wd-assignment-list">
          <li className="wd-assignment-list-item">
            <a className="wd-assignment-link"
              href="#/Kanbas/Courses/1234/Assignments/123">
              A1 - ENV + HTML
            </a>
            <br/>
            Multiple Modules | Not available until May 6 at 12:00am | Due May 13 at 11:59pm | 100pts
          </li>
          <li className="wd-assignment-list-item">
            <a className="wd-assignment-link"
              href="#/Kanbas/Courses/1234/Assignments/123">
              A2 - CSS + BOOTSTRAP
            </a>
            <br/>
            Multiple Modules | Not available until May 13 at 12:00am | Due May 20 at 11:59pm | 100pts
          </li>
          <li className="wd-assignment-list-item">
            <a className="wd-assignment-link"
              href="#/Kanbas/Courses/1234/Assignments/123">
              A3 - JavaScript + REACT
            </a>
            <br/>
            Multiple Modules | Not available until May 20 at 12:00am | Due May 27 at 11:59pm | 100pts
          </li>
        </ul> */}
        
        <div className="wd-title p-3 ps-2 bg-secondary"> 
      <BsGripVertical className="me-2 fs-3" /><IoMdArrowDropdownCircle className="me-2"/>ASSIGNMENT<AssignmentControls /></div>
      <ul className="wd-lessons list-group rounded-0">
        <li className="wd-lesson list-group-item p-3 ps-1">
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
          <LessonControlButtons /></div></li>
        
      </ul>
      </div>
      </div>
  );}
  