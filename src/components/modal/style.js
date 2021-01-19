import styled from 'styled-components';

export const ButtonOpen = styled.button`
  background-color: ${props => props.activeButton ? props.theme.color.pink : props.theme.color.grayDisabled};
  border: none;
  outline: none;
  width: 100%;
`;

export const TextButton = styled.p`
  font-size: 100%;
  color: ${props => props.theme.color.white};
`;
