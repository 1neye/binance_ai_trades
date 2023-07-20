import { css, styled } from "styled-components";

const Input = styled.div`
    display: flex;
    flex-flow: column nowrap;
    margin-bottom: 28px;

    & input {
        color: rgb(30, 35, 41);
        font-size: 14px;
        padding-left: 12px;
        padding-right: 12px;

        outline: none;
        height: 48px;

        border-radius: 4px;
        background-color: transparent;

        border: 1px solid rgb(234, 236, 239);

        &:hover {
            border-color: rgb(240, 185, 11);
        }

        &:focus {
            border-color: rgb(240, 185, 11);
        }

        ${props => props.value.length > 0 && css`
            border-color: rgb(240, 185, 11);
  
    `}

    }

    & p {
        box-sizing: border-box;
        margin: 0px 0px 4px;
        min-width: 0px;
        display: flex;
        font-weight: 400;
        font-size: 14px;
        line-height: 20px;
        width: 100%;
        -webkit-box-align: center;
        align-items: center;
        color: rgb(30, 35, 41);
        cursor: auto;
    }
`;



const TextInput = ({ label , value, setValue }) => {
    console.log(value.length)
    return (
        <Input value={value}>
            <p>{label}</p>
            <input onChange={(e) => setValue(e.target.value)} value={value} />
        </Input>
    )
}


export default TextInput