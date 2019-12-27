import styled from 'styled-components';

export const ContainerLefStrip = styled.div`
  width: 20%;
  height: 100%;
  background-color: #61a8a7;
  position: fixed;
  text-align: center;
  top: 0;
  left: 0;
  right: 68%; 
  margin: 0 auto;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
`;

export const ContainerImage = styled.div`
  margin: 45px;
  width: 62%;
  height: 19%;
  background-color: green;
  border-radius: 50%;
  overflow: hidden;
`;

export const Image = styled.img`
  height: 100%;
  width: 100%;
`;

export const ContainerInfoUser = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0px 36px 0 36px;
`;

export const ContianerPower =  styled.div`
`;