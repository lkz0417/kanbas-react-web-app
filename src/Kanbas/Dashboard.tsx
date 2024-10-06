// import { Link } from "react-router-dom";
// export default function Dashboard() {
//   return (
//     <div id="wd-dashboard">
//       <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
//       <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
//       <div id="wd-dashboard-courses" className="row">
//       <div className="row row-cols-1 row-cols-md-5 g-4">
//       <div className="wd-dashboard-course col" style={{ width: "300px" }}>
//         <div className="card rounded-3 overflow-hidden">
//           <Link className="wd-dashboard-course-link text-decoration-none text-dark"
//                 to="/Kanbas/Courses/1234/Home">
//             <img src="/images/reactjs.png" width="100%" height={160}/>
//             <div className="card-body">
//               <h5 className="wd-dashboard-course-title card-title">
//                  CS1234 React JS
//               </h5>
//               <p className="wd-dashboard-course-title card-text">
//                   Full Stack software developer
//               </p>
//               <button className="btn btn-primary"> Go </button>
//             </div>
//           </Link>
//         </div>
//       </div>

      
//       <div className="wd-dashboard-course col" style={{ width: "300px" }}>
//         <div className="card rounded-3 overflow-hidden">
//           <Link className="wd-dashboard-course-link text-decoration-none text-dark"
//                 to="/Kanbas/Courses/1234/Home">
//             <img src="/images/5001.png" width="100%" height={160}/>
//             <div className="card-body">
//               <h5 className="wd-dashboard-course-title card-title">
//                  CS5001
//               </h5>
//               <p className="wd-dashboard-course-title card-text">
//                   Foundation of Computer Science
//               </p>
//               <button className="btn btn-primary"> Go </button>
//             </div>
//           </Link>
//         </div>
//       </div>

//       <div className="wd-dashboard-course col" style={{ width: "300px" }}>
//         <div className="card rounded-3 overflow-hidden">
//           <Link className="wd-dashboard-course-link text-decoration-none text-dark"
//                 to="/Kanbas/Courses/1234/Home">
//             <img src="/images/5002.png" width="100%" height={160}/>
//             <div className="card-body">
//               <h5 className="wd-dashboard-course-title card-title">
//                  CS5002
//               </h5>
//               <p className="wd-dashboard-course-title card-text">
//                   Discrete Math
//               </p>
//               <button className="btn btn-primary"> Go </button>
//             </div>
//           </Link>
//         </div>
//       </div>
      
//       <div className="wd-dashboard-course col" style={{ width: "300px" }}>
//         <div className="card rounded-3 overflow-hidden">
//           <Link className="wd-dashboard-course-link text-decoration-none text-dark"
//                 to="/Kanbas/Courses/1234/Home">
//             <img src="/images/5004.png" width="100%" height={160}/>
//             <div className="card-body">
//               <h5 className="wd-dashboard-course-title card-title">
//                  CS5004
//               </h5>
//               <p className="wd-dashboard-course-title card-text">
//                   Object Oriented Programming
//               </p>
//               <button className="btn btn-primary"> Go </button>
//             </div>
//           </Link>
//         </div>
//       </div>
      
//       <div className="wd-dashboard-course col" style={{ width: "300px" }}>
//         <div className="card rounded-3 overflow-hidden">
//           <Link className="wd-dashboard-course-link text-decoration-none text-dark"
//                 to="/Kanbas/Courses/1234/Home">
//             <img src="/images/5008.png" width="100%" height={160}/>
//             <div className="card-body">
//               <h5 className="wd-dashboard-course-title card-title">
//                  CS5008
//               </h5>
//               <p className="wd-dashboard-course-title card-text">
//                   Data Structure and Algorithms
//               </p>
//               <button className="btn btn-primary"> Go </button>
//             </div>
//           </Link>
//         </div>
//       </div>
      
//       <div className="wd-dashboard-course col" style={{ width: "300px" }}>
//         <div className="card rounded-3 overflow-hidden">
//           <Link className="wd-dashboard-course-link text-decoration-none text-dark"
//                 to="/Kanbas/Courses/1234/Home">
//             <img src="/images/5610.png" width="100%" height={160}/>
//             <div className="card-body">
//               <h5 className="wd-dashboard-course-title card-title">
//                  CS5610
//               </h5>
//               <p className="wd-dashboard-course-title card-text">
//                   Web Development
//               </p>
//               <button className="btn btn-primary"> Go </button>
//             </div>
//           </Link>
//         </div>
//       </div>
      
//       <div className="wd-dashboard-course col" style={{ width: "300px" }}>
//         <div className="card rounded-3 overflow-hidden">
//           <Link className="wd-dashboard-course-link text-decoration-none text-dark"
//                 to="/Kanbas/Courses/1234/Home">
//             <img src="/images/5800.png" width="100%" height={160}/>
//             <div className="card-body">
//               <h5 className="wd-dashboard-course-title card-title">
//                  CS5800
//               </h5>
//               <p className="wd-dashboard-course-title card-text">
//                   Algorithm
//               </p>
//               <button className="btn btn-primary"> Go </button>
//             </div>
//           </Link>
//         </div>
//       </div>
      
//       <div className="wd-dashboard-course col" style={{ width: "300px" }}>
//         <div className="card rounded-3 overflow-hidden">
//           <Link className="wd-dashboard-course-link text-decoration-none text-dark"
//                 to="/Kanbas/Courses/1234/Home">
//             <img src="/images/6620.png" width="100%" height={160}/>
//             <div className="card-body">
//               <h5 className="wd-dashboard-course-title card-title">
//                  CS6620
//               </h5>
//               <p className="wd-dashboard-course-title card-text">
//                   Machine Learning
//               </p>
//               <button className="btn btn-primary"> Go </button>
//             </div>
//           </Link>
//         </div>
//       </div>
      
//       </div>
//     </div></div>
//   );
// }
import { Link } from "react-router-dom";
import * as db from "./Database";
export default function Dashboard() {
  const courses = db.courses;
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2> <hr />
      <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {courses.map((course) => (
            <div className="wd-dashboard-course col" style={{ width: "300px" }}>
              <div className="card rounded-3 overflow-hidden">
                <Link to={`/Kanbas/Courses/${course._id}/Home`}
                      className="wd-dashboard-course-link text-decoration-none text-dark" >
                  <img src="/images/reactjs.png" width="100%" height={160} />
                  <div className="card-body">
                    <h5 className="wd-dashboard-course-title card-title">
                      {course.name}
                    </h5>
                    <p className="wd-dashboard-course-title card-text overflow-y-hidden" style={{ maxHeight: 100 }}>
                      {course.description}
                    </p>
                    <button className="btn btn-primary"> Go </button>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
);}
