import React from 'react'
import Add from './Add'
import Search from './Search'
import { TopContainer } from './styles'

const AddSearch = ( { tasks, addTask, search, setSearch } ) => (
  <TopContainer>
    <Add tasks={tasks} addTask={addTask} />
    <Search search={search} setSearch={setSearch} />
  </TopContainer>
)
export default AddSearch
