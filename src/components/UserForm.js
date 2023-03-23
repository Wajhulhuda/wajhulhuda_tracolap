import React, { useContext, useState } from "react";
import { myContext } from "./context";

const UserForm = () => {
  const { setShowForm, setUserData, userData } = useContext(myContext);
  const [inputValues, setInputValues] = useState({
    firstName: "",
    lastName: "",
    designation: "",
    contact: "",
  });
  const handleChange = (e) => {
    let { value, name } = e.target;
    setInputValues(() => {
      return { ...inputValues, [name]: value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValues.contact.length === 10) {
      setUserData([...userData, inputValues]);
      console.log(inputValues);
      setShowForm(false);
      setInputValues({
        firstName: "",
        lastName: "",
        designation: "",
        contact: "",
      });
    } else {
      alert("Contact Number should be at 10 digit");
    }
  };
  return (
    <>
      <div className="form-wrapper"></div>
      <div className="form-div">
        <div className="form-header bg-primary py-1 px-2">
          <h2 className="text-white">Add Employee</h2>
          <h2 onClick={() => setShowForm(false)} className="close">
            ❌
          </h2>
        </div>
        <form className="form-details" onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-6">
              <div className="mb-3">
                <label htmlFor="firstName" className="form-label">
                  First Name*
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="firstName"
                  name="firstName"
                  value={inputValues.firstName}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="col-6">
              <div className="mb-3">
                <label htmlFor="lastName" className="form-label">
                  Last Name*
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="lastName"
                  name="lastName"
                  value={inputValues.lastName}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <div className="mb-3">
                <label htmlFor="designation" className="form-label">
                  Designation*
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="designation"
                  value={inputValues.designation}
                  name="designation"
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="col-6">
              <div className="mb-3">
                <label htmlFor="contact" className="form-label">
                  Contact Number*
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="contact"
                  value={inputValues.contact}
                  onChange={handleChange}
                  name="contact"
                  required
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-2">
              <button
                type="button"
                className="btn btn-outline-secondary"
                onClick={() => setShowForm(false)}
              >
                Cancel
              </button>
            </div>
            <div className="col-2">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default UserForm;
