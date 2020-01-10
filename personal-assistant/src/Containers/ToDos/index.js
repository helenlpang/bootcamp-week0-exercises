import React, { useState } from 'react'
import AddSearch from './Components/AddSearch'
import Lists from './Components/Lists'

const ToDos = () => {
  const [tasks, addTask] = useState([])
  const [search, setSearch] = useState('')


  return (
    <div>
      <AddSearch tasks={tasks} addTask={addTask} search={search} setSearch={setSearch}/>
      <Lists tasks={tasks} addTask={addTask} search={search} setSearch={setSearch}/>
    </div>
  )
}

export default ToDos
