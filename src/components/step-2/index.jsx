import Step from "../step";
import formJSON from "../../../form.json";

import ArcadeIcon from "../../assets/icon-arcade.svg";
import AdvancedIcon from "../../assets/icon-advanced.svg";
import ProIcon from "../../assets/icon-pro.svg";
import * as S from "./styled";

// I work with js runtime, no backend, i cant get src url, this is a solution

const Icons = {
  1:ArcadeIcon,
  2:AdvancedIcon,
  3:ProIcon,
}

const { step2 } = formJSON;

function Step2(props) {
  const billingType = 'monthly';

  return (
    <Step {...props}>
      <S.Step2>
         <S.RadioGroup> {
              step2[billingType].map(item => 
                <S.RadioLabel key= {item.id}>
                <S.RadioInput name="plan-type" type="radio" />
                <S.Icon src={Icons[item.id]} />
                <S.Title>{item.title}</S.Title>
                <S.Subtitle>{item.price}</S.Subtitle>
              </S.RadioLabel>
              )
            }</S.RadioGroup>
      </S.Step2>
    </Step>
  );
}

export default Step2;
