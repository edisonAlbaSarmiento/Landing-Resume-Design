import styled from "styled-components";

export const Container = styled.div`
  background-color: ${(props) => props.theme.color.purpleMenu};
  width: 100%;
  border-radius: 2%;
  @media (max-width: 768px) {
    /* display: none; */
    width: 30%;
    position: fixed;
    z-index: 1;
    margin-left: ${(props) => (props.activeMenu ? "2%" : " -400px")};
    transition: all 0.5s;
  }
`;

export const ContainerMenuBurger = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: inherit;
    margin-top: 33%;
  }
`;

export const ContainerImage = styled.div`
  padding: 15%;
  text-align: center;
`;

export const ImageProfile = styled.img`
  border-radius: 50%;
  height: 120px;
  width: 120px;
  @media (max-width: 768px) {
    height: 50px;
    width: 50px;
  }
`;

export const ContainerButtons = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const ButtonMenu = styled.button`
  background-color: transparent;
  cursor: pointer;
  width: 100%;
  border: none;
  outline: none;
  font-size: 18px;
  text-align: left;
  padding: 8%;
  color: ${(props) =>
    props.activeButton ? props.theme.color.pink : props.theme.color.white};
  border-left-style: ${(props) => props.activeButton && "solid"};
  border-left-color: ${(props) => props.activeButton && props.theme.color.pink};
  :active {
    background-color: ${(props) => props.theme.color.overMenu};
  }
  @media (max-width: 768px) {
    font-size: 15px;
  }
`;

export const ContainerIconsFooter = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
  @media (max-width: 768px) {
    text-align: center;
    flex-direction: column;
  }
`;

export const ContainerChangeLanguage = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
  @media (max-width: 768px) {
    text-align: center;
    flex-direction: column;
  }
`;

export const TextLanguage = styled.h3`
  font-size: 14px;
  color: white;
  @media (max-width: 768px) {
    font-size: 10px;
  }
`;

export const ContainerLanguage = styled.div`
  padding: 4px;
  @media (max-width: 768px) {
    margin-left: 7%;
  }
`;
