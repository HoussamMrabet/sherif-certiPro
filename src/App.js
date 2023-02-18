import React, { useState, useEffect, createContext } from "react";
import NavBar from "./components/navBar/navBar";
import Table from "./components/tables/tables";

import { getAllStudents } from "./data/firebase-data";
import { keys } from "./data/tableProperties";
import CreateAtt from "./pages/CreateAtt";

const StudentsContext = createContext(null);

function App() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    getAllStudents()
      .then((data) => {
        setStudents(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="container-fluid">
      <NavBar />
      <StudentsContext.Provider value={students}>
        <Table data={students} keys={keys} />
      </StudentsContext.Provider>
      <CreateAtt />
    </div>
  );
}

export default App;
