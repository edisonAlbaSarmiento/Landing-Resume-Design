import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${props => props.theme.color.purple};
  display: flex;
`;  

export const ContainerTitle = styled.div`
  padding: 3%;
`;

export const Title = styled.h2`
  font-size: '20px';
  color: ${props => props.theme.color.white};
  height: 14%;
  width: 100%;
`
export const Line = styled.hr`
  background-color: 'yellow';
  width: 100%;
`;