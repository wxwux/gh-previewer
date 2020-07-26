import styled from "styled-components";

export const List = styled.ul`
  display: flex;
  margin-left: -20px;
  flex-direction: row;
  flex-wrap: wrap;
`

const calcItemWidth = () => "calc(100% / 3 - 20px)";

export const Item = styled.li`
  margin-left: 20px;
  min-height: 176px;
  flex-basis: ${calcItemWidth()}; 
  margin-bottom: 20px;
`
