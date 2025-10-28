import React, { useState } from 'react'
import MarkdownEditor from './MarkdownEditor'
import ReactMarkdown from 'react-markdown'

const App = () => {

    const [input, setInput] = useState("")

  return (
    <div className='app'>
        <div style={{display: 'flex'}}> 
        <MarkdownEditor input={input} setInput={setInput}/>
        <div className='preview'>
            <ReactMarkdown>{input}</ReactMarkdown>
        </div>
        </div>
    </div>
  )
}

export default App