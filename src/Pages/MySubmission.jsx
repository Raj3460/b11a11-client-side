import React, { Suspense, useContext } from "react";
import MySubmissionList from "./MySubmissionList";
import Loading from "../Components/Loading";
// import { MySubmissionApi } from "../ApiSubmission/MySubmissionApi";
import { AuthContext } from "../Context/AuthContext";
import UseApplicationApi from "../CustomHook/UseApplicationApi";

const MySubmission = () => {
  const { user } = useContext(AuthContext);

  const { mySubmissionsPromise } = UseApplicationApi();
  return (
    <div>
      <Suspense fallback={<Loading></Loading>}>
        <MySubmissionList
          MySubmissionApi={mySubmissionsPromise(user?.email)}
        ></MySubmissionList>
      </Suspense>
    </div>
  );
};

export default MySubmission;
