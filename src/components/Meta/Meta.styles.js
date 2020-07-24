import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
`


export const Figure = styled.div`
  margin-right: 10px;  
   
  svg {
    fill: #697789;
  }
`

export const Text = styled.div`
  color: #697789;
  font-size: 12px;
`

export const Color = styled.div`
  background: ${props => props.color};
  width: 10px;
  height: 10px;
  border-radius: 50%;
`

export const List = styled.ul`
  display: flex;
`

export const Item = styled.li`
  margin-right: 24px;

  &:last-child {
    margin-right: 0px;
  }
`