import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import * as db from "./Database";
import { useEffect } from "react";
import { addEnrollment, deleteEnrollment, findEnrollments } from "./Enrollments/reducer";
import { useRef } from "react";
import * as client from "./Enrollments/client";
export default function Dashboard(
  { courses, course, setCourse, addNewCourse,
    deleteCourse, updateCourse }: {
    courses: any[]; course: any; setCourse: (course: any) => void;
    addNewCourse: () => void; deleteCourse: (course: any) => void;
    updateCourse: () => void; }) {
    const dispatch = useDispatch();
    const [displayAll, setDisplayAll] = useState(false);
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const {enrollments} = useSelector((state: any) => state.enrollmentReducer);
    const [selectedCourses, setSelectedCourses] = useState<any[]>([]); 
    const [displayCourses, setDisplayCourses] = useState<any[]>([]);
    const display = () => {
      fecthSelectedCourses();
    };
    const fecthSelectedCourses = () => {
      if (currentUser.role!=="STUDENT") {
        setSelectedCourses(courses);
      } else {
        setSelectedCourses(courses
          .filter((course) =>
          enrollments.some(
            (enrollment:any) =>
              enrollment.user === currentUser._id &&
              enrollment.course === course._id
              )));
      }
      
    };
    const fetchEnrollments = async() => {
      const enrollments = await client.fetchEnrollments();
      dispatch(findEnrollments(enrollments));
    };
    const addNewEnrollment = async(courseId: string, userId: string) => {
      const enrollment = await client.createEnrollment(courseId, userId);
      dispatch(addEnrollment(enrollment));
    };
    const deleteEnrollments = async(courseId: string, userId: string) => {
      await client.deleteEnrollment(courseId, userId);
      const enrollment = {
        course: courseId,
        user: userId
      }
      dispatch(deleteEnrollment(enrollment));
    };
    // useEffect(() => {
    //   fecthSelectedCourses();
    //   fetchEnrollments();
    // },[]);
    useEffect(() => {
      fecthSelectedCourses();
    }, [ enrollments]);
    useEffect(() => {
      fetchEnrollments();
    }, []);
    useEffect(() => {
      setDisplayCourses(displayAll || currentUser.role !== "STUDENT" ? courses : selectedCourses );
    }, [ selectedCourses, courses, displayAll]);
    
  return (
    <div id="wd-dashboard">
      <div className="d-flex">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      {currentUser.role === "STUDENT" && (
        <button onClick={() => {
          setDisplayAll(!displayAll);
          display();
        }} className="btn btn-primary ms-auto">Enrollments</button>
      )}
      </div>
      <hr />
      {currentUser.role === "FACULTY" && (<h5>New Course
          <button className="btn btn-primary float-end"
                  id="wd-add-new-course-click"
                  onClick={() => {
                    addNewCourse();
                    // const newCourse = { ...course, _id: new Date().getTime().toString() };
                    // setDisplayCourses([...courses, newCourse]);
                  }}> Add </button>
           <button className="btn btn-warning float-end me-2"
                onClick={() => {
                  updateCourse();
                  // setDisplayCourses(
                  //   courses.map((c) => {
                  //     if (c._id === course._id) {
                  //       return course;
                  //     } else {
                  //       return c;
                  //     }
                  //   })
                  // );
                }} id="wd-update-course-click">
            Update</button>

      </h5>)}
      <br />
      {currentUser.role === "FACULTY" && ( <input value={course.name} className="form-control mb-2" 
      onChange={(e) => setCourse({ ...course, name: e.target.value }) }/>)}
      {currentUser.role === "FACULTY" && (<textarea value={course.description} className="form-control"
      onChange={(e) => setCourse({ ...course, description: e.target.value }) } />)}
      {currentUser.role === "FACULTY" && ( <hr />)}

      <h2 id="wd-dashboard-published">Published Courses ({displayCourses.length})</h2> <hr />
      <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {displayCourses
          .map((course) => (
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

                    
                    {currentUser.role === "FACULTY" && <button onClick={(event) => {
                      event.preventDefault();
                      deleteCourse(course._id);
                      setDisplayCourses(courses);
                    }} className="btn btn-danger float-end"
                    id="wd-delete-course-click">
                    Delete
                    </button>}
                    {currentUser.role === "FACULTY" && <button id="wd-edit-course-click"
                      onClick={(event) => {
                        event.preventDefault();
                        setCourse(course);
                      }}
                      className="btn btn-warning me-2 float-end" >
                      Edit
                    </button>}
                    {currentUser.role === "STUDENT" && 
                    enrollments.some(
                      (enrollment : any) =>
                        enrollment.user === currentUser._id &&
                        enrollment.course === course._id
                        )
                    &&<button onClick={(event) => {
                      event.preventDefault();
                      deleteEnrollments(course._id, currentUser._id);
                    }} className="btn btn-danger float-end"
                    id="wd-delete-course-click">
                    Unenroll
                    </button>}
                    {currentUser.role === "STUDENT" && 
                      !enrollments.some(
                        (enrollment : any) =>
                          enrollment.user === currentUser._id &&
                          enrollment.course === course._id
                          )
                     && <button id="wd-edit-course-click"
                      onClick={(event) => {
                        event.preventDefault();
                        addNewEnrollment(course._id, currentUser._id);
                      }}
                      className="btn btn-warning me-2 float-end" >
                      Enroll
                    </button>}

                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
);}