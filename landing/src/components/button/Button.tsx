import React, { MouseEventHandler } from "react";

import { Container, StyledButton } from "./styles";

interface SubmitButtonProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
  type: "button" | "submit";
}

const CustomButton = ({
  onClick,
  children,
  type,
  ...otherProps
}: SubmitButtonProps) => {
  const handleClick: MouseEventHandler<HTMLButtonElement> = (event) => {
    if (onClick) {
      onClick(event);
    }
  };

  return (
    <Container>
      <StyledButton type={type} onClick={handleClick} {...otherProps}>
        {children}
      </StyledButton>
    </Container>
  );
};

export default CustomButton;
