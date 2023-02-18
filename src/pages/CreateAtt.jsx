import React, {useRef} from 'react';
import {HiDownload} from "react-icons/hi";
import { useReactToPrint } from 'react-to-print';
import FormAttestationAr from '../components/formAttestation/formAttestationAr';
import DisplayAtt from './../components/attestation/displayAttestation';

import "./createAtt.scss";

const CreateAtt = () => {
  const componentRef = useRef();
  const printData = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: 'attestation',
  });

  return (
    <>
      <div className='d-flex justify-content-between'>
        <div ref={componentRef} style={{width: "100%", height: window.innerHeight}}>
          <DisplayAtt />
        </div>
        <FormAttestationAr />
      </div>
      <button className='btn btn-primary download-button' onClick={printData}><HiDownload /></button>
    </>
  )
}

export default CreateAtt;