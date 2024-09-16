import { Link } from "react-router-dom";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <img src="/images/reactjs.png" width={200} />
          <div>
            <Link className="wd-dashboard-course-link"
              to="/Kanbas/Courses/1234/Home">
              CS1234 React JS
            </Link>
            <p className="wd-dashboard-course-title">
              Full Stack software developer
            </p>
            <Link to="/Kanbas/Courses/1234/Home"> Go </Link>
          </div>
        </div>
        <div className="wd-dashboard-course"> 
        <img src="/images/5001.png" width={200} />
          <div>
            <Link className="wd-dashboard-course-link"
              to="/Kanbas/Courses/5001/Home">
              CS5001 
            </Link>
            <p className="wd-dashboard-course-title">
              Introduction of Computer Science
            </p>
            <Link to="/Kanbas/Courses/5001/Home"> Go </Link>
          </div>
        </div>
        <div className="wd-dashboard-course"> 
        <img src="/images/5002.png" width={200} />
          <div>
            <Link className="wd-dashboard-course-link"
              to="/Kanbas/Courses/5002/Home">
              CS5002
            </Link>
            <p className="wd-dashboard-course-title">
              Discrete Math
            </p>
            <Link to="/Kanbas/Courses/5002/Home"> Go </Link>
          </div>
        </div>
        <div className="wd-dashboard-course"> 
        <img src="/images/5004.png" width={200} />
          <div>
            <Link className="wd-dashboard-course-link"
              to="/Kanbas/Courses/5004/Home">
              CS5004
            </Link>
            <p className="wd-dashboard-course-title">
              Object Oriented programming
            </p>
            <Link to="/Kanbas/Courses/5004/Home"> Go </Link>
          </div>
        </div>
        <div className="wd-dashboard-course"> 
        <img src="/images/5008.png" width={200} />
          <div>
            <Link className="wd-dashboard-course-link"
              to="/Kanbas/Courses/5008/Home">
              CS5008
            </Link>
            <p className="wd-dashboard-course-title">
              Data Structure And Algorithm
            </p>
            <Link to="/Kanbas/Courses/5008/Home"> Go </Link>
          </div>
        </div>
        <div className="wd-dashboard-course"> 
        <img src="/images/5610.png" width={200} />
          <div>
            <Link className="wd-dashboard-course-link"
              to="/Kanbas/Courses/5610/Home">
              CS5610
            </Link>
            <p className="wd-dashboard-course-title">
              Web development
            </p>
            <Link to="/Kanbas/Courses/5610/Home"> Go </Link>
          </div>
        </div>
        <div className="wd-dashboard-course"> 
        <img src="/images/6620.png" width={200} />
          <div>
            <Link className="wd-dashboard-course-link"
              to="/Kanbas/Courses/6620/Home">
              CS6620
            </Link>
            <p className="wd-dashboard-course-title">
              Machine Learning
            </p>
            <Link to="/Kanbas/Courses/6620/Home"> Go </Link>
          </div>
        </div>
        <div className="wd-dashboard-course"> 
        <img src="/images/5800.png" width={200} />
          <div>
            <Link className="wd-dashboard-course-link"
              to="/Kanbas/Courses/5800/Home">
              CS5800
            </Link>
            <p className="wd-dashboard-course-title">
              Algorithm
            </p>
            <Link to="/Kanbas/Courses/5800/Home"> Go </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
