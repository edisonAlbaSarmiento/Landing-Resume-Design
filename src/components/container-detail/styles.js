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
  width: 30%;
  text-align: center;
  margin: 1%;
  height: 0%;
  cursor: pointer;
  border-radius: 20px;
  transition: 1s;
  &:hover {
    background-color: #4e3283;
    margin-top: -10px;
    transition: 1s;
  }
  @media (max-width: 768px) {
    width: 100%;
    margin: 2%;
  }
`;

export const ImageContainer = styled.img`
  width: 100%;
  height: 100%;
`;

export const TextImage = styled.span`
  color: white;
`;

export const LinkShare = styled.a`
  text-decoration: none;
  color: white;
`;

export const InputFilter = styled.input`
  width: 50%;
  margin: 3% 0px 0px 3%;
  height: 50%;
`;
