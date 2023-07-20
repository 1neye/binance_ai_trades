import { styled } from "styled-components";


const SubmitButton = styled.button`
    margin: 0px;
    appearance: none;
    user-select: none;
    cursor: pointer;
    overflow: hidden;
    text-overflow: ellipsis;
    display: inline-flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    box-sizing: border-box;
    font-size: 16px;
    font-family: inherit;
    font-weight: 500;
    text-align: center;
    text-decoration: none;
    outline: none;
    padding: 12px 24px;
    line-height: 24px;
    min-width: 80px;
    word-break: keep-all;
    color: rgb(24, 26, 32);
    border-radius: 4px;
    min-height: 24px;
    border: none;
    background-image: none;
    background-color: rgb(252, 213, 53);
    white-space: normal;
    width: 100%;
    height: 48px;

    &:active {
        background-color: rgb(240, 185, 11);
    }
`

export default SubmitButton