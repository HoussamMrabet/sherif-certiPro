import React, {useState, useEffect} from 'react'
import {default as img} from "../../assets/logo.png";

import "./attestation.scss"

const DisplayAtt = ({formValues, counter}) => {

  const [today, setToday] = useState("");
  const [yearRange, setYearRange] = useState("");

  useEffect(() => {
    setToday(dateToday());
    setYearRange(getYearRange());
  }, []);

  const dateToday = () => {
    const today = new Date();
    const day = String(today.getDate()).padStart(2, '0');
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const year = today.getFullYear();
    const todayFormatted = `${day}/${month}/${year}`;

    return todayFormatted;
  }

  const getYearRange = () => {
    const currentYear = new Date().getFullYear();
    const previousYear = currentYear - 1;
    return `${previousYear.toString().substring(2)}/${currentYear.toString().substring(2)}/`;
  }
  
  return (
    <div className='printer'>
      <div className='component col att'>
        <img src={img} alt="" />
        <h5 className='mb-1 wizara'>الاكاديمية الجهوية للتربية و التكوين لجهة الدار البيضاء - سطات</h5>
        <h5 className='mb-1 wizara'>المديرية الاقليمية لبنسليمان</h5>
        <h5 className='mb-1 wizara'>الثانوية التأهيلية الشريف الإدريسي</h5>
        <h6 className='mb-1 wizara' style={{fontSize: "16px"}}>بنسليمان 023291593</h6>
        <h6 className='bordred-title mb-1'><span className='attNumTitle'>شهادة مدرسية رقم: </span><span className='attNum mx-4'>{yearRange}{counter}</span></h6>
        <h6 className='mb-3'>يشهد : مدير الثانوية التأهيلية الشريف الإدريسي ببنسليمان</h6>
        <div className='singleRow my-2'>
            <span>بأن التلميذ(ة): </span><span className='value'>{formValues.fName} {formValues.lName}</span>
        </div>
        <div className='attRow my-2'>
          <div>
            <span>المزداد(ة) في: </span><span className='value'>{formValues.lieuNaissance}</span>
          </div>
          <div className='gap'></div>
          <div className='secondEl'>
            <span>بتاريخ: </span><span className='value'>{formValues.dateNaissance}</span>
          </div>
          <div></div>
        </div>
        <div className='attRow my-2'>
            <div className=''>
              <span>الرقم الوطني: </span><span className='value'>{formValues.codeNational}</span>
            </div>
            <div className='gap'></div>
            <div className='secondEl'>
              <span>رقم التسجيل: </span><span className='value'>{formValues.numInsc}</span>
            </div>
            <div></div>
          <div></div>
        </div>
        <div className='singleRow my-2'>
            <span>كان(ت) يتابع دراسته(ها) بمستوى: </span><span className='value'>{formValues.niveau}</span>
        </div>
        <div className='singleRow my-2'>
            <span>الموسم الدراسي: </span><span className='value'>{formValues.anneeScolaire}</span>
        </div>
        <div className='singleRow my-2'>
            <span>و قد انقطع عن الدراسة بتاريخ: </span><span className='value'>{formValues.dateSituation}</span>
        </div>
        <div className='singleRow my-2'>
            <span>ملاحظات: </span><span className='value'>{formValues.note}</span>
        </div>
        <div className='singleRow my-2'>
            <span style={{fontWeight: "bolder", fontSize: "13px"}}>ملحوظة : سلمت هذه الشهادة لغرض اداري ولا تخول التسجيل في مؤسسة أخرى</span>
        </div>
        <div className='singleRow-R my-2'>
          <span>بنسليمان في: </span><span className='value'>{today}</span>
        </div>
        <div className='attRow-E my-2 mb-4'>
          <div>
            <span>المستندات</span>
          </div>
          <div>
            <span>الناظر</span>
          </div>
          <div className='secondEl'>
            <span>رئيس المؤسسة</span>
          </div>
        </div>
      </div>
      <div className='component col att second'>
        <img src={img} alt="" />
        <h5 className='mb-1 wizara'>الاكاديمية الجهوية للتربية و التكوين لجهة الدار البيضاء - سطات</h5>
        <h5 className='mb-1 wizara'>المديرية الاقليمية لبنسليمان</h5>
        <h5 className='mb-1 wizara'>الثانوية التأهيلية الشريف الإدريسي</h5>
        <h6 className='mb-1 wizara' style={{fontSize: "16px"}}>بنسليمان 023291593</h6>
        <h6 className='bordred-title mb-1'><span className='attNumTitle'>شهادة مدرسية رقم: </span><span className='attNum mx-4'>{yearRange}{counter}</span></h6>
        <h6 className='mb-3'>يشهد : مدير الثانوية التأهيلية الشريف الإدريسي ببنسليمان</h6>
        <div className='singleRow my-2'>
            <span>بأن التلميذ(ة): </span><span className='value'>{formValues.fName} {formValues.lName}</span>
        </div>
        <div className='attRow my-2'>
          <div>
            <span>المزداد(ة) في: </span><span className='value'>{formValues.lieuNaissance}</span>
          </div>
          <div className='gap'></div>
          <div className='secondEl'>
            <span>بتاريخ: </span><span className='value'>{formValues.dateNaissance}</span>
          </div>
          <div></div>
        </div>
        <div className='attRow my-2'>
            <div className=''>
              <span>الرقم الوطني: </span><span className='value'>{formValues.codeNational}</span>
            </div>
            <div className='gap'></div>
            <div className='secondEl'>
              <span>رقم التسجيل: </span><span className='value'>{formValues.numInsc}</span>
            </div>
            <div></div>
          <div></div>
        </div>
        <div className='singleRow my-2'>
            <span>كان(ت) يتابع دراسته(ها) بمستوى: </span><span className='value'>{formValues.niveau}</span>
        </div>
        <div className='singleRow my-2'>
            <span>الموسم الدراسي: </span><span className='value'>{formValues.anneeScolaire}</span>
        </div>
        <div className='singleRow my-2'>
            <span>و قد انقطع عن الدراسة بتاريخ: </span><span className='value'>{formValues.dateSituation}</span>
        </div>
        <div className='singleRow my-2'>
            <span>ملاحظات: </span><span className='value'>{formValues.note}</span>
        </div>
        <div className='singleRow my-2'>
            <span style={{fontWeight: "bolder", fontSize: "13px"}}>ملحوظة : سلمت هذه الشهادة لغرض اداري ولا تخول التسجيل في مؤسسة أخرى</span>
        </div>
        <div className='singleRow-R my-2'>
          <span>بنسليمان في: </span><span className='value'>{today}</span>
        </div>
        <div className='attRow-E my-2 mb-4'>
          <div>
            <span>المستندات</span>
          </div>
          <div>
            <span>الناظر</span>
          </div>
          <div className='secondEl'>
            <span>رئيس المؤسسة</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DisplayAtt