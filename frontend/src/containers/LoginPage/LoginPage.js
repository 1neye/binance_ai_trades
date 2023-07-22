import { useState } from "react"
import FullCenter from "../FullCenter"
import TextInput from "../../components/TextInput"
import SubmitButton from "../../components/SubmitButton"

const LoginPage = () => {

    let [logInput, setLogInput] = useState('')
    return (
        <FullCenter>
           <div style={{width: '384px', padding: '30px'}}>
        <TextInput value={logInput} setValue={setLogInput} label={'Public key'} />
        <TextInput value={logInput} setValue={setLogInput} label={'Private key'} />
        <SubmitButton>Submit</SubmitButton>
        </div>
        </FullCenter>
     
    )
  }
  
  export default LoginPage