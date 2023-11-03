import * as S from "./styled";
import PropTypes from 'prop-types';

function Step({
  handleSubmit, 
  title,
  subtitle,
  hasBackButton,
  hasNextButton,
  children,
}){
  return (
      <S.Step onSubmit = {handleSubmit}>
        <S.StepHeader>
          <S.Title>{title}</S.Title>
          <S.Subtitle>{subtitle}</S.Subtitle>
        </S.StepHeader>
        <S.Body>
          {children}
        </S.Body>
        <S.StepFooter>
         {hasBackButton && <S.GoBackButton>Go Back</S.GoBackButton>}
         {hasNextButton && <S.GoNextButton type="submit">Go Next Step</S.GoNextButton>}
        </S.StepFooter>
      </S.Step>
  );
}

Step.propTypes = {
  title: PropTypes.string.isRequired, 
  subtitle: PropTypes.string.isRequired, 
  hasBackButton: PropTypes.bool, 
  hasNextButton: PropTypes.bool.isRequired, 
  children: PropTypes.node, 
};
export default Step;
