import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import * as userClient from "../Account/client";
import { useEffect, useState } from "react";
import * as courseClient from "../Courses/client";
export default function ProtectedRoute({ children }: { children: any }) {
  const { cid } = useParams();
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { enrollments } = useSelector((state: any) => state.enrollmentReducer);
  const [people, setPeople] = useState<any[]>([]);
  const fetchPeople = async () => {
    const users = await courseClient.findUsersForCourse(cid as string);
    setPeople(users);
  };
  useEffect(() => {
    fetchPeople();
  }, []);
  // fetchPeople();
  // 
  return children;
}