import styled from "styled-components";

export const Spacer = styled.div`
  padding: 20px;
`

export const Link = styled.a`
  color: #63AAF5;
  text-decoration: none;
  
  &:hover {
    text-decoration: underline
  }  
`;

export const Title = styled.h2`
  margin-top: 0px;
  margin-bottom: ${props => props["no-margin"] ? 0 : "25px"};
  font-size: 18px;  
`