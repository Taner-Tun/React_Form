import * as S from "./styled";

function Step() {
  return (
    <div>
      <S.Step>
        <S.StepHeader>
          <S.Title>Title</S.Title>
          <S.Subtitle>Subtitle</S.Subtitle>
        </S.StepHeader>
        <S.Body>
          Body
        </S.Body>
        <S.StepFooter>
          <S.GoBackButton>Go Back</S.GoBackButton>
          <S.GoNextButton>Next Step</S.GoNextButton>
        </S.StepFooter>
      </S.Step>
    </div>
  )
}

export default Step;
