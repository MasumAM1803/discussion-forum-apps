import styled from 'styled-components';

const CardContent = styled.div`
    display: flex;
    flex-direction: ${(props) => (props.inline ? 'row' : 'column')};
    gap: 14px;
`;

export default CardContent;
