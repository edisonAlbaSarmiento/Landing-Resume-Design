import styled from "styled-components";
import Lottie from "react-lottie";

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const BackgroundPage = styled(Lottie)``;

const Title = styled.h2`
  font-size: 20px;
  color: ${(props) => props.theme.color.white};
  width: 100%;
  height: 2px;
  text-align: center;
`;

const ButtonMenu = styled.button`
  width: 100%;
  background-color: ${(props) =>
    !props.activeButton
      ? props.theme.color.pink
      : props.theme.color.grayDisabled};
  border: none;
  outline: none;
  border-radius: 2%;
  padding: 2%;
  :active {
    background-color: ${(props) => props.theme.color.overMenu};
  }
`;

const ContentButtons = styled.div`
  width: 10%;
  padding: 2%;
  @media (max-width: 768px) {
    padding: 5%;
    width: 50%;
  }
`;
export { Content, BackgroundPage, Title, ButtonMenu, ContentButtons };
