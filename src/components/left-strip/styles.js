import styled from 'styled-components';

export const ContainerLefStrip = styled.div`
  width: 20%;
  height: 100%;
  background-color: yellow;
  position: absolute;
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
