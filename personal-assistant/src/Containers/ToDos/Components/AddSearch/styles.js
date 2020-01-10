import styled from 'styled-components'

export const TopContainer = styled.div`
    width: 360px;
    display: flex;
    flex-direction: row;
    align-items: center;
`

export const Input = styled.input`
    width: 47vh;
    height: 20px;
    background-color: white;
    border: 1px solid grey;
    margin: 8px;
    padding: 10px;
    font-family: Arial, Helvetica, sans-serif;

`

export const ButtonContainer = styled.div`
    width: 50vh;
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const Button = styled.button`
    width: 50vh;
    height: 80px;
    background: pink;
    border:none;
    cursor: pointer;
    transition: all 0.25s;
    padding: 30px;
    font-size: 17px;
    color: darkslategray;
    font-weight: bold;
    &:hover { 
        background: hotpink;
        color: white;
        
    }
    font-family: Arial, Helvetica, sans-serif
`

export const SearchButton = styled.button`
   width: 50vh;
    height: 80px;
    background: pink;
    border:none;
    transition: all 0.25s;
    padding: 30px;
    font-size: 17px;
    color: darkslategray;
    font-weight: bold;
    font-family: Arial, Helvetica, sans-serif;
    :focus {
        outline: none;
    }
`
