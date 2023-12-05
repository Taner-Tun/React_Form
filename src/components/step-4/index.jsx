import Step from '../step';

import * as S from "./styled";
import PropTypes from 'prop-types';

function Step4({formData, ...props}) {
  const { billingType, plan } = formData.step2;
  const { selectedAddons } = formData.step3;
  const totalAmount = selectedAddons.reduce(
    (acc, curr) => {
      console.log('Addon:', curr);
      console.log('Accumulator:', acc);
      return acc + curr.priceAmount;
    },
    plan.priceAmount
  );
  console.log('Total Amount:', totalAmount);
  

  return (
    <Step {...props}>
      <S.Step4>
        <S.MainRow>
          <S.Title>
            {plan.title} ({billingType})
          </S.Title>
          <S.Price>
            {plan.price}
          </S.Price>
        </S.MainRow>
        {selectedAddons.length > 0 &&
          selectedAddons.map((item) => (
            <S.SubRow key={item.id}>
              <S.Title>{item.title}</S.Title>
              <S.Price>{item.price}</S.Price>
            </S.SubRow>
          ))}
          <S.TotalRow>
            <S.Title>
              Total(per {billingType})
            </S.Title>
            {/* <S.TotalAmount>
              +$
              {selectedAddons.reduce(
              (acc,curr) => acc + curr.priceAmount,
               plan.priceAmount
               )}
               /{billingType === 'monthly' ? 'mo' : 'yr'}
            </S.TotalAmount> */}
            <S.TotalAmount>
  +$
  {selectedAddons.reduce((acc, curr) => acc + curr.priceAmount, plan.priceAmount)}
  /{billingType === 'monthly' ? 'mo' : 'yr'}
</S.TotalAmount>

          </S.TotalRow>
      </S.Step4>
    </Step>
  )
}

Step4.propTypes = {
 
  formData: PropTypes.object.isRequired,
};

export default Step4;
