import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
`;

export const Logo = styled.div`
  width: 100px;
  height: 100px;
  overflow: hidden;
  margin-right: 28px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const Text = styled.div`
  flex: 1;
  
  > * {
    margin-bottom: 10px;
    
    &:last-child {
      margin-bottom: 0px;
    }
  }
`;

export const Title = styled.h1`
  font-size: 23px;
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  padding-left: 4px;
`;

export const TextContainer = styled.div`
  margin-left: 10px;
  font-size: 12px;
`;
