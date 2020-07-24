import styled from "styled-components";

export const List = styled.ul`
  display: flex;
  margin-left: ${props => props.wide ? 0: "-20px"};
  flex-direction: ${props => props.wide ? "column" : "row"};
  flex-wrap: ${props => props.wide ? "nowrap" : "wrap"}
`

const calcItemWidth = () => "calc(100% / 3 - 20px)";

export const Item = styled.li`
  margin-left: ${props => props.wide ? 0 : "20px"};
  min-height: ${props => props.wide ? "auto" : "176px"};
  border: 0px solid #EBEBEB;
  border-top-width: ${props => props.wide ? "1px" : 0};
  flex-basis: ${props => props.wide ? "initial" : calcItemWidth()} ; 
  margin-bottom: ${props => props.wide ? 0 : "20px"}
`
