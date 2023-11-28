import styled from 'styled-components';

const Flex = styled.div`
  display: flex;
  gap: 12px;
  flex-direction: ${(props) => (props.inline ? 'row' : 'column')}
`;

export default Flex;
