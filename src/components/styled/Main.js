import styled from 'styled-components';

const Main = styled.main`
  padding: ${(props) => (props.auth ? '0px' : '64px 0')};
`;

export default Main;
