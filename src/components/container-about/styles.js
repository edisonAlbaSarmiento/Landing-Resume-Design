import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${props => props.theme.color.purple};
`;  

export const ContainerTitle = styled.div`
  padding: 3%;
`;

export const Title = styled.h2`
  font-size: 20px;
  color: ${props => props.theme.color.white};
  height: 14%;
  width: 100%;
`
export const Line = styled.hr`
  background-color: 'yellow';
  width: 100%;
`;

export const ContainerCards = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
`;

export const Card = styled.div`
  padding: 20px;
  text-align: left;
  display: flex;
  flex-direction: column;
  width: 100%;
`;
export const CardSubTilte = styled.div`
  padding: 0px 20px 0px 20px;
  font-size: 30px;
  text-align: left;
  width: 36%;
`;

export const TitleName = styled.h2`
  font-size: 55px;
  color: ${props => props.theme.color.white};
  width: 100%;
  font-weight: bold;
  margin: 0;
`;

export const SubTitle = styled.h3`
  font-size: 20px;
  color: ${props => props.theme.color.pink};
  height: 14%;
  width: 100%;
`

export const TextDescription = styled.p`
  font-size: 20px;
  color: ${props => props.theme.color.grayText};
  width: 100%;
`;

export const Button1 = styled.button`
  width: 36%;
  background-color: ${props => props.activeButton === 1 ? props.theme.color.pink : props.theme.color.grayDisabled};
  border: none;
  outline: none;
`;

export const Button2 = styled.button`
  width: 36%;
  background-color: ${props => props.activeButton === 2 ? props.theme.color.pink : props.theme.color.grayDisabled};
  border: none;
  margin-left: 20%;
  outline: none;
`;

export const TextButton = styled.p`
  font-size: 12px;
  color: ${props => props.theme.color.white};
`
export const ContentButtons = styled.div`
  display: flex;
  justify-content: initial;
  width: 33%;
`;