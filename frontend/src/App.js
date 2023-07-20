import React from 'react'
import TextInput from './components/TextInput'
import SubmitButton from './components/SubmitButton'
import FullCenter from './containers/FullCenter'

const App = () => {

  let [logInput, setLogInput] = React.useState('')
  return (
   
      <FullCenter>
         <div style={{width: '384px', padding: '30px'}}>
      <TextInput value={logInput} setValue={setLogInput} label={'Binance api key'} />
      <SubmitButton>Submit</SubmitButton>
      </div>
      </FullCenter>
   
  )
}

export default App