import React from 'react'

import { ExampleComponent, Button } from 'reactest'
import 'reactest/dist/index.css'

const App = () => {
  return (
    <>
      <ExampleComponent text='Hello 😄' />
      <Button text='Click' onClick={() => alert('Why you laughing?')} />
    </>
  )
}

export default App
