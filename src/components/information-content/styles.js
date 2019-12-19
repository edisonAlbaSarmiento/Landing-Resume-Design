import styled from 'styled-components';

export const ContainerInformationUser = styled.div`
  display: flex;
  flex-direction: row;
  height: ${props => props.centerTitle ? `8%` : `50%`};
  width: 100%;
  background-color: red;
  justify-content: ${props => props.centerTitle ? `center` : `space-between`};
`;