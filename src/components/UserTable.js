import React, { useContext } from "react";
import { myContext } from "./context";

const UserTable = () => {
  const { userData, setUserData } = useContext(myContext);
  const handleDelete = (id) => {
    let filteredData = userData.filter((_, ind) => id !== ind);
    setUserData(filteredData);
  };
  return (
    <div className="mt-4">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Designation</th>
            <th scope="col">Contact</th>
          </tr>
        </thead>
        <tbody>
          {userData.lenght < 1 ? (
            <tr>
              <td>No Data Available</td>
            </tr>
          ) : (
            userData.map((item, ind) => {
              return (
                <tr key={ind}>
                  <th scope="row">{item.firstName}</th>
                  <td>{item.lastName}</td>
                  <td>{item.designation}</td>
                  <td>{item.contact}</td>
                  <td>
                    <button type="button" className="btn btn-primary btn-sm">
                      Edit
                    </button>
                    <button
                      type="button"
                      className="btn btn-primary btn-sm ms-2"
                      onClick={() => handleDelete(ind)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })
          )}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
