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
`;

export const Card = styled.div`
  padding: 20px;
  font-size: 30px;
  text-align: center;
  width: 100%;
  background-color: red;
`;

export const TitleName = styled.h2`
  font-size: 20px;
  color: ${props => props.theme.color.white};
  width: 100%;
`;

export const SubTitle = styled.h3`
  font-size: 20px;
  color: ${props => props.theme.color.white};
  height: 14%;
  width: 100%;
`