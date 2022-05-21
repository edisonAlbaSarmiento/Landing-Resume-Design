import styled from "styled-components";
import { bounceInRight } from "react-animations";
import { animation } from "../../utils";

export const Container = styled.div`
  background-color: ${(props) => props.theme.color.purple};
  width: 100%;
`;

export const ContainerText = styled.div``;

export const ContainerImage = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
`;

export const ContainerTitle = styled.div`
  padding: 3%;
`;

export const Title = styled.h2`
  font-size: 20px;
  color: ${(props) => props.theme.color.white};
  width: 100%;
  height: 2px;
`;
export const Line = styled.hr`
  background-color: ${(props) => props.theme.color.pink};
  height: 1px;
  width: 7%;
  border: 0;
  float: left;
  @media (max-width: 768px) {
    width: 24%;
  }
`;

export const ContainerCards = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  width: 100%;
  animation: 1s ${animation(bounceInRight)};
`;

export const Card = styled.div`
  padding-left: 20px;
  text-align: left;
  display: flex;
  flex-direction: column;
  width: 100%;
  @media (max-width: 768px) {
    width: 80%;
    height: 16%;
  }
`;

export const CardSubTilte = styled.div`
  padding: 3% 20px 0px 20px;
  font-size: 30px;
  text-align: left;
  width: 77%;
`;

export const TitleName = styled.h2`
  font-size: 55px;
  color: ${(props) => props.theme.color.white};
  width: 100%;
  font-weight: bold;
  margin: 0;
  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

export const SubTitle = styled.h3`
  font-size: 20px;
  color: ${(props) => props.theme.color.pink};
  height: 14%;
  width: 100%;
`;

export const TextDescription = styled.p`
  font-size: 20px;
  color: ${(props) => props.theme.color.grayText};
  width: 85%;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const ButtonHire = styled.button`
  width: 100%;
  background-color: ${(props) =>
    !props.activeButton
      ? props.theme.color.pink
      : props.theme.color.grayDisabled};
  border: none;
  outline: none;
  border-radius: 2%;
`;

export const ButtonKnow = styled.button`
  width: 50%;
  background-color: ${(props) =>
    props.activeButton
      ? props.theme.color.pink
      : props.theme.color.grayDisabled};
  border: none;
  margin-left: 10%;
  outline: none;
  border-radius: 2%;
`;

export const TextButton = styled.p`
  font-size: 100%;
  color: ${(props) => props.theme.color.white};
  cursor: pointer;
`;
export const ContentButtons = styled.div`
  display: flex;
  justify-content: initial;
  width: 100%;
  cursor: pointer;
`;

export const ImageBackground = styled.img`
  width: 430px;
  opacity: 0.4;
  border-radius: 5px 41% 5px 40%;
`;

export const CardImage = styled.div`
  padding: 20px;
  text-align: left;
  display: flex;
  flex-direction: column;
`;

export const ContainerButtons = styled.div`
  padding: 20px;
`;
