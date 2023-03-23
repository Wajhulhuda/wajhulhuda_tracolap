import { useContext } from "react";
import "./App.css";
import { myContext } from "./components/context";
import UserForm from "./components/UserForm";
import UserTable from "./components/UserTable";

function App() {
  const { showForm, setShowForm } = useContext(myContext);
  return (
    <div className="container">
      <div className="col-12 d-flex justify-content-between mt-3">
        <div>
          <h1>Employee Details</h1>
        </div>
        <div>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => setShowForm(true)}
          >
            Add
          </button>
        </div>
      </div>
      {showForm && <UserForm />}
      <UserTable />
    </div>
  );
}

export default App;
