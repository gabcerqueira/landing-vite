import { Button } from "semantic-ui-react";
import styled from "styled-components";
export const Container = styled.div`
  width: 100%;
`;
export const StyledButton = styled(Button)`
  &&& {
    background-color: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.background};
    border: none;
    border-radius: 5px;
    padding: 1rem;
    margin: 1rem auto;
    cursor: pointer;
    width: 100%;
    &:hover {
      background-color: ${(props) => props.theme.colors.primaryHover};
      color: ${(props) => props.theme.colors.black};
    }
  }
`;
