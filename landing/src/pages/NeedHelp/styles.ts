import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: ${(props) => props.theme.colors.background};
`;

export const Content = styled.div`
  max-width: 600px;
  padding: 20px;
  background-color: ${(props) => props.theme.colors.primary};
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  height: 50%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
`;

export const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 2rem;
`;

export const Text = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  padding: 1rem;
`;
