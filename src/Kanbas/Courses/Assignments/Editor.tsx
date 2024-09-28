import "./AssignmentStyles.css";
export default function AssignmentEditor() {
    return (
      // <div id="wd-assignments-editor" className="p-3">
      //   <h5>Assignment Name</h5>
      //   <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
      //   <textarea id="wd-description">
      //     The assignment is available online Submit a link to the landing page of
      //   </textarea>
      //   <br />
      //   <table>
      //     <tr>
      //       <td align="right" valign="top">
      //         <label htmlFor="wd-points">Points</label>
      //       </td>
      //       <td>
      //         <input id="wd-points" value={100} />
      //       </td>
      //     </tr><br/>
      //     <tr>
      //       <td align="right" valign="top">
      //           <label>Assignment Group</label>
      //       </td>
      //       <td>
      //           <select>
      //               <option>Assignments</option>
      //           </select>
      //       </td>
      //     </tr><br/>
      //     <tr>
      //       <td align="right" valign="top">
      //           <label>Display Grade as</label>
      //       </td>
      //       <td>
      //           <select>
      //               <option>Percentage</option>
      //               <option>Absolute Grade</option>
      //           </select>
      //       </td>
      //     </tr><br/>
      //     <tr>
      //       <td align="right" valign="top">
      //           <label>Submission Type</label>
      //       </td>
      //       <td>
      //           <select>
      //               <option>Online</option>
      //               <option>Offline</option>
      //           </select>
      //       </td>
      //     </tr><br/>
      //     <tr>
      //       <td align="right" valign="top"></td>
      //       <td>
      //           <label id="wd-online-entry-options">Online Entry Options</label><br/>

      //           <input type="checkbox"  id="wd-text-entry"/>
      //           <label htmlFor="wd-text-entry">Text Entry</label><br/>

      //           <input type="checkbox"  id="wd-website-url"/>
      //           <label htmlFor="wd-website-url">Website URL</label><br/>

      //           <input type="checkbox"  id="wd-media-recordings"/>
      //           <label htmlFor="wd-media-recordings">Media Recordings</label><br/>

      //           <input type="checkbox"  id="wd-student-annotation"/>
      //           <label htmlFor="wd-student-annotation">Student Annotation</label><br/>

      //           <input type="checkbox"  id="wd-file-uploads"/>
      //           <label htmlFor="wd-file-uploads">File Uploads</label>
      //       </td>
      //     </tr><br/>
      //     <tr>
      //       <td align="right" valign="top">
      //           <label>Assign</label>
      //       </td>
      //       <td align="left" valign="top">
      //           <label>Assign to</label><br/>
      //           <input value={"EveryOne"}></input>
      //       </td>
      //     </tr><br/>
      //     <tr>
      //       <td align="right" valign="top"></td>
      //       <td align="left" valign="top">
      //           <label>Due</label><br/>
      //           <input type="date" value={"2024-05-13"}></input>
      //       </td>
      //     </tr><br/>
      //     <tr>
      //       <td align="right" valign="top"></td>
      //       <td align="left" valign="top">
      //           <label>Available from&nbsp;&nbsp;&nbsp; Until</label><br/>
      //           <input type="date" value={"2024-05-06"}></input>
      //           <input type="date" value={"2024-05-20"}></input>
      //       </td>
      //     </tr><br/>
      //     <tr>
      //       <td align="right" valign="top"></td>
      //       <td align="right" valign="top">
      //           <button>Cancel</button>
      //           <button>Save</button>
      //       </td>
      //     </tr>
      //   </table>
      // </div>
      <div id="wd-assignments-editor" className="p-3 mb-3">
    <h5>Assignment Name</h5>
    <div className="row mb-3">
    <div className="col-md-8">
    <input id="wd-name" value="A1 - ENV + HTML" className="form-control mb-3 " /></div></div>
    <div className="row mb-3">
    <div className="col-md-8">
    <textarea id="wd-description" className="form-control mb-3">
      The assignment is available online Submit a link to the landing page of
    </textarea></div></div>
    <div >
      <div className="row mb-3">
        <div className="col-md-2">
          <label htmlFor="wd-points" className="float-end">Points</label>
        </div>
        <div className="col-md-6">
          <input id="wd-points" value={100} className="form-control" />
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
          <input type="date" value="2024-05-13" className="form-control mb-3" />
          <div className="row">
            
            <div className="col-md-6">
              <span className="fw-bold">Available from</span>
              <input type="date" value="2024-05-06" className="form-control flex-fill" />
            </div>
            <div className="col-md-6"> 
              <label className="fw-bold">Until</label>
              <input type="date" value="2024-05-20" className="form-control flex-fill" />
            </div>
            </div>    
        </div>
        </div>
      </div>
      
      <div className="row">
        <div className="col-md-8 text-end">
          <button className="btn btn-secondary me-2">Cancel</button>
          <button className="btn btn-danger">Save</button>
        </div>
      </div>
    </div>
  </div>
  );}
  