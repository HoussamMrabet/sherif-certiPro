import React,{ useState} from "react";

import { updateStudent } from "../../data/firebase-data";

const Modal = (props) => {
 
    const [newData, setNewData] = useState("");

    const handleUpdate = async(id,field, data) => {
      const updatedStudents = props.students.map((student) => {
        if (student.id === id) {
          return { ...student, [field]: data };
        }
        return student;
      });

      props.onDataChange(updatedStudents);  
      await updateStudent(id, field, data);
      setNewData("");
    }
  return (
    <div
      dir="rlt"
      className="modal fade"
      id={`${props.id}Modal`}
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabIndex="-1"
      aria-labelledby={`${props.id}BackdropLabel`}
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
            <h1 className="modal-title fs-5">تعديل {props.title}</h1>
          </div>
          <div className="modal-body">
            <input
              type="search"
              value={newData}
              className="form-control my-4"
              placeholder={props.currentData}
              onChange={(e)=>setNewData(e.currentTarget.value)}
            />
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
              onClick={()=>setNewData("")}
            >
              الغاء
            </button>
            <button
              type="button"
              className="btn btn-primary"
              data-bs-dismiss="modal"
              onClick={()=>handleUpdate(props.studentId,props.field, newData)}
            >
              حفظ
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
