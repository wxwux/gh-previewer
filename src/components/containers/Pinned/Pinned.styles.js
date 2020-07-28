import styled from "styled-components";

export const List = styled.ul`
  display: flex;
  margin-left: -20px;
  flex-direction: row;
  flex-wrap: wrap;
`;

const calcItemWidth = (itemsInRow) => `calc(100% / ${itemsInRow} - 20px)`;

export const Item = styled.li`
  margin-left: 20px;
  min-height: 176px;
  flex-basis: ${calcItemWidth(3)}; 
  margin-bottom: 20px;

  @media (max-width: ${(props) => props.theme.breakpoints.tablets}) {
    flex-basis: ${calcItemWidth(2)}; 
  }

  @media (max-width: ${(props) => props.theme.breakpoints.phones}) {
    flex-basis: ${calcItemWidth(1)}; 
  }
  
`;
