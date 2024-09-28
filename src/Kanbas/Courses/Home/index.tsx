import Modules from "../Modules";
import CourseStatus from "./Status";
import "./HomeStyles.css"
export default function Home() {
  return (
    
<div className="d-flex " >
  <div className="flex-fill m-3">
    <Modules />
  </div>

  <div className="d-none d-md-block ml-3" >
    <CourseStatus />
  </div>
</div>


  );
}
