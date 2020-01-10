import React from 'react'
import { ToDoList, FinishedList } from './List'
import { MiddleContainer } from './styles'

const Lists = ({ tasks, addTask, search }) => (
  <MiddleContainer>
    <ToDoList tasks={tasks} addTask={addTask} search={search} />
    <FinishedList tasks={tasks} addTask={addTask} search={search}/>
  </MiddleContainer>
)
export default Lists
