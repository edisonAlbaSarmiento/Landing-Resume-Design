
import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${props => props.theme.color.purpleMenu};
  width: 82%;
`;

export const ContainerImage = styled.div`
  padding: 15%;
  text-align: center;
`;

export const ImageProfile = styled.img`
  border-radius: 50%;
  height: 120px;
`;

export const ContainerButtons = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const ButtonMenu = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  font-size: 18px;
  text-align: left;
  padding: 8%;
  color: ${props => props.activeButton ? props.theme.color.pink : props.theme.color.white};
  border-left-style:${props => props.activeButton && 'solid'};
  border-left-color: ${props => props.activeButton && props.theme.color.pink};
  :active {
    background-color: ${props => props.theme.color.overMenu};
  }
`;