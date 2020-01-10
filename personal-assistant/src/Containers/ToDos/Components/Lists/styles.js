import styled from 'styled-components'
import finish from './finish.png'
import trash from './delete.png'
import undo from './undo.png'
import edit from './edit.png'

export const MiddleContainer = styled.div`
    width: 360px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const ListContainer = styled.div`
    width: 400px;
    display: flex;  
`
export const StyledTask = styled.li`
  color: white;
  display: flex;
  flex-direction: row;
  align-items: stretch;

`

export const TaskName = styled.li`
  color: white;
  padding: 35px;
  font-size: 20px;
  font-family: Arial, Helvetica, sans-serif
  
`

export const ListTitle = styled.h1`

  color: darkslategrey;
  margin-left: 490px;
  font-family: Arial, Helvetica, sans-serif;

`
export const StyledToDoList = styled.ul`
  background: plum; 
  width: 90vh;
  display: flex;
  flex-direction: column;
  list-style-type: none;
  margin-left:490px;
  

  
`

export const StyledFinishedList = styled.ul`
  background: powderblue; 
  width: 90vh;
  display: flex;
  margin-left: 490px;
  flex-direction: column;
  list-style-type: none;


`
export const SmallButtons = styled.div`
  opacity: 0.0;
  &:hover { 
      opacity: 1.0;
  }
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  transition: all 0.5s;

`
export const SmallButton = styled.button`
    width: 28px;
    height: 28px;
    border:none;
    border-radius: 3px;
    cursor: pointer;
    display: flex;
    align-self:center;
    margin-left: 5px;
    background-size: contain;
    
    
`

export const FinishButton = styled(SmallButton)`
  background-image: url(${finish});
  
`
export const EditButton = styled(SmallButton)`
  background-image: url(${edit});

`

export const TrashButton = styled(SmallButton)`
  background-image: url(${trash});

`

export const UndoButton = styled(SmallButton)`
  background-image: url(${undo});
  
`
export const EditInputText = styled.input`
    width: 200px;
    height: 28px;
    background-color: white;
    border: none;
    margin: 30px;
    margin-right: 5px;

`

export const EditInputButton = styled.button`
    height: 30px;
    margin: 2px;
    border-radius: 0px;
`
export const EditInput = styled.div`
  display: flex;
  align-items: center;

`

// export const FinishButton = styled(SmallButton)`
//   background-image: ${finish};
//   background-size: contain;
// `