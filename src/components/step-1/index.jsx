import Step from '../step';
import FormsJSON from "../../../form.json";

import * as S from "./styled";
import PropTypes from 'prop-types';

function Step1({onStepSubmit, formData, ...props}) {
  const {step1} = FormsJSON;
  const haserror = false;

  const onSubmit = (e) => {
    e.preventDefault();
  
    const formData = new FormData(e.target);
    const formProperties = Object.fromEntries(formData);

    //validation rule
    onStepSubmit("step1", "step2", formProperties);
    console.log(formProperties);
  };


  return (
    <Step {...props} handleSubmit={onSubmit}>
      <S.Step1>
      {step1.map((item)=>(
          <S.FormItem key = {item.id} haserror ={haserror ? 'true' : 'false'}>
          <S.Label htmlFor={item.id}>{item.label}</S.Label>
          <S.Input
           defaultValue={formData.step1[item.id]}
           id={item.id} 
           name={item.id}
           type={item.type}
           placeholder={item.placeholder}
           value={item.input} />
          {haserror && (
          <S.ErrorMessage>This field is required</S.ErrorMessage>
          )}
         </S.FormItem>
      ))}
     </S.Step1>
    </Step>  
  );
}

Step1.propTypes = {
  onStepSubmit: PropTypes.func.isRequired,
  formData: PropTypes.object.isRequired,
};
export default Step1;
