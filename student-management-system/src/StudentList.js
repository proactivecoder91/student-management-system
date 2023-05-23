import { useState, useEffect } from "react";

const StudentList = () => {
  const [student, setStudent] = useState(null);
  useEffect(() => {
    fetch("http://localhost:8000/students")
      .then((resp) => {
        return resp.json();
      })
      .then((data) => {
        setStudent(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  return (
    <>
      <div className="card">
        <div className="card-title">
          <h2>Student List</h2>
        </div>
        <div className="card-body">
          <table className="table table-bordered table-striped">
            <thead className="bg-dark text-white">
              <tr>
                <td>ID</td>
                <td>Name</td>
                <td>Age</td>
                <td>Actions</td>
              </tr>
            </thead>
            <tbody>
              {student &&
                student.map((item) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.age}</td>
                    <td>
                      <button className="btn bg-dark text-light">
                        Details
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default StudentList;
