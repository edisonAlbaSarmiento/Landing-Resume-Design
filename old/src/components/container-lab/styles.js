import styled from "styled-components";
import { bounceInRight } from "react-animations";
import { animation } from "../../utils";

export const Container = styled.div`
  background-color: ${(props) => props.theme.color.purple};
`;

export const ContainerHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 3%;
`;

export const ContainerTitle = styled.div``;

export const Title = styled.h2`
  font-size: 20px;
  color: ${(props) => props.theme.color.white};
  width: 100%;
  height: 2px;
`;

export const Line = styled.hr`
  background-color: ${(props) => props.theme.color.pink};
  height: 1px;
  width: 100%;
  border: 0;
  float: left;
`;

export const ContainerCards = styled.div`
  width: 100%;
  display: flex;
  flex-flow: wrap;
  animation: 1s ${animation(bounceInRight)};
`;

export const ContainerChildren = styled.div`
  width: 27%;
  text-align: center;
  margin: 1%;
  padding: 2%;
  height: 24%;
  cursor: pointer;
  transition: 1s;
  object-fit: scale-down;

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
  height: 12em;
  object-fit: scale-down;
`;

export const ContainerDescription = styled.div`
  background-color: #1e1b34;
`;

export const ContainerText = styled.div`
  display: flex;
  flex-direction: column;
  width: 96%;
  word-wrap: break-word;
  padding: 3%;

  @media (max-width: 768px) {
    padding: 0;
    width: 100%;
  }
`;

export const TextPrimary = styled.span`
  color: white;
  text-align: left;
  font-size: 23px;
  font-weight: bold;
  padding: 2%;
`;

export const TextSecond = styled.p`
  color: ${(props) => props.theme.color.white};
  padding-top: 2%;
  text-align: left;
  font-weight: 100;
  padding: 2%;
`;

export const TextThree = styled.span`
  color: ${(props) => props.theme.color.pink};
  text-align: left;
  padding-top: 2%;
  font-size: 13px;
  cursor: pointer;
`;
export const ContainerModal = styled.div`
  width: 50%;
  background-color: ${(props) =>
    props.activeButton === 2
      ? props.theme.color.pink
      : props.theme.color.grayDisabled};
  border: none;
  margin-left: 10%;
  outline: none;
  border-radius: 2%;
`;

export const ButtonOpen = styled.button`
  background-color: ${(props) =>
    props.activeButton
      ? props.theme.color.pink
      : props.theme.color.grayDisabled};
  border: none;
  outline: none;
  width: 100%;
`;

export const TextButton = styled.p`
  font-size: 100%;
  color: ${(props) => props.theme.color.white};
`;

export const ButtonCustom = styled.div`
  background-color: ${(props) =>
    props.activeButton
      ? props.theme.color.pink
      : props.theme.color.grayDisabled};
  border: none;
  outline: none;
  cursor: pointer;
  width: 40%;
  height: 2em;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: flex-end;
  margin: 2%;
  padding: 2%;
  @media (max-width: 768px) {
    width: 100%;
    padding: 0;
    margin: 0%;
  }
`;

export const TextButtonCustom = styled.p`
  font-size: 100%;
  color: ${(props) => props.theme.color.white};
  cursor: pointer;
`;

export const ContentInfo = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 2%;
`;
