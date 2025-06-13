import React, { Suspense, useContext } from "react";
import MySubmissionList from "./MySubmissionList";
import Loading from "../Components/Loading";
import { MySubmissionApi } from "../ApiSubmission/MySubmissionApi";
import { AuthContext } from "../Context/AuthContext";

const MySubmission = () => {
  const { user } = useContext(AuthContext);
  console.log(user.email);
  return (
    <div>
      <Suspense fallback={<Loading></Loading>}>
        <MySubmissionList
          MySubmissionApi={MySubmissionApi(user.email)}
        ></MySubmissionList>
      </Suspense>
    </div>
  );
};

export default MySubmission;
