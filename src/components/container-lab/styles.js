import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${props => props.theme.color.purple};
`;

export const ContainerHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 3%;
`;

export const ContainerTitle = styled.div`

`;

export const Title = styled.h2`
  font-size: 20px;
  color: ${props => props.theme.color.white};
  width: 100%;
  height: 2px;
`

export const Line = styled.hr`
  background-color: ${props => props.theme.color.pink};
  height: 1px;
  width: 100%;
  border: 0;
  float: left;
`;

export const ContainerCards= styled.div`
  width: 100%;
  display: flex;
  flex-flow: wrap;
`;

export const ContainerChildren = styled.div`
  background-color: #281b37;
  width: 44%;
  text-align: center;
  margin: 1%;
  padding: 2%;
  height: 0%;
  cursor: pointer;
  transition: 1s;
  &:hover {
    background-color: #4e3283;
    margin-top: -10px;
    transition: 1s;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const ImageContainer = styled.img`
  width: 100%;
  height: 100%;
`;

export const ContainerDescription = styled.div`
  background-color: #1e1b34;
`;

export const ContainerText = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3%;
  @media (max-width: 768px) {
    padding: 0;
  }
`;

export const TextPrimary = styled.span`
  color: white;
  text-align: left;
  font-size: 23px;
`;

export const TextSecond = styled.span`
  color: #4f4d5d;
  padding-top: 2%;
  text-align: left;
`;

export const TextThree = styled.span`
  color: ${props => props.theme.color.pink};
  text-align: left;
  padding-top: 2%;
  font-size: 13px;
  cursor: pointer;
`
