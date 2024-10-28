import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "../Modules/GreenCheckmark";
import { deleteAssignment } from "./reducer";
import { FaTrash } from "react-icons/fa";
import { useDispatch } from "react-redux";
import * as client from "./client";
export default function AssignmentButton({assignment,setAssignment} : {setAssignment: (assignment: any) => void; assignment : any; } ) {
  const dispatch = useDispatch();
  const removeAssignment = async (assignmentId: string) => {
    await client.deleteAssignment(assignmentId);
    dispatch(deleteAssignment(assignmentId));
  };
  return (
    <div className="ms-auto">
      <FaTrash className="fs-4 me-2 text-danger" 
      onClick={() => {
        removeAssignment(assignment._id);
      }}/>
      <GreenCheckmark />
      <IoEllipsisVertical className="fs-4" />
    </div>
);}