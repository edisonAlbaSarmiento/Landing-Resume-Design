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

export const ContainerIcons = styled.div`
  display: flex;
`;

export const Icons = styled.h2`
  font-size: 20px;
  color: ${props => props.theme.color.white};
  width: 100%;
  height: 2px;
  padding-right: 13%;
`

export const Line = styled.hr`
  background-color: ${props => props.theme.color.pink};
  height: 1px;
  width: 100%;
  border: 0;
  float: left;
`;

export const ContainerCards= styled.div`
  background-color: red;
  width: 100%;
  display: flex;
  flex-flow: wrap;
`;

export const ContainerChildren = styled.div`
  background-color: yellow;
  width: 26%;
  text-align: center;
  margin: 10px;
  padding: 20px;
`;