import React, { useState, useEffect, useRef } from "react";
import { useReactToPrint } from "react-to-print";
import { IconContext } from "react-icons";
import { TbEdit } from "react-icons/tb";
import { FaTrashAlt, FaFileDownload } from "react-icons/fa";
import Modal from "./modal";
import DisplayAtt from "../attestation/displayAttestation";

import {
  updateCounter,
  getCounter,
  deleteStudent,
} from "../../data/firebase-data";

import "./tables.scss";

const Table = ({ data, keys }) => {
  const [students, setStudents] = useState([]);
  const [filtredStudents, setFiltredStudents] = useState([]);
  const [order, setOrder] = useState("desc");
  const [counter, setCounter] = useState("");
  const [formValues, setFormValues] = useState({});
  const [toPrint, setToPrint] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const componentRef = useRef();

  useEffect(() => {
    getCounter().then((data) => {
      setCounter(data[0].num);
    });
  }, []);
  
  useEffect(() => {
    setFiltredStudents(students);
  }, [students]);

  const printData = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: "attestation",
    onAfterPrint: () => handleAfterPrint(),
  });
  
  useEffect(() => {
    if(toPrint){
      printData();
      setToPrint(false);
    }
  }, [formValues, printData, toPrint]);

  useEffect(() => {
    setStudents(data);
  }, [data]);

  useEffect(() => {
    let query = searchQuery?.trim().toLowerCase();
    const results = students.filter((item) => (
      item.fName?.toLowerCase().startsWith(query) ||
      item.lName?.toLowerCase().startsWith(query) ||
      item.codeNational?.toLowerCase().startsWith(query) ||
      item.numInsc?.toLowerCase().startsWith(query)
    ));
    setFiltredStudents(results);
  }, [searchQuery, students]);

  const handleDelete = async (id) => {
    const originalStudents = students;
    const newStudents = students.filter((student) => student.id !== id);
    setStudents(newStudents);

    try {
      await deleteStudent(id);
    } catch {
      setStudents(originalStudents);
    }
  };

  const handleDataChange = (newStudent) => {
    setStudents(newStudent);
  };

  const handleSort = (property) => {
    if (order === "desc") {
      filtredStudents.sort((a, b) =>
        a[property].toUpperCase() > b[property].toUpperCase() ? 1 : -1
      );
      setOrder("asc");
    } else {
      filtredStudents.sort((a, b) =>
        a[property].toUpperCase() < b[property].toUpperCase() ? 1 : -1
      );
      setOrder("desc");
    }
  };


  const handlePrint = (instance) => {
    setFormValues(instance);
    setToPrint(true);
  }

  const handleAfterPrint = () => {
    updateCounter();
    let newCounter = counter + 1;
    setCounter(newCounter);
  };

  return (
    <div className="component table-overflow">
      <h3>الشواهد المدرسية</h3>
      <input
        type="search"
        className="form-control my-4"
        placeholder="البحث..."
        style={{ width: "30vw" }}
        onChange={(e)=>setSearchQuery(e.currentTarget.value)}
      />

      <table className="table table-bordered">
        <thead>
          <tr>
            {keys.map((key, index) => (
              <th
                key={index}
                className="pointer"
                scope="col"
                onClick={() => handleSort(key.propertie)}
              >
                {key.propertieAr}
              </th>
            ))}
            <th></th>
          </tr>
        </thead>
        <tbody>
          {filtredStudents.map((student, index) => (
            <tr key={index}>
              {keys.map((key, index) => (
                <td key={index}>
                  <div className="case">
                    <span>{student[key.propertie]}</span>
                    <TbEdit
                      className="pointer"
                      data-bs-toggle="modal"
                      data-bs-target={`#${student.id}${key.propertie}Modal`}
                    />
                  </div>
                </td>
              ))}
              <td>
                <div className="case">
                  <IconContext.Provider value={{ color: "#24a0ed" }}>
                    <div className="pointer" onClick={()=>handlePrint(student)}>
                      <FaFileDownload />
                    </div>
                  </IconContext.Provider>
                  <IconContext.Provider value={{ color: "#d11a2a" }}>
                    <div
                      className="pointer"
                      onClick={() => handleDelete(student.id)}
                    >
                      <FaTrashAlt />
                    </div>
                  </IconContext.Provider>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {students.map((student) =>
        keys.map((key, index) => (
          <Modal
            key={index}
            id={student.id + key.propertie}
            studentId={student.id}
            title={key.propertieAr}
            field={key.propertie}
            currentData={student[key.propertie]}
            onDataChange={handleDataChange}
            students={students}
          />
        ))
      )}
      <div style={{ display: "none" }}>
        <div
          ref={componentRef}
          style={{ width: "100%", height: window.innerHeight }}
        >
          <DisplayAtt formValues={formValues} counter={counter} />
        </div>
      </div>
    </div>
  );
};

export default Table;
