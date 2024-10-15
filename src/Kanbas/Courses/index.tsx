import CoursesNavigation from "./Navigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import { Navigate, Route, Routes, useParams, useLocation  } from "react-router";
import { FaAlignJustify } from "react-icons/fa";
import PeopleTable from "./People/Table";
import { useSelector, useDispatch } from "react-redux";
import { addAssignment, updateAssignment, deleteAssignment }
  from "./Assignments/reducer";
import { useState } from "react";

export default function Courses({ courses }: { courses: any[]; }) {
  const { cid } = useParams();
  const course = courses.find((course) => course._id === cid);
  const { pathname } = useLocation();
  const [assignment, setAssignment] = useState({
    _id: "-1",
    title: "New Assignment",
    points: 100,
    description: "New Assignment Description",
    due: "2024-10-20T23:59",
    course: cid,
    availableFrom: "2024-10-13T23:59",
    availableUntil: "2024-10-20T23:59"
  });
  const { assignments } = useSelector((state: any) => state.assignmentsReducer);
  const dispatch = useDispatch();
  return (
    <div id="wd-courses">
  <h2 className="text-danger">
      <FaAlignJustify className="me-4 fs-4 mb-1" />
      {course && course.name} &gt; {pathname.split("/")[4]} </h2> <hr />
  
  <div className="d-flex">
    <div className="d-none d-md-block">
      <CoursesNavigation />
    
    </div>
    <div className="flex-fill">
    <Routes>
      <Route path="Home" element={<Home />} />
      <Route path="Modules" element={<Modules />} />
      <Route path="Assignments" element={<Assignments 
      assignments={assignments}
      assignment={assignment}
      setAssignment={setAssignment}/>} />
      <Route path="Assignments/:aid" element={<AssignmentEditor 
      assignments={assignments}
      assignment={assignment}
      setAssignment={setAssignment}/>} />
      <Route path="People" element={<PeopleTable />} />
    </Routes>
    </div></div>
    
  
</div>

);}



  