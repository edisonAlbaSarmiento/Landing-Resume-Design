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
  margin-left: 20%;
  width: 62%;
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

export const Container = styled.div`
  display: flex;
  align-items:center;
  flex-direction: column;
`;

export const ContianerPower =  styled.div`
  display: flex;
  align-items:center;
  margin: 10px;
  width:100%;
  height: 10px;
`;

export const Progress =  styled.div`
  width: 100%;
  height: 10px;
  position: relative;
  background-color: yellow;
  margin: 10px;
`;

export const ProgressFill = styled.div`
  position: absolute;
  width: 10px;
  height: 20px;
  background-color: red;
  top: -4px;
  left: ${props => props.value ? props.value : '0%' };
`;