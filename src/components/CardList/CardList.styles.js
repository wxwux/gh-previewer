import styled from "styled-components";

export const List = styled.ul`
  display: flex;
  margin-left: ${props => props.wide ? 0: "-20px"};
  flex-direction: ${props => props.wide ? "column" : "row"};
`
export const ListItem = styled.li`
  margin-left: ${props => props.wide ? 0 : "20px"};
  flex: 1;
  min-height: ${props => props.wide ? "auto" : "176px"};
  border: 0px solid #EBEBEB;
  border-top-width: ${props => props.wide ? "1px" : 0};
`
