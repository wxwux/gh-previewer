import styled from "styled-components";

export const Container = styled.div`
  border-radius: ${props => props.flat ? "0px" : "5px"};
  padding: 14px 18px;
  border-color: ${props => props.theme.borders};
  border-style: solid;
  border-width: ${props => props.flat ? "0" : "1px"};

  display: flex;
  flex-direction: column;
  min-height: 100%;
  &:hover {
    background: ${props => props.theme.hovers};
  }
`

export const Header = styled.div`
  margin-bottom: 7px;
`

export const Title = styled.h3`
  margin-bottom: 2px;
  font-size: 19px;
`

export const Description = styled.div`
  font-size: 15px;
  color: #30485B;
  margin-bottom: 18px;
`

export const CardMeta = styled.div`
  margin-top: auto;
  padding-left: 4px;
`

export const ForkedFrom = styled.div`
  font-size: 12px
`
