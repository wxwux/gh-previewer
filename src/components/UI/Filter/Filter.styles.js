import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
`

export const Item = styled.div`
  margin-right: 5px;

  &:last-child {
    margin-right: 0px;
  }
`

export const Title = styled.div`
  font-size: 14px;
  margin-right: 16px;
`
