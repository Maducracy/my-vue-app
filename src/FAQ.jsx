import React from 'react'
import { useState } from 'react'



const FAQ = () => {
const [Faq, setFaq] = useState("false")
  return (
    <div>
      <button onClick={()=>setFaq(!Faq)}></button>
    </div>
  )
}

export default FAQ