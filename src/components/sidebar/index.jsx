import * as S from './styled';

const Items = [
  {
    id: 'Step1',
    number:1,
    subtitle: 'Step 1',
    title: 'Your Info'
  },
  {
    id: 'Step2',
    number:2,
    subtitle: 'Step 2',
    title: 'Select Plan'
  },
  {
    id: 'Step3',
    number:3,
    subtitle: 'Step 3',
    title: 'Add-Ons'
  },
  {
    id: 'Step4',
    number:4,
    subtitle: 'Step4',
    title: 'Summary'
  }
]

function Sidebar() {
  return (
    <S.Sidebar>
      {Items.map((item) => (
        <S.Item key={item.id}>
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
export default Sidebar;
