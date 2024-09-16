export default function AssignmentEditor() {
    return (
      <div id="wd-assignments-editor">
        <h4 >Assignment Name</h4>
        <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
        <textarea id="wd-description">
          The assignment is available online Submit a link to the landing page of
        </textarea>
        <br />
        <table>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-points">Points</label>
            </td>
            <td>
              <input id="wd-points" value={100} />
            </td>
          </tr><br/>
          <tr>
            <td align="right" valign="top">
                <label>Assignment Group</label>
            </td>
            <td>
                <select>
                    <option>Assignments</option>
                </select>
            </td>
          </tr><br/>
          <tr>
            <td align="right" valign="top">
                <label>Display Grade as</label>
            </td>
            <td>
                <select>
                    <option>Percentage</option>
                    <option>Absolute Grade</option>
                </select>
            </td>
          </tr><br/>
          <tr>
            <td align="right" valign="top">
                <label>Submission Type</label>
            </td>
            <td>
                <select>
                    <option>Online</option>
                    <option>Offline</option>
                </select>
            </td>
          </tr><br/>
          <tr>
            <td align="right" valign="top"></td>
            <td>
                <label id="wd-online-entry-options">Online Entry Options</label><br/>

                <input type="checkbox"  id="wd-text-entry"/>
                <label htmlFor="wd-text-entry">Text Entry</label><br/>

                <input type="checkbox"  id="wd-website-url"/>
                <label htmlFor="wd-website-url">Website URL</label><br/>

                <input type="checkbox"  id="wd-media-recordings"/>
                <label htmlFor="wd-media-recordings">Media Recordings</label><br/>

                <input type="checkbox"  id="wd-student-annotation"/>
                <label htmlFor="wd-student-annotation">Student Annotation</label><br/>

                <input type="checkbox"  id="wd-file-uploads"/>
                <label htmlFor="wd-file-uploads">File Uploads</label>
            </td>
          </tr><br/>
          <tr>
            <td align="right" valign="top">
                <label>Assign</label>
            </td>
            <td align="left" valign="top">
                <label>Assign to</label><br/>
                <input value={"EveryOne"}></input>
            </td>
          </tr><br/>
          <tr>
            <td align="right" valign="top"></td>
            <td align="left" valign="top">
                <label>Due</label><br/>
                <input type="date" value={"2024-05-13"}></input>
            </td>
          </tr><br/>
          <tr>
            <td align="right" valign="top"></td>
            <td align="left" valign="top">
                <label>Available from&nbsp;&nbsp;&nbsp; Until</label><br/>
                <input type="date" value={"2024-05-06"}></input>
                <input type="date" value={"2024-05-20"}></input>
            </td>
          </tr><br/>
          <tr>
            <td align="right" valign="top"></td>
            <td align="right" valign="top">
                <button>Cancel</button>
                <button>Save</button>
            </td>
          </tr>
        </table>
      </div>
  );}
  