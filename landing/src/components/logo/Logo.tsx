import React from "react";
import { Container, LogoLabel } from "./styles";

type Props = {
  labeled?: boolean;
};

function Logo({ labeled = true }: Props) {
  return (
    <Container>
      <img src="../../../public/logo-clean.png" width={170} height={140} />
      {labeled && (
        <LogoLabel>India's first waterless car cleaning company</LogoLabel>
      )}
    </Container>
  );
}

export default Logo;
