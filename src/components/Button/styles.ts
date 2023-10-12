import styled, { css } from 'styled-components';

export const ButtonContainer = styled.button`
    width: 100%;
    height: 42px;
    background-color: ${(props) => (props.disabled ? '#81259D' : '#ccc')};
    color: #FFF;
    border: 1px solid ${(props) => (props.disabled ? '#81259D' : '#ccc')};
    border-radius: 21px;
    cursor: ${(props) => (props.disabled ? 'pointer' : 'not-allowed')};

    &:hover {
        ${(props) =>
            props.disabled &&
            css`
                opacity: 0.6;
            `}
    }
`;
