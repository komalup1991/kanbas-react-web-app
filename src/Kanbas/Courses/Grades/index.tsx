import { assignments, enrollments, grades, users } from "../../Database";
import { useParams } from "react-router-dom";
function Grades() {
  const { courseId } = useParams();
  const as = assignments.filter((assignment) => assignment.course === courseId);
  const es = enrollments.filter((enrollment) => enrollment.course === courseId);
  return (
    <>
     
      <div className="col col-10 col-xs-12">
            <div className="wd-flex-grow-1 float-end">
              <button type="button" className="btn btn-light mr-5">
                <i className="fa-solid fa-file-import"></i> Import
              </button>
              <button type="button" className="btn btn-light mr-5">
                <i className="fa-solid fa-file-export"></i> Export
              </button>
              <button type="button" className="btn btn-light mr-5">
                <i className="fa-solid fa-gear"></i>
              </button>
            </div>
            <br />
            <br />
            <div className="row">
              <div className="col">
                <div className="mb-2 fw-bold">Student Names</div>
                <select className="form-select" aria-label="Default select example">
                  <option value="none" selected disabled hidden>
                    <span
                      ><i className="fa-solid fa-magnifying-glass"></i> Search
                      Students</span>
                  </option>

                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
              <div className="col">
                <div className="mb-2 fw-bold">Assignment Names</div>
                <select className="form-select" aria-label="Default select example">
                  <option value="none" selected disabled hidden>
                    Search Assignments
                  </option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
            </div>
            <div>
              <button type="button" className="btn btn-light m-2">
                <i className="fa-solid fa-filter"></i> Apply Filters
              </button>
            </div>
      <div className="table-responsive ">
        <table className="table  table-striped table-bordered table-hove">
          <thead>
            <th>Student Name</th>
            {as.map((assignment) => (<th>{assignment.title}</th>))}
          </thead>
          <tbody>
            {es.map((enrollment) => {
              const user = users.find((user) => user._id === enrollment.user);
              return (
                <tr>
                   <td>{user?.firstName} {user?.lastName}</td>
                   {assignments.map((assignment) => {
                     const grade = grades.find(
                       (grade) => grade.student === enrollment.user && grade.assignment === assignment._id);
                       return (<td>{grade?.grade || ""}</td>);})}
                </tr>);
            })}
          </tbody>
          </table>
      </div>
      </div>
      </>);
}
export default Grades;