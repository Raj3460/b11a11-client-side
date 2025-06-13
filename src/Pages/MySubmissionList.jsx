import React, { use } from "react";
import MySubRowList from "./MySubRowList";

const MySubmissionList = ({ MySubmissionApi }) => {
  const data = use(MySubmissionApi);
  console.log(data);
  return (
    <div>
      {data.length}
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Assignment</th>
              <th>Job</th>
              <th>Status</th>
              <th>marks</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
           {
              data.map((submission , index) => <MySubRowList
              key={submission._id}
              submission={submission}
              index={index}>

              </MySubRowList>)
           }
            
            
            
            
          </tbody>
        
         
        </table>
      </div>
    </div>
  );
};

export default MySubmissionList;
