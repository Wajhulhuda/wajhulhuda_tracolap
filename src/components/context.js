import { createContext, useState } from "react";

const myContext = createContext();
const MyProvider = ({ children }) => {
  const [showForm, setShowForm] = useState(false);
  const [userData, setUserData] = useState([]);

  return (
    <myContext.Provider
      value={{
        showForm,
        setShowForm,
        userData,
        setUserData,
      }}
    >
      {children}
    </myContext.Provider>
  );
};
export { myContext, MyProvider };
