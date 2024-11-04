import { Routes, Route, Navigate } from "react-router";
import Account from "./Account";
import Dashboard from "./Dashboard";
import KanbasNavigation from "./Navigation";
import Courses from "./Courses";
import "./styles.css";
import { useState } from "react";
import store from "./store";
import { Provider } from "react-redux";
import * as client from "./Courses/client";
import { useEffect } from "react";
import ProtectedRoute from "./Account/ProtectedRoute";
import Session from "./Account/Session";
import * as userClient from "./Account/client";
import { useSelector } from "react-redux";
import * as courseClient from "./Courses/client";
export default function Kanbas() {
  const [courses, setCourses] = useState<any[]>([]);
  const fetchCourses = async () => {
    const courses = await client.fetchAllCourses();
    setCourses(courses);
  };
  useEffect(() => {
    fetchCourses();
  }, []);
  
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  // const fetchCourses = async () => {
  //   let courses = [];
  //   try {
  //     courses = await userClient.findMyCourses();
  //   } catch (error) {
  //     console.error(error);
  //   }
  //   setCourses(courses);
  // };
  // useEffect(() => {
  //   fetchCourses();
  // }, [currentUser]);

  const [course, setCourse] = useState<any>({
    _id: "1234", name: "New Course", number: "New Number",
    startDate: "2023-09-10", endDate: "2023-12-15", description: "New Description",
  });
  const addNewCourse = async () => {
    const newCourse = await client.createCourse(course);
    setCourses([ ...courses, newCourse ]);
  };
  // const addNewCourse = async () => {
  //   const newCourse = await userClient.createCourse(course);
  //   setCourses([ ...courses, newCourse ]);
  // } 
  // const deleteCourse = async (courseToDelete: any) => {
  //   await client.deleteCourse(courseToDelete._id);
  //   setCourses(courses.filter(course => course !== courseToDelete));
  // };
  const deleteCourse = async (courseId: string) => {
    const status = await courseClient.deleteCourse(courseId);
    setCourses(courses.filter((course) => course._id !== courseId));
  };

  const updateCourse = async () => {
    await client.updateCourse(course);
    setCourses(
      courses.map((c) => {
        if (c._id === course._id) {
          return course;
        } else {
          return c;
        }
      })
    );
  };
  // const updateCourse = async () => {
  //   await courseClient.updateCourse(course);
  //   setCourses(courses.map((c) => {
  //       if (c._id === course._id) { return course; }
  //       else { return c; }
  //   })
  // );};


  return (
    
    <Session>
    <div id="wd-kanbas">
      
            <KanbasNavigation />
         
            <div className="wd-main-content-offset p-3">
            <Routes>
              <Route path="/" element={<Navigate to="Dashboard" />} />
              <Route path="/Account/*" element={<Account />} />
              <Route path="/Dashboard" element={<ProtectedRoute><Dashboard
              courses={courses}
              course={course}
              setCourse={setCourse}
              addNewCourse={addNewCourse}
              deleteCourse={deleteCourse}
              updateCourse={updateCourse}/></ProtectedRoute>
} />
              <Route path="/Courses" element={<ProtectedRoute><Dashboard
              courses={courses}
              course={course}
              setCourse={setCourse}
              addNewCourse={addNewCourse}
              deleteCourse={deleteCourse}
              updateCourse={updateCourse}/></ProtectedRoute>
} />
              <Route path="/Courses/:cid/*" element={<ProtectedRoute><Courses courses={courses}/></ProtectedRoute>} />
              <Route path="/Calendar" element={<h1>Calendar</h1>} />
              <Route path="/Inbox" element={<h1>Inbox</h1>} />
              <Route path="/Studio" element={<h1>Studio</h1>} />
              <Route path="/History" element={<h1>History</h1>} />
              <Route path="/Help" element={<h1>HeLp</h1>} />
            </Routes>
            </div>
    </div>
    </Session>
);}





  