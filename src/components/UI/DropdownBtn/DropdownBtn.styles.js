import styled from "styled-components";

export const Container = styled.div`
  position: relative;
`

export const Display = styled.button`
  padding: 6px 10px;
  border: 1px solid;
  border-color: ${props => props.active ? "transparent" : props.theme.borders};
  border-radius: 5px;
  text-align: center;
  background: ${props => props.active ? props.theme.blue : "transparent"};
  font-size: 15px;
  color: ${props => props.active ? "#fff" : "inherit"};

  &:hover {
    background: ${props => props.active ? props.theme.blue : props.theme.hovers}
  }
`

export const Dropdown = styled.div`
  position: absolute;
  top: 100%;
  margin-top: 12px;
  position: absolute;
  max-width: 300px;
  min-width: 200px;
  right: 0;
  box-shadow: 0 0 5px 0 ${props => props.theme.borders};
  background: #fff;
  padding: 10px 0;
  border-radius: 5px;
`

export const List = styled.ul` 
  display: flex;
  flex-direction: column;
`

export const Indicator = styled.div`
`;

export const Item = styled.li` 
  ${Indicator} {
    display: ${props => props.active ? "block" : "none"};
  }  
`

export const Button = styled.button` 
  background: transparent;
  border: none;
  display: flex;
  padding: 7px 16px;
  width: 100%;
  text-align: left;
  align-items: center;
  justify-content: space-between;

  &:hover {
    background: ${props => props.theme.hovers};
  }
`