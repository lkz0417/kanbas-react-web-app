import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "../Modules/GreenCheckmark";
import { deleteAssignment } from "./reducer";
import { FaTrash } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
export default function AssignmentButton({assignment,setAssignment} : {setAssignment: (assignment: any) => void; assignment : any; } ) {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  return (
    <div className="ms-auto">
      {currentUser.role === "FACULTY" && (<FaTrash className="fs-4 me-2 text-danger" 
      onClick={() => {
        dispatch(deleteAssignment(assignment._id));
      }}/>)}
      <GreenCheckmark />
      <IoEllipsisVertical className="fs-4" />
    </div>
);}