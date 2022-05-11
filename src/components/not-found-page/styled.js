import styled from "styled-components";
import Lottie from "react-lottie";

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const BackgroundPage = styled(Lottie)`
  width: 100%;
`;

const Title = styled.h2`
  font-size: 20px;
  color: ${(props) => props.theme.color.white};
  width: 100%;
  height: 2px;
  text-align: center;
`;

export { Content, BackgroundPage, Title };
