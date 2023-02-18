import React, { useState, useEffect } from "react";
import { IconContext } from "react-icons";
import { TbEdit } from "react-icons/tb";
import { FaTrashAlt, FaFileDownload } from "react-icons/fa";
import Modal from "./modal";

import { deleteStudent } from "../../data/firebase-data";

import "./tables.scss";

const Table = ({ data, keys }) => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    setStudents(data);
  }, [data]);

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

  return (
    <div className="component">
      <h3>الشواهد المدرسية</h3>
      <input
        type="search"
        className="form-control my-4"
        placeholder="البحث..."
        style={{ width: "30vw" }}
      />

      <table className="table table-bordered">
        <thead>
          <tr>
            {keys.map((key, index) => (
              <th key={index} className="pointer" scope="col">
                {key.propertieAr}
              </th>
            ))}
            <th></th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={index}>
              {keys.map((key, index) => (
                <td key={index}>
                  <div className="case">
                    <span>{student[key.propertie]}</span>
                    <TbEdit
                      className="pointer"
                      data-bs-toggle="modal"
                      data-bs-target={`#${student[key.propertie]}Modal`}
                    />
                  </div>
                </td>
              ))}
              <td>
                <div className="case">
                  <IconContext.Provider value={{ color: "#24a0ed" }}>
                    <div className="pointer">
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
            id={student[key.propertie]}
            studentId={student.id}
            title={key.propertieAr}
            field={key.propertie}
            currentData={student[key.propertie]}
          />
        ))
      )}
    </div>
  );
};

export default Table;
