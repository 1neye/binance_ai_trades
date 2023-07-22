import { css, styled } from "styled-components";

const H1 = styled.h1`
    margin: 0;
    padding-bottom: 24px;
    font-weight: 600;
    font-size: 40px;
    line-height: 48px;
    color: rgb(30, 35, 41)

    ${props => props.align && css` text-align: ${props.align}`}
`

export default H1