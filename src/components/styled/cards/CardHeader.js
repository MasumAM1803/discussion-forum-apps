import styled from 'styled-components';

const CardHeader = styled.div`
    display: flex;
    flex-direction: ${(props) => (props.inline === true ? 'row' : 'column')};
    gap: 12px;
    margin-bottom: 4px;
`;

export default CardHeader;
