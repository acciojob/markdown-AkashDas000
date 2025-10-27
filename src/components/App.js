import React, { useState } from 'react'
import MarkdownEditor from './MarkdownEditor'

const App = () => {

    const [input, setInput] = useState("")

  return (
    <div className='app'>
        <div style={{display: 'flex'}}> 
        <MarkdownEditor input={input} setInput={setInput}/>
        <div className='preview'>
            <h2>{input}</h2>
        </div>
        </div>
    </div>
  )
}

export default App