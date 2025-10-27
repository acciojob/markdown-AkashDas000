import React from 'react'

const MarkdownEditor = ({input, setInput}) => {
  return (
    <>
        <div className='textarea'>
            <textarea style={{width: '50vw', height: '50vh'}} onChange={(e)=>setInput(e.target.value)} >
                {input}
            </textarea>
        </div>

    </>
  )
}

export default MarkdownEditor