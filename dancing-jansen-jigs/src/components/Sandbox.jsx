import { useState } from "react"

const Sandbox = () => {
const [text, setText] = useState('')

  return (
    <div>
      <input type="text" value={text} onChange={e => setText(e.target.value)} />
      <h3>My text is: {text}</h3>
    </div>

  )
}

export default Sandbox
