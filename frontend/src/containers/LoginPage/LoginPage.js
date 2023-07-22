import { useState } from "react"
import FullCenter from "../FullCenter"
import TextInput from "../../components/TextInput"
import SubmitButton from "../../components/SubmitButton"
import H1 from "../../components/H1"

const LoginPage = () => {

    let [logInput, setLogInput] = useState('')
    return (
        <FullCenter>
           <div style={{width: '384px', padding: '30px'}}>
           <H1 align={'left'}>Enter Binance Info</H1>
        <TextInput value={logInput} setValue={setLogInput} label={'Public key'} />
        <TextInput value={logInput} setValue={setLogInput} label={'Private key'} />
        <SubmitButton>Submit</SubmitButton>
        </div>
        </FullCenter>
     
    )
  }
  
  export default LoginPage