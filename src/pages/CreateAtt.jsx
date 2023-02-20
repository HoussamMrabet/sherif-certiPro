import React, {useState,useEffect,useRef} from 'react';
import {HiDownload} from "react-icons/hi";
import { useReactToPrint } from 'react-to-print';
import FormAttestationAr from '../components/formAttestation/formAttestationAr';
import DisplayAtt from './../components/attestation/displayAttestation';

import { getCounter,updateCounter } from "../data/firebase-data";
import "./createAtt.scss";

const CreateAtt = () => {
  const [formValues, setFormValues] = useState({
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
  const [counter, setCounter] = useState("");

  useEffect(()=>{
    getCounter()
    .then((data) => {
      setCounter(data[0].num);
    })
    .catch((error) => {
      console.log(error);
    });
  }, [])

  const componentRef = useRef();

  const handleFormChange = (newFormValues) => {
    setFormValues(newFormValues);
  };

  const printData = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: 'attestation',
    onAfterPrint: () => handleAfterPrint()
  });

  const handleAfterPrint = () => {
    updateCounter();
    console.log("handle")
    let newCounter = counter + 1;
    setCounter(newCounter);
  };

  return (
    <>
      <div className='createAtt'>
        <div ref={componentRef} style={{width: "100%", height: window.innerHeight}}>
          <DisplayAtt formValues={formValues} counter={counter} />
        </div>
        <FormAttestationAr handleFormChange={handleFormChange} />
      </div>
      <button className='btn btn-primary download-button' onClick={printData}><HiDownload /></button>
    </>
  )
}

export default CreateAtt;