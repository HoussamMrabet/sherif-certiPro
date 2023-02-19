import React,{useState} from 'react';
import {GrPowerReset} from 'react-icons/gr';
import {AiOutlineSave} from 'react-icons/ai';
import { ToastContainer, toast } from 'react-toastify';

import { addStudent } from '../../data/firebase-data';

import "./formAtt.scss"

const FormAttestationAr = () => {

  const [num, setNum] = useState("");
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [dateNaissance, setDateNaissance] = useState("");
  const [lieuNaissance, setLieuNaissance] = useState("");
  const [codeNational, setCodeNational] = useState("");
  const [numInsc, setNumInsc] = useState("");
  const [dateInsc, setDateInsc] = useState("");
  const [niveau, setNiveau] = useState("");
  const [anneeScolaire, setAnneeScolaire] = useState("");
  const [note, setNote] = useState("");
  const [dateSituation, setDateSituation] = useState("");

  const resetInputs = () => {
    setAnneeScolaire("");
    setCodeNational("");
    setDateInsc("");
    setDateNaissance("");
    setDateSituation("");
    setFName("");
    setLName("");
    setLieuNaissance("");
    setNiveau("");
    setNote("");
    setNum("");
    setNumInsc("");
  };

  const saveHandler = async() => {
    const instance = {num, fName, lName, dateNaissance, lieuNaissance, codeNational, numInsc, dateInsc, niveau, anneeScolaire, note, dateSituation};
    await addStudent(instance);
    resetInputs();
    toast.success("تمت الاضافة بنجاح");
  };
  
  return (
    <div className='component formAtt'>
      <div className="m-3 col-3">
        <label className="form-label">الرقم الترتيبي</label>
        <input type="text" value={num} className="form-control" onChange={(e)=>setNum(e.currentTarget.value)} /> 
      </div>
      <div className="m-3 col-3">
        <label className="form-label">رقم التسجيل</label>
        <input type="text" value={numInsc} className="form-control" onChange={(e)=>setNumInsc(e.currentTarget.value)} /> 
      </div>
      <div className="m-3 col-3">
        <label className="form-label">الموسم الدراسي</label>
        <input type="text" value={anneeScolaire} className="form-control" onChange={(e)=>setAnneeScolaire(e.currentTarget.value)} /> 
      </div>
      <div className="m-3 col-4">
        <label className="form-label">الاسم الشخصي</label>
        <input type="text" value={fName} className="form-control" onChange={(e)=>setFName(e.currentTarget.value)} /> 
      </div>
      <div className="m-3 col-4">
        <label className="form-label">تاريخ التسجيل</label>
        <input type="text" value={dateInsc} className="form-control" onChange={(e)=>setDateInsc(e.currentTarget.value)} /> 
      </div>
      <div className="m-3 col-4">
        <label className="form-label">الاسم العائلي</label>
        <input type="text" value={lName} className="form-control" onChange={(e)=>setLName(e.currentTarget.value)} /> 
      </div>
      <div className="m-3 col-4">
        <label className="form-label">المستوى</label>
        <input type="text" value={niveau} className="form-control" onChange={(e)=>setNiveau(e.currentTarget.value)} /> 
      </div>
      <div className="m-3 col-3">
        <label className="form-label">تاريخ الازدياد</label>
        <input type="text" value={dateNaissance} className="form-control" onChange={(e)=>setDateNaissance(e.currentTarget.value)} /> 
      </div>
      <div className="m-3 col-3">
        <label className="form-label">الرقم الوطني</label>
        <input type="text" value={codeNational} className="form-control" onChange={(e)=>setCodeNational(e.currentTarget.value)} /> 
      </div>
      <div className="m-3 col-3">
        <label className="form-label">ملاحظات</label>
        <input type="text" value={note} className="form-control" onChange={(e)=>setNote(e.currentTarget.value)} /> 
      </div>
      <div className="m-3 col-5">
        <label className="form-label">مكان الازدياد</label>
        <input type="text" value={lieuNaissance} className="form-control" onChange={(e)=>setLieuNaissance(e.currentTarget.value)} /> 
      </div>
      <div className="m-3 col-5">
        <label className="form-label">تاريخ الوضعية</label>
        <input type="text" value={dateSituation} className="form-control" onChange={(e)=>setDateSituation(e.currentTarget.value)} /> 
      </div>
      <br />
      <div className="m-3 col-6">
        <button className='btn btn-success' onClick={()=>saveHandler()}><AiOutlineSave /></button>
        <button className='btn btn-secondary mx-2' onClick={()=>resetInputs()}><GrPowerReset /></button>
      </div>
      <ToastContainer />
    </div>
  )
}

export default FormAttestationAr