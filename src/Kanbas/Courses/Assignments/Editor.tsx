import "./AssignmentStyles.css";
import { useParams, useLocation } from "react-router";
import * as db from "../../Database";
import { addAssignment, updateAssignment, deleteAssignment }
  from "./reducer";
import {  useDispatch } from "react-redux";
export default function AssignmentEditor({assignment, assignments,setAssignment} : {setAssignment: (assignment: any) => void;
  assignment : any; assignments : any[];
}) {
    
    const dispatch = useDispatch();
    const {cid, aid} = useParams();
    // const assignment = assignemts.find((assignment) => assignment._id === aid && assignment.course === cid);
    return (
      
      <div id="wd-assignments-editor" className="p-3">
    <h5>Assignment Name</h5>
    <div className="row mb-3">
    <div className="col-md-8">
    <input id="wd-name" value={`${assignment && assignment.title}`} className="form-control mb-3 " 
    onChange={(e) => setAssignment({...assignment, title: e.target.value})}/></div></div>
    <div className="row mb-3">
    <div className="col-md-8">
    <textarea id="wd-description" className="form-control mb-3"
    onChange={(e) => setAssignment({...assignment, description: e.target.value})}>
      {assignment && assignment.description}
    </textarea></div></div>
    <div >
      <div className="row mb-3">
        <div className="col-md-2">
          <label htmlFor="wd-points" className="float-end">Points</label>
        </div>
        <div className="col-md-6">
          <input id="wd-points" value={assignment.points} className="form-control" 
          onChange={(e) => setAssignment({...assignment, points: e.target.value})}/>
        </div>
      </div>
      <div className="row mb-3">
        <div className="col-md-2">
          <label className="float-end">Assignment Group</label>
        </div>
        <div className="col-md-6">
          <select className="form-select">
            <option selected>Assignment1</option>
            <option value="2">Assignment2</option>
          </select>
        </div>
      </div>
      <div className="row mb-3">
        <div className="col-md-2">
          <label className="float-end">Display Grade as</label>
        </div>
        <div className="col-md-6">
          <select className="form-select">
            <option selected>Percentage</option>
            <option value="2">Absolute Grade</option>
          </select>
        </div>
      </div>
      <div className="row mb-3">
        <div className="col-md-2">
          <label className="float-end">Submission Type</label>
        </div>
        <div className="col-md-6">
          <div className="border p-3">
            <select className="form-select  mb-3" >
              <option selected>Online</option>
              <option value="1">Offline</option>
            </select>
            <span className="fw-bold mb-3">Online Entry Options</span>
            <div className="mt-3">
            <div className="form-check">
            <input type="checkbox" className="form-check-input" id="wd-text-entry"/>
            <label className="form-check-label" htmlFor="wd-text-entry">Text Entry</label>
          </div>
          <div className="form-check">
            <input type="checkbox" className="form-check-input" id="wd-website-url"/>
            <label className="form-check-label" htmlFor="wd-website-url">Website URL</label>
          </div>
          <div className="form-check">
            <input type="checkbox" className="form-check-input" id="wd-media-recordings"/>
            <label className="form-check-label" htmlFor="wd-media-recordings">Media Recordings</label>
          </div>
          <div className="form-check">
            <input type="checkbox" className="form-check-input" id="wd-student-annotation"/>
            <label className="form-check-label" htmlFor="wd-student-annotation">Student Annotation</label>
          </div>
          <div className="form-check">
            <input type="checkbox" className="form-check-input" id="wd-file-uploads"/>
            <label className="form-check-label" htmlFor="wd-file-uploads">File Uploads</label>
          </div></div>
          </div>
        </div>
      </div>
      
      <div className="row mb-3">
        <div className="col-md-2">
          <label className="float-end">Assign</label>
        </div>
        <div className="col-md-6">
        <div className="border p-3">
          <label className="fw-bold">Assign to</label>
          <input value="EveryOne" className="form-control mb-3" />
          <label className="fw-bold">Due</label>
          <input type="date" value={assignment.due} className="form-control mb-3" 
          onChange={(e) => setAssignment({...assignment, due: e.target.value})}/>
          <div className="row">
            
            <div className="col-md-6">
              <span className="fw-bold">Available from</span>
              <input type="date" value={assignment.availableFrom} className="form-control flex-fill"
               onChange={(e) => setAssignment({...assignment, availableFrom: e.target.value})} />
            </div>
            <div className="col-md-6"> 
              <label className="fw-bold">Until</label>
              <input type="date" value={assignment.availableUntil} className="form-control flex-fill"
               onChange={(e) => setAssignment({...assignment, availableUntil: e.target.value})} />
            </div>
            </div>    
        </div>
        </div>
      </div>
      <div className="row mb-3">
        <div className="col-md-8"><hr/></div>
      </div>
      <div className="row">
        <div className="col-md-8 text-end">
          <button className="btn btn-secondary me-2"
          onClick={() => window.location.href = `/#/Kanbas/Courses/${cid}/Assignments`}>Cancel</button>
          <button className="btn btn-danger"
          onClick={() => {
            if (cid === aid) {
              dispatch(addAssignment(assignment));
            } else {
              dispatch(updateAssignment(assignment));
            }
            window.location.href = `/#/Kanbas/Courses/${cid}/Assignments`;
          }}>Save</button>
        </div>
      </div>
    </div>
  </div>
  );}
  