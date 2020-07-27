import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export const Form = styled.form`
  display: inline-flex;  
`;

export const Input = styled.input`
  padding: 6px 12px;
  margin-right: 8px;
  border: 1px solid ${(props) => props.theme.borders};
  border-radius: 5px;
`;

export const Button = styled.button`
  border: 1px solid ${(props) => props.theme.borders};
  text-transform: uppercase;
  padding: 0 10px;
  color: #fff;
  background: ${(props) => props.theme.blue};
  border-radius: 5px;
`;
