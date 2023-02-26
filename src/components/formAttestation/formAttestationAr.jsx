import React,{useState, useContext} from 'react';
import UpdateContext from '../../updateContext';
import {GrPowerReset} from 'react-icons/gr';
import {AiOutlineSave} from 'react-icons/ai';
import { ToastContainer, toast } from 'react-toastify';

import { addStudent } from '../../data/firebase-data';

import "./formAtt.scss"
import { useEffect } from 'react';

const FormAttestationAr = (props) => {

  const [formInputs, setFormInputs] = useState({
    num: "",
    fName: "",
    lName: "",
    dateNaissance: "",
    lieuNaissance: "",
    codeNational: "",
    numInsc: "",
    dateInsc: "",
    niveau: "",
    anneeScolaire: "",
    note: "",
    dateSituation: ""    
  });

  const { updateContext, setUpdateContext } = useContext(UpdateContext);

  const resetInputs = () => {
    setFormInputs({
      num: "",
      fName: "",
      lName: "",
      dateNaissance: "",
      lieuNaissance: "",
      codeNational: "",
      numInsc: "",
      dateInsc: "",
      niveau: "",
      anneeScolaire: "",
      note: "",
      dateSituation: ""
    })
  };

  useEffect(()=>{
    props.handleFormChange(formInputs);
  },[props,formInputs])

  const handleFormChange = (e) => {
    const { name, value } = e.currentTarget;
    setFormInputs({ ...formInputs, [name]: value });
  }

  const saveHandler = async() => {
    const instance = formInputs;
    await addStudent(instance);
    toast.success("تمت الاضافة بنجاح");
    console.log(updateContext);
    setUpdateContext(1);
  };
  
  return (
    <div className='component formAtt'>
      <div className="m-3 col-3">
        <label className="form-label">رقم الشهادة</label>
        <input type="text" name="num" value={formInputs.num} className="form-control" onChange={(e)=>handleFormChange(e)} /> 
      </div>
      <div className="m-3 col-3">
        <label className="form-label">رقم التسجيل</label>
        <input type="text" name="numInsc" value={formInputs.numInsc} className="form-control" onChange={(e)=>handleFormChange(e)} /> 
      </div>
      <div className="m-3 col-3">
        <label className="form-label">الموسم الدراسي</label>
        <input type="text" name="anneeScolaire" value={formInputs.anneeScolaire} className="form-control" onChange={(e)=>handleFormChange(e)} /> 
      </div>
      <div className="m-3 col-4">
        <label className="form-label">الاسم الشخصي</label>
        <input type="text" name="fName" value={formInputs.fName} className="form-control" onChange={(e)=>handleFormChange(e)} /> 
      </div>
      <div className="m-3 col-4">
        <label className="form-label">تاريخ التسجيل</label>
        <input type="text" name="dateInsc" value={formInputs.dateInsc} className="form-control" onChange={(e)=>handleFormChange(e)} /> 
      </div>
      <div className="m-3 col-4">
        <label className="form-label">الاسم العائلي</label>
        <input type="text" name="lName" value={formInputs.lName} className="form-control" onChange={(e)=>handleFormChange(e)} /> 
      </div>
      <div className="m-3 col-4">
        <label className="form-label">المستوى</label>
        <input type="text" name="niveau" value={formInputs.niveau} className="form-control" onChange={(e)=>handleFormChange(e)} /> 
      </div>
      <div className="m-3 col-3">
        <label className="form-label">تاريخ الازدياد</label>
        <input type="text" name="dateNaissance" value={formInputs.dateNaissance} className="form-control" onChange={(e)=>handleFormChange(e)} /> 
      </div>
      <div className="m-3 col-3">
        <label className="form-label">الرقم الوطني</label>
        <input type="text" name="codeNational" value={formInputs.codeNational} className="form-control" onChange={(e)=>handleFormChange(e)} /> 
      </div>
      <div className="m-3 col-3">
        <label className="form-label">ملاحظات</label>
        <input type="text" name="note" value={formInputs.note} className="form-control" onChange={(e)=>handleFormChange(e)} /> 
      </div>
      <div className="m-3 col-5">
        <label className="form-label">مكان الازدياد</label>
        <input type="text" name="lieuNaissance" value={formInputs.lieuNaissance} className="form-control" onChange={(e)=>handleFormChange(e)} /> 
      </div>
      <div className="m-3 col-5">
        <label className="form-label">تاريخ الوضعية</label>
        <input type="text" name="dateSituation" value={formInputs.dateSituation} className="form-control" onChange={(e)=>handleFormChange(e)} /> 
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