import React from "react"
import { ContainerStyle } from "./styles";

interface ContainerProps {
  children: React.ReactNode;
}

export function Container({ children }: ContainerProps) {
  return <ContainerStyle>{children}</ContainerStyle>
}