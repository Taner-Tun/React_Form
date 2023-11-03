import { useState } from "react"
import Step from "../step";
import FormJSON from "../../../form.json";
import * as S from "./styled";



const { step3 } = FormJSON;

function Step3(props) {
  const [selectedAddons, setSelectedAddons] = useState([]);

  const BillingType = "monthly";

  const changeSelectedAddons = (checked, selectedAddon) => {
    if (checked) {
      setSelectedAddons([...selectedAddons, selectedAddon]);
    } else {
      setSelectedAddons(
        selectedAddons.filter((addon) => addon.id !== selectedAddon.id)
      );
    }
  };
  console.log(selectedAddons);
  
  const checkSelected = (id) => selectedAddons.some((i) => i.id === id);
  return (
    <Step {...props}>
      <S.Step3>
        {step3[BillingType].map(item =>
          <S.Item key={item.id} isselected={checkSelected(item.id)}>
          <S.Input type="checkbox" onChange={(e) => changeSelectedAddons(e.target.checked, item)}/>
          <S.InputBody>
            <S.Title>{item.title}</S.Title>
            <S.Subtitle>{item.description}</S.Subtitle>
          </S.InputBody>
          <S.Price>{item.price}</S.Price>
        </S.Item>
        )
     }
      </S.Step3>
    </Step>
  )
}

export default Step3;
