import Step from '../step';
import FormsJSON from "../../../form.json";

import * as S from "./styled";

function Step1(props) {
  const {step1} = FormsJSON;
  const haserror = false;

  return (
    <Step {...props}>
      <S.Step1>
      {step1.map((item)=>(
          <S.FormItem key = {item.id} haserror ={haserror ? 'true' : 'false'}>
          <S.Label htmlFor={item.id}>{item.label}</S.Label>
          <S.Input id={item.id} name={item.id} type={item.type} placeholder={item.placeholder}>{item.input}</S.Input>
          {haserror && (
          <S.ErrorMessage>This field is required</S.ErrorMessage>
          )}
         </S.FormItem>
        ))}
     </S.Step1>
    </Step>  
  );
}

        
export default Step1;
