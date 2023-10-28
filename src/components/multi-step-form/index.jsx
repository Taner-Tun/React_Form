import Sidebar from "../sidebar";
import Step from "../step";


import * as S from './styled';

function MultiStepForm() {
  
  return (
  <S.MultiStepForm>
    <Sidebar />
    <Step />
  </S.MultiStepForm>
  )
}

export default MultiStepForm;
