import styled from "styled-components";

export const Container = styled.div`
  position: relative;
`

export const Display = styled.button`
  padding: 6px 10px;
  border: 1px solid #EBEBEB;
  border-radius: 5px;
  text-align: center;
  background: transparent;
  font-size: 15px;
`

export const Dropdown = styled.div`
  position: absolute;
  top: 100%;
  margin-top: 12px;
  position: absolute;
  max-width: 300px;
  min-width: 200px;
  right: 0;
  box-shadow: 0 0 5px 0 #EBEBEB;
  background: #fff;
  padding: 10px 0;
  border-radius: 5px;
`

export const List = styled.ul` 
  display: flex;
  flex-direction: column;
`

export const Item = styled.li` 
`

export const Button = styled.button` 
  background: transparent;
  border: none;
  display: block;
  padding: 7px 16px;
  width: 100%;
  text-align: left;

  &:hover {
    background: #F8F8F8;
  }
`