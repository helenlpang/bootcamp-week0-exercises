import React from 'react'
import { ButtonContainer, SearchButton, Input } from '../styles'

const Search = ({ search, setSearch }) => (
  <div>
    <ButtonContainer>
      <SearchButton>Search for a Todo</SearchButton>
      <Input placeholder="type here" value={search} onChange={e => setSearch(e.target.value)} />
    </ButtonContainer>
  </div>
)

export default Search
