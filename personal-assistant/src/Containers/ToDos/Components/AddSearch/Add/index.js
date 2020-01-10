import React, { useState } from 'react'
import nanoid from 'nanoid'
import { ButtonContainer, Button, Input } from '../styles'

const Add = ({ tasks, addTask }) => {
  const [input, setInput] = useState('')

  return (
    <div>
      <ButtonContainer>
        <Button onClick={() => input && addTask([...tasks, { id: nanoid(), task: input, todo: true }])}>Add a Todo</Button>
        <Input placeholder="type here" value={input} onChange={e => setInput(e.target.value)} />
      </ButtonContainer>

    </div>
  )
}

export default Add
