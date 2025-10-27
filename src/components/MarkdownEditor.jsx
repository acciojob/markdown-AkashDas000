import React from 'react'

const MarkdownEditor = ({input, setInput}) => {
  return (
    <>
        <div className='textarea'>
            <textarea style={{width: '50vw', height: '50vh', fontWeight: "bold" }} onChange={(e)=>setInput(e.target.value)} >
                <b>{input}</b>
            </textarea>
        </div>

    </>
  )
}

export default MarkdownEditor