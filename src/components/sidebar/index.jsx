import * as S from './styled';
import { Items } from './constants';
import PropTypes from 'prop-types';




function Sidebar({activeStep}) {
  return (
    <S.Sidebar>
      {Items.map((item) => (
        <S.Item key={item.id} active={activeStep === 'step1' ? 'true' : 'false'}>
        <S.ItemNumber>{item.number}</S.ItemNumber>
        <S.ItemBody>
          <S.Subtitle>{item.subtitle}</S.Subtitle>
          <S.Title>{item.title}</S.Title>
        </S.ItemBody>
      </S.Item>
      ))}
    </S.Sidebar>
  );
  }

  Sidebar.propTypes = {
    activeStep: PropTypes.string.isRequired, 
  };
export default Sidebar;
