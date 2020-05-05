import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column; 
  padding: 5%;
  background-color: red;
`;
export const ContinerTitle = styled.div`
  background-color: #30383a;
  padding: 20px;
  margin-top: 3%;
`;

export const TitleName = styled.h1`
  text-align: right;
  color: white;
`;

export const ContinerInformation = styled.div`
  width: 56%;
  background-color: white;
  padding: 20px;
  top: 0;
  left: 0;
  right: 68%;
  margin: 0px 0px 0px 35%;
`;

export const ContainerText = styled.p``;

export const ContainerInformation = styled.div`
  padding: 2% 3% 0 2%;
`;

export const ContainerMenu = styled.div`
  flex-basis: 25%;
  max-width: 25%;
  height: 200px;
  @media (max-width: 768px) {
    flex-basis: auto;
  }
`;

export const Row = styled.div`
  box-sizing: border-box;
  display: flex;
  flex: 0 1 auto;
  flex-direction: row;
  flex-wrap: wrap;
  margin-right: -8px;
  margin-left: -8px;
`;