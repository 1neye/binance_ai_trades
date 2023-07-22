import { styled } from "styled-components";

const Header = styled.header`
    display: flex;
    padding-left: 16px;
    padding-right: 16px;
    height: 64px;
    background: #fff;
    align-items: center;
    position: relative;
    z-index: 5;

    & a {
        display: flex;
        align-items: center;
        height: 100%;
        font-size: 14px;
        color: #1E2329;
        margin-left: 8px;
        margin-right: 8px;
        text-decoration: none;
        cursor: pointer;

        &:hover {
            color: #C99400;
        }

    }

    svg {
        fill: #F0B90B;
        width: 120px;
        height: 24px;
    }

`

export default Header