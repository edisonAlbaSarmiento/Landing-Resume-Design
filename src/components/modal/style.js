import styled from 'styled-components';

export const ButtonOpen = styled.button`
  background-color: ${props => props.activeButton === 2 ? props.theme.color.pink : props.theme.color.grayDisabled};
  border: none;
  outline: none;
`;

export const TextButton = styled.p`
  font-size: 100%;
  color: ${props => props.theme.color.white};
`;

export const ButtonKnow2 = styled.button`
  width: 44%;
  background-color: ${props => props.activeButton === 2 ? props.theme.color.pink : props.theme.color.grayDisabled};
  border: none;
  margin-left: 20%;
  outline: none;
`;
