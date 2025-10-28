import React from 'react'

const MarkdownEditor = ({input, setInput}) => {


  return (
    <>
        <div className='textarea'>
            <textarea style={{width: '50vw', height: '50vh'}} value={input} onChange={(e)=>setInput(e.target.value)}/>
        </div>

    </>
  )
}

export default MarkdownEditor