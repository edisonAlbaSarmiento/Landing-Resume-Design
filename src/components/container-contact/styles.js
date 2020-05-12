import styled from 'styled-components';

export const Form = styled.form``;

export const Container = styled.div`
  background-color: ${props => props.theme.color.purple};
`;  

export const ContainerHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0px 0px 0px 2%;
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
  flex-direction: column;
`;

export const TitleTextTarea = styled.h1`
  color: #95939c;
  @media (max-width: 768px) {
    font-size: 22px;
  }
`;

export const TextTarea = styled.textarea`
  width: 96%;
  height: 200px;
  background-color: #21152e;
  resize: none;
  color: white;
  font-size: 18px;
  margin: 1%;
  padding: 7px;
  @media (max-width: 768px) {
    height: 100px;
  }
`;

export const ContainerAbout = styled.div`
  padding: 2%;
`;

export const ContainerInputs = styled.div``;

export const Input = styled.input`
  width: 46%;
  height: 50px;
  margin: 1%;
  background-color: #1e1b34;
  font-size: 18px;
  color: white;
  padding-left: 7px;
  @media (max-width: 768px) {
    width: 98%;
    margin: 3%;
    height: 39px;
  }
`;

export const ContaninerButton = styled.div`
  margin: 1%;
`;

export const ButtonSubmit = styled.button`
  width: 26%;
  background-color: ${props => props.theme.color.pink};
  border: none;
  outline: none;
  cursor: pointer;
  @media (max-width: 768px) {
    width: 58%;
    margin: 3%;
  }
`;

export const TextButton = styled.p`
  font-size: 15px;
  color: ${props => props.theme.color.white};
`

