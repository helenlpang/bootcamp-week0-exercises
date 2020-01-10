import React, { useState, useRef } from 'react'
// import { tasks } from '../index'
import { EditInput, EditInputButton, EditInputText, TaskName, StyledTask, StyledToDoList, StyledFinishedList, ListTitle, FinishButton, EditButton, TrashButton, UndoButton, SmallButtons } from '../styles'


const Task = ({ id, task, todo, tasks, addTask, }) => {
  const [edit, setEdit] = useState(false)
  const [editText, setEditText] = useState('')
  const editRef = useRef()
  return (
    <div>
      <StyledTask>
        <TaskName>{task}</TaskName>
        <SmallButtons>
          {todo
            ? <FinishButton onClick={() => addTask(tasks.map(t => t.id === id ? ({ ...t, todo: false }) : t))} />
            : <UndoButton onClick={() => addTask(tasks.map(t => t.id === id ? ({ ...t, todo: true }) : t))} />}
          <EditButton onClick={() => setEdit(!edit)} />
          <TrashButton onClick={() => addTask(tasks.filter(t => t.id !== id))} />
          {edit
            ? (
              <EditInput>
                <EditInputText placeholder="type here" value={editText} onChange={e => setEditText(e.target.value)} ref={editRef} />
                <EditInputButton onClick={() => {
                  editText && addTask(tasks.map(t => t.id === id ? ({ ...t, task: editText }) : t))
                  setEdit(!edit)
                }
                }>save</EditInputButton>
                <EditInputButton onClick={() => setEdit(!edit)}>cancel</EditInputButton>
              </EditInput>
            )
            : <div></div>
          }
        </SmallButtons>



      </StyledTask>
    </div>
  )

}

export const ToDoList = ({ tasks, addTask, search }) => (
  <div>
    <ListTitle>To Do List</ListTitle>
    <StyledToDoList>
      {tasks ? tasks.filter(({ todo }) => todo).filter(({ task }) => task.includes(search)).map(task => <Task {...task} tasks={tasks} addTask={addTask} key={task.id} />) : console.log('empty')}
    </StyledToDoList>
  </div>
)

export const FinishedList = ({ tasks, addTask, search }) => (
  <div>
    <ListTitle>Finished List</ListTitle>
    <StyledFinishedList>
      {tasks ? tasks.filter(({ todo }) => !todo).filter(({ task }) => task.includes(search)).map(task => <Task {...task} tasks={tasks} addTask={addTask} key={task.id} />) : console.log('empty')}
    </StyledFinishedList>
  </div>

)
