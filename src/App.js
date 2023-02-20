import React, { useState, useEffect, createContext } from "react";
import UpdateContext from "./updateContext";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/navBar/navBar";
import Table from "./components/tables/tables";

import { getAllStudents } from "./data/firebase-data";
import { keys } from "./data/tableProperties";
import CreateAtt from "./pages/CreateAtt";

const StudentsContext = createContext(null);

function App() {
  const [students, setStudents] = useState([]);
  const [updateContext, setUpdateContext] = useState(0);

  useEffect(() => {
    getAllStudents()
      .then((data) => {
        setStudents(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [updateContext]);

  return (
    <div className="container-fluid">
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={
            <StudentsContext.Provider value={students}>
              <Table data={students} keys={keys} />
            </StudentsContext.Provider>
          }
        />
        <Route
          path="/createAtt"
          element={
            <UpdateContext.Provider value={{ updateContext, setUpdateContext }}>
              <CreateAtt />
            </UpdateContext.Provider>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
