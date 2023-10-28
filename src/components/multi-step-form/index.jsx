import Sidebar from "../sidebar";
import Step1 from "../step-1";
import Step2 from "../step-2";
import Step3 from "../step-3";
import Step4 from "../step-4";

import * as S from './styled';

function MultiStepForm() {
  
  return (
  <S.MultiStepForm>
    <Sidebar />
    <Step1 />
    <Step2 />
    <Step3 />
    <Step4 />
  </S.MultiStepForm>
  )
}

export default MultiStepForm;
